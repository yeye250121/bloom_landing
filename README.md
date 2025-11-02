# KT 텔레캅 CCTV - Next.js Landing Page

KT 텔레캅 CCTV 무료 상담 신청 랜딩 페이지입니다.

## 기술 스택

- **Next.js 14** - App Router
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **React Hook Form** - 폼 상태 관리
- **Zod** - 스키마 검증
- **Google Sheets API** - 데이터 저장

## 주요 기능

### 프론트엔드
- 4단계 다중 폼 UI (전화번호 → 설치지역 → 설치대수 → 개인정보 동의)
- 반응형 디자인 (모바일 최적화)
- 실시간 폼 검증
- 한국 전화번호 자동 포맷팅 및 검증
- 자동 단계 진행 (전화번호 입력 완료 시)
- 부드러운 애니메이션 및 트랜지션

### 백엔드
- Next.js API Routes (Route Handler)
- Google Sheets 실시간 데이터 저장
- Slack 실시간 알림 (선택사항)
- Zod를 통한 서버사이드 검증
- 환경 변수 기반 설정
- CORS 지원

### 분석 도구
- Google Tag Manager
- Google Analytics
- Facebook Pixel
- Kakao Pixel

## 프로젝트 구조

```
bloom-landing-nextjs/
├── app/
│   ├── api/
│   │   └── inquiry/
│   │       └── route.ts          # API 엔드포인트 (상담 신청 처리)
│   ├── policies/                 # 개인정보 처리방침 페이지
│   ├── layout.tsx                # 루트 레이아웃 (분석 스크립트 포함)
│   ├── page.tsx                  # 메인 랜딩 페이지
│   └── globals.css               # 글로벌 스타일
├── components/
│   ├── ConsultationForm.tsx      # 4단계 상담 신청 폼 (메인 폼)
│   ├── Hero.tsx                  # 히어로 섹션
│   ├── Features.tsx              # 기능 소개 섹션
│   ├── FeatureList.tsx           # 기능 리스트
│   ├── HowToParticipate.tsx      # 참여 방법 섹션
│   ├── SpecialBenefits.tsx       # 특별 혜택 섹션
│   ├── Navigation.tsx            # 네비게이션
│   └── Footer.tsx                # 푸터
├── lib/
│   ├── google-sheets.ts          # Google Sheets 클라이언트
│   ├── slack.ts                  # Slack 알림 클라이언트
│   ├── validations.ts            # Zod 검증 스키마
│   └── utils.ts                  # 유틸리티 함수
├── types/
│   └── inquiry.ts                # TypeScript 타입 정의
├── public/
│   ├── config.js                 # 클라이언트 설정
│   └── images/                   # 이미지 자산
├── .env.local                    # 환경 변수 (Git 제외)
├── .env.example                  # 환경 변수 템플릿
└── package.json
```

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 내용을 입력하세요:

```bash
# Google Sheets API
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_PROJECT_ID=your_project_id
GOOGLE_PRIVATE_KEY_ID=your_private_key_id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your_service_account_email
GOOGLE_CLIENT_ID=your_client_id

# 분석 도구 (선택사항)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=your_fb_pixel_id
NEXT_PUBLIC_KAKAO_PIXEL_ID=your_kakao_pixel_id

# Slack 알림 (선택사항)
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## Google Sheets 설정

### 1. Google Cloud 프로젝트 생성
1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 새 프로젝트 생성
3. Google Sheets API 활성화

### 2. 서비스 계정 생성
1. "API 및 서비스" > "사용자 인증 정보"
2. "사용자 인증 정보 만들기" > "서비스 계정"
3. JSON 키 다운로드

### 3. Google Sheets 권한 부여
1. Google Sheets 생성
2. 서비스 계정 이메일에 편집 권한 부여
3. 시트 ID를 환경 변수에 설정

### 4. 시트 구조

시트 이름: **신규 문의**

| A (유입경로) | B (전화번호) | C (설치지역) | D (설치대수) | E (제출시간) | F (동의여부) |
|------------|------------|------------|------------|------------|------------|
| URL        | 010-xxxx   | 서울시 강남구 | 1          | ISO 날짜    | Y/N        |

## Slack 알림 설정 (선택사항)

새로운 상담 신청이 접수될 때마다 Slack으로 실시간 알림을 받을 수 있습니다.

### 1. Slack 웹훅 URL 생성

1. [Slack API](https://api.slack.com/apps) 접속
2. **"Create New App"** 클릭
3. **"From scratch"** 선택
4. App 이름 입력 (예: `KT CCTV 알림봇`)
5. Workspace 선택
6. 좌측 메뉴에서 **"Incoming Webhooks"** 클릭
7. **"Activate Incoming Webhooks"** 토글 활성화
8. **"Add New Webhook to Workspace"** 클릭
9. 알림을 받을 채널 선택 (예: #general, #영업팀)
10. **Webhook URL 복사** (예: `https://hooks.slack.com/services/T00000000/B00000000/XXXX...`)

### 2. 환경 변수 설정

`.env.local` 파일에 Webhook URL 추가:

```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### 3. 알림 메시지 예시

```
새로운 상담 신청
─────────────────
전화번호: 010-1234-5678
설치 지역: 서울시 강남구
설치 대수: 5대
유입 경로: UTM: facebook / cpc
접수 시간: 2024-01-15 14:23:45

[Google Sheets에서 보기]
```

### 4. 참고사항

- Slack 웹훅이 설정되지 않아도 정상 작동합니다 (선택사항)
- 알림 전송 실패 시에도 문의 접수는 정상적으로 처리됩니다

## API 엔드포인트

### POST `/api/inquiry`

문의 데이터를 Google Sheets에 저장합니다.

**Request Body:**
```json
{
  "phoneNumber": "010-1234-5678",
  "installLocation": "서울시 강남구",
  "installCount": 1,
  "privacyConsent": true,
  "referrerUrl": "https://example.com",
  "submittedAt": "2024-01-01T00:00:00.000Z"
}
```

**Response (성공):**
```json
{
  "success": true,
  "message": "문의가 성공적으로 접수되었습니다"
}
```

**Response (실패):**
```json
{
  "success": false,
  "message": "입력 데이터가 유효하지 않습니다",
  "errors": [...]
}
```

## 폼 검증 규칙

### 전화번호
- 한국 전화번호 형식 검증
- 지원 형식:
  - 010-XXXX-XXXX
  - 011/016/017/018/019-XXX-XXXX
  - 02-XXX-XXXX (서울)
  - 031-065 지역번호
  - 0504 특수번호

### 설치 지역
- 최소 2자 이상
- 최대 100자

### 설치 대수
- 정수만 허용
- 최소 1개
- 최대 100개

### 개인정보 동의
- 필수 체크

## 배포

### Vercel 배포

```bash
npm install -g vercel
vercel
```

환경 변수를 Vercel 대시보드에서 설정하세요.

### 환경 변수 설정
1. Vercel 프로젝트 설정
2. "Environment Variables" 탭
3. `.env.local`의 모든 변수 추가

## 개발 노트

### 전화번호 포맷팅
- 사용자가 입력하는 동안 자동으로 하이픈 추가
- 숫자만 추출하여 저장

### 4단계 폼 플로우
1. **Step 1**: 전화번호 입력 (자동 포맷팅 및 자동 진행)
2. **Step 2**: 설치 지역 입력
3. **Step 3**: 설치 대수 입력 (1~100대)
4. **Step 4**: 개인정보 동의 및 입력 정보 확인 → 제출

### 컨버전 추적
폼 제출 성공 시 다음 이벤트 전송:
- Google Analytics: `conversion` 이벤트
- Facebook Pixel: `Lead` 이벤트
- Kakao Pixel: `CompleteRegistration` 이벤트

## 주요 기능 하이라이트

### 🔥 자동 전화번호 포맷팅
입력 중에 실시간으로 `010-1234-5678` 형식으로 자동 변환됩니다.

### ⚡ 스마트 폼 진행
유효한 전화번호를 입력하면 자동으로 다음 단계로 이동합니다.

### 📊 유입 경로 추적
방문자의 유입 경로(UTM, Referrer)를 자동으로 추적하고 저장합니다.

### 🔔 실시간 알림
Google Sheets에 저장과 동시에 Slack으로 실시간 알림을 받을 수 있습니다.

### 📱 완벽한 반응형
모바일, 태블릿, 데스크톱 모든 환경에 최적화되어 있습니다.

## 기술 스택 상세

| 카테고리 | 기술 | 용도 |
|---------|------|------|
| **프레임워크** | Next.js 14 (App Router) | React 기반 풀스택 프레임워크 |
| **언어** | TypeScript | 타입 안정성 |
| **스타일링** | Tailwind CSS | 유틸리티 기반 CSS |
| **폼 관리** | React Hook Form | 폼 상태 관리 |
| **검증** | Zod | 스키마 검증 (클라이언트 & 서버) |
| **데이터 저장** | Google Sheets API | 실시간 데이터 저장 |
| **알림** | Slack Webhook | 실시간 알림 |
| **분석** | GA4, GTM, FB Pixel, Kakao Pixel | 마케팅 분석 |

## 배포 URL

🔗 **프로덕션**: [bloom-landing-three.vercel.app](https://bloom-landing-three.vercel.app)

## 라이선스

Copyright © 2024 KT 텔레캅. All rights reserved.
