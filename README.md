# KT CCTV 설치 상담 신청 랜딩페이지

Next.js 15 + TypeScript + Tailwind CSS로 제작한 KT CCTV 설치 상담 신청 랜딩페이지입니다.

참고: [ishopcare.co.kr](https://www.ishopcare.co.kr/event/front01)

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Google Sheets API
- **Deployment**: Vercel (추천)

## 주요 기능

### 🎯 단계별 폼 시스템
- 3단계로 나누어진 직관적인 입력 프로세스
  1. **전화번호 입력** - 자동 포맷팅 (010-0000-0000)
  2. **설치지역 선택** - 전국 17개 시도
  3. **설치대수 선택** - 개인정보 동의 포함

### ✨ UX/UI 특징
- 실시간 유효성 검사
- 매끄러운 단계 전환 애니메이션
- 완전한 반응형 디자인 (모바일 우선)
- 키보드 네비게이션 지원 (Enter 키)

### 📊 데이터 관리
- 구글 시트 자동 연동
- 유입 경로 자동 추적
- 한국 시간대 자동 변환
- 개인정보 동의 여부 기록

## 프로젝트 구조

```
landing/
├── app/
│   ├── api/
│   │   └── submit/
│   │       └── route.ts          # Google Sheets API 라우트
│   ├── globals.css                # 전역 스타일
│   ├── layout.tsx                 # 루트 레이아웃
│   └── page.tsx                   # 메인 페이지
├── components/
│   ├── steps/
│   │   ├── PhoneStep.tsx          # 1단계: 전화번호
│   │   ├── LocationStep.tsx       # 2단계: 설치지역
│   │   └── QuantityStep.tsx       # 3단계: 설치대수
│   ├── FormSection.tsx            # 폼 메인 컴포넌트
│   ├── StepIndicator.tsx          # 단계 인디케이터
│   ├── SuccessModal.tsx           # 성공 모달
│   ├── Header.tsx                 # 헤더
│   ├── Footer.tsx                 # 푸터
│   └── FeaturesSection.tsx        # 기능 소개
├── types/
│   └── form.ts                    # 타입 정의
├── public/                        # 정적 파일
├── .env.example                   # 환경 변수 예시
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 시작하기

### 1. 프로젝트 클론 및 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 2. 구글 서비스 계정 설정

#### 2-1. Google Cloud 프로젝트 생성

1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. **API 및 서비스 > 라이브러리** 메뉴로 이동
4. "Google Sheets API" 검색 및 **사용 설정**

#### 2-2. 서비스 계정 생성

1. **IAM 및 관리자 > 서비스 계정** 메뉴로 이동
2. **서비스 계정 만들기** 클릭
3. 서비스 계정 이름 입력 (예: kt-cctv-landing)
4. **만들고 계속하기** 클릭
5. 역할은 선택하지 않고 **계속** 클릭
6. **완료** 클릭

#### 2-3. JSON 키 다운로드

1. 생성된 서비스 계정 클릭
2. **키** 탭으로 이동
3. **키 추가 > 새 키 만들기**
4. JSON 형식 선택 및 **만들기**
5. JSON 파일 자동 다운로드 (잘 보관하세요!)

### 3. 구글 시트 설정

1. 구글 시트 열기: [https://docs.google.com/spreadsheets/d/1AEthLUcOUlAac8lzH5dZ7nHM-DIvms2te7o1p3fYYP0](https://docs.google.com/spreadsheets/d/1AEthLUcOUlAac8lzH5dZ7nHM-DIvms2te7o1p3fYYP0)
2. **공유** 버튼 클릭
3. 서비스 계정 이메일 추가 (JSON 파일의 `client_email` 값)
   - 예: `kt-cctv-landing@PROJECT_ID.iam.gserviceaccount.com`
4. 권한: **편집자**로 설정
5. **보내기** 클릭

### 4. 환경 변수 설정

`.env.example`을 복사하여 `.env.local` 파일 생성:

```bash
cp .env.example .env.local
```

`.env.local` 파일 편집:

```env
GOOGLE_SPREADSHEET_ID=1AEthLUcOUlAac8lzH5dZ7nHM-DIvms2te7o1p3fYYP0
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...전체_JSON_내용...}'
```

**주의사항:**
- JSON 키 전체를 **한 줄로** 작은따옴표로 감싸서 입력
- 줄바꿈 없이 복사해야 함
- `.env.local` 파일은 절대 Git에 커밋하지 말 것!

### 5. 빌드 및 실행

```bash
# 개발 모드
npm run dev

# 프로덕션 빌드
npm run build
npm start

# Lint 검사
npm run lint
```

## 배포하기

### Vercel (추천)

가장 간단하고 빠른 배포 방법입니다.

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel
```

또는 [Vercel Dashboard](https://vercel.com)에서:

1. GitHub 저장소 연결
2. 환경 변수 설정 (GOOGLE_SPREADSHEET_ID, GOOGLE_SERVICE_ACCOUNT_KEY)
3. **Deploy** 클릭

### Netlify

```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 빌드
npm run build

# 배포
netlify deploy --prod
```

### 기타 플랫폼

- **AWS Amplify**: [문서](https://docs.amplify.aws/)
- **Cloudflare Pages**: [문서](https://developers.cloudflare.com/pages/)
- **Railway**: [문서](https://docs.railway.app/)

## 구글 시트 데이터 구조

자동으로 생성되는 헤더:

| 유입 페이지 | 전화번호 | 설치지역 | 설치대수 | 작성시간 | 개인정보동의 |
|------------|---------|---------|---------|---------|-------------|
| Direct | 010-1234-5678 | 서울 | 3대 | 2025-10-28 21:34:56 | 동의 |

## 커스터마이징

### 색상 변경

`tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#e8344e',  // 메인 컬러 변경
    hover: '#d12040',    // 호버 컬러 변경
  },
  // ...
}
```

### 지역 옵션 수정

`components/steps/LocationStep.tsx`:

```typescript
const locations = [
  '서울', '경기', '인천', // 원하는 지역 추가/삭제
];
```

### 설치대수 옵션 수정

`components/steps/QuantityStep.tsx`:

```typescript
const quantities = ['1대', '2대', '3대']; // 옵션 변경
```

## 문제 해결

### 1. 폼이 제출되지 않는 경우

```bash
# 개발 모드에서 콘솔 확인
npm run dev
# 브라우저 콘솔(F12)에서 에러 확인
```

**체크리스트:**
- [ ] `.env.local` 파일이 올바르게 설정되었나요?
- [ ] 서비스 계정이 구글 시트에 편집자 권한을 가지고 있나요?
- [ ] Google Sheets API가 활성화되어 있나요?

### 2. 타입 에러

```bash
# 타입 체크
npm run build

# 타입 에러가 있다면
npm install --save-dev @types/node @types/react @types/react-dom
```

### 3. 환경 변수가 인식되지 않는 경우

- 파일 이름이 `.env.local`인지 확인
- 서버 재시작 (`Ctrl+C` 후 `npm run dev`)
- Vercel: 대시보드에서 환경 변수 확인 및 재배포

## 개선 사항

앞으로 추가할 수 있는 기능:

- [ ] 카카오톡 알림 연동
- [ ] 이메일 자동 발송 (Resend, SendGrid)
- [ ] 관리자 대시보드
- [ ] A/B 테스트 (Vercel Edge Config)
- [ ] 광고 추적 (GTM, Facebook Pixel)
- [ ] 다크 모드
- [ ] 다국어 지원 (next-intl)

## 라이선스

MIT License

## 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Vercel Deployment](https://vercel.com/docs)

## 문의

문제가 발생하거나 질문이 있으시면 GitHub Issues를 통해 문의해주세요.
