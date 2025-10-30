import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// 구글 시트 설정
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID || '1AEthLUcOUlAac8lzH5dZ7nHM-DIvms2te7o1p3fYYP0';
const SHEET_NAME = '신규 문의';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 한국 시간으로 변환
    const timestamp = new Date(data.timestamp);
    const kstTimestamp = new Intl.DateTimeFormat('ko-KR', {
      timeZone: 'Asia/Seoul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(timestamp);

    // Google Sheets API 인증
    const auth = new google.auth.GoogleAuth({
      credentials: process.env.GOOGLE_SERVICE_ACCOUNT_KEY
        ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
        : undefined,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // 헤더 확인 및 추가
    const headerCheck = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:F1`,
    });

    if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
      // 헤더 추가
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:F1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [['유입 페이지', '전화번호', '설치지역', '설치대수', '작성시간', '개인정보동의']],
        },
      });
    }

    // 데이터 추가
    const row = [
      data.referrer || 'Direct',
      data.phone || '',
      data.location || '',
      data.quantity || '',
      kstTimestamp,
      data.privacyAgree ? '동의' : '미동의',
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: '데이터가 성공적으로 저장되었습니다.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return NextResponse.json(
      {
        success: false,
        message: '데이터 저장 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
