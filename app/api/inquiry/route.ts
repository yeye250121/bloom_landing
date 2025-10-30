import { NextRequest, NextResponse } from 'next/server';
import { inquiryRequestSchema } from '@/lib/validations';
import { appendInquiryToSheet } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request data
    const validationResult = inquiryRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: '입력 데이터가 유효하지 않습니다',
          errors: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    // Append to Google Sheets
    await appendInquiryToSheet(validationResult.data);

    return NextResponse.json(
      {
        success: true,
        message: '문의가 성공적으로 접수되었습니다',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ API 오류:', error);

    return NextResponse.json(
      {
        success: false,
        message: '서버 오류가 발생했습니다',
      },
      { status: 500 }
    );
  }
}

// OPTIONS 메서드 지원 (CORS preflight)
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
