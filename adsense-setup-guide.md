# Google AdSense 연결 가이드

## 1. Google AdSense 계정 설정

### 1.1 AdSense 계정 생성
1. [Google AdSense](https://www.google.com/adsense)에 접속
2. Google 계정으로 로그인
3. "시작하기" 클릭
4. 다음 정보 입력:
   - 웹사이트 URL: `https://your-domain.com` (실제 도메인)
   - 사이트 언어: 한국어
   - 콘텐츠 언어: 한국어, 영어, 중국어, 일본어
   - 사이트 카테고리: 엔터테인먼트 > 게임

### 1.2 사이트 검토
- Google이 사이트를 검토하는데 1-2주 소요
- 검토 중에는 광고가 표시되지 않음
- 승인되면 이메일로 알림

## 2. AdSense 코드 추가

### 2.1 Publisher ID 확인
1. AdSense 대시보드에서 "설정" > "계정 정보" 확인
2. Publisher ID 형식: `ca-pub-XXXXXXXXXX`

### 2.2 HTML 파일 수정
`index.html` 파일에서 다음 부분을 수정:

```html
<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID" crossorigin="anonymous"></script>
```

`YOUR_PUBLISHER_ID`를 실제 Publisher ID로 변경

### 2.3 광고 단위 생성
1. AdSense 대시보드에서 "광고" > "광고 단위" 클릭
2. "새 광고 단위 만들기" 클릭
3. 광고 유형 선택:
   - **디스플레이 광고**: 일반적인 배너 광고
   - **인피드 광고**: 콘텐츠 사이에 자연스럽게 삽입
   - **반응형 광고**: 화면 크기에 자동 조정

### 2.4 광고 코드 삽입
생성된 광고 단위의 코드를 다음 위치에 삽입:

#### 메인 페이지 상단
```html
<div class="ad-container ad-top">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
         data-ad-slot="YOUR_AD_SLOT_ID"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

#### 결과 페이지 상단
```html
<div class="ad-container ad-result-top">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
         data-ad-slot="YOUR_RESULT_AD_SLOT_ID"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

## 3. 광고 최적화

### 3.1 광고 위치 권장사항
- **상단 광고**: 페이지 로드 후 즉시 노출
- **콘텐츠 중간**: 사용자 참여도 높은 위치
- **결과 페이지**: 사용자가 결과를 확인하는 시간이 긴 페이지

### 3.2 광고 크기 권장사항
- **반응형 광고**: 모바일/데스크톱 자동 조정
- **728x90**: 데스크톱 상단 배너
- **300x250**: 사이드바 또는 콘텐츠 중간
- **320x50**: 모바일 상단

### 3.3 사용자 경험 고려사항
- 광고가 콘텐츠를 방해하지 않도록 배치
- 과도한 광고 배치 금지 (Google 정책 위반)
- 광고 클릭을 유도하는 텍스트 사용 금지

## 4. 수익 최적화

### 4.1 광고 성과 모니터링
1. AdSense 대시보드에서 다음 지표 확인:
   - **페이지뷰**: 광고가 표시된 횟수
   - **클릭률 (CTR)**: 클릭된 광고 비율
   - **eCPM**: 1000회 노출당 수익
   - **수익**: 총 광고 수익

### 4.2 수익 최적화 팁
- **A/B 테스트**: 다양한 광고 위치와 크기 테스트
- **콘텐츠 품질**: 고품질 콘텐츠로 트래픽 증가
- **SEO 최적화**: 검색 엔진 순위 향상으로 트래픽 증가
- **소셜 미디어**: SNS를 통한 사이트 홍보

### 4.3 정책 준수
- **클릭 사기 금지**: 자신의 광고 클릭 금지
- **콘텐츠 정책**: Google 콘텐츠 정책 준수
- **광고 정책**: 과도한 광고 배치 금지

## 5. 문제 해결

### 5.1 광고가 표시되지 않는 경우
1. **계정 승인 대기**: 1-2주 대기
2. **코드 오류**: HTML 코드 확인
3. **정책 위반**: AdSense 정책 확인
4. **트래픽 부족**: 최소 트래픽 요구사항 확인

### 5.2 수익이 낮은 경우
1. **트래픽 증가**: SEO, SNS 마케팅
2. **광고 위치 최적화**: A/B 테스트
3. **콘텐츠 품질 향상**: 사용자 참여도 증가
4. **광고 단위 다양화**: 다양한 광고 유형 사용

### 5.3 계정 정지 위험
1. **정책 위반 확인**: AdSense 정책 재검토
2. **클릭 사기 방지**: 자연스러운 클릭 유도
3. **콘텐츠 품질**: 유용하고 원본 콘텐츠 제공

## 6. 추가 수익화 방법

### 6.1 Google AdSense 외 추가 옵션
- **Amazon Associates**: 제품 추천 수익
- **CJ Affiliate**: 다양한 제휴 프로그램
- **네이버 파트너스**: 한국 시장 특화
- **직접 광고**: 기업과 직접 계약

### 6.2 프리미엄 서비스
- **상세 분석**: 고급 성격 분석 리포트
- **개인 상담**: 전문가 상담 서비스
- **데이터 내보내기**: 결과 PDF 다운로드
- **광고 없는 버전**: 프리미엄 구독

## 7. 모니터링 및 분석

### 7.1 Google Analytics 연동
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 7.2 주요 지표 모니터링
- **페이지뷰**: 사이트 방문자 수
- **세션 시간**: 사용자 체류 시간
- **이탈률**: 페이지 이탈 비율
- **광고 수익**: AdSense 수익

## 8. 법적 고려사항

### 8.1 개인정보 보호
- **GDPR 준수**: 유럽 사용자 데이터 보호
- **쿠키 정책**: 쿠키 사용에 대한 명시
- **개인정보처리방침**: 개인정보 수집/이용 안내

### 8.2 광고 관련 법규
- **광고 표시 의무**: 광고임을 명시
- **스폰서 콘텐츠**: 스폰서 콘텐츠 표시
- **청소년 보호**: 청소년 대상 광고 제한

## 9. 성공 사례 및 팁

### 9.1 성공적인 광고 수익화
1. **콘텐츠 품질**: 유용하고 재미있는 콘텐츠
2. **사용자 경험**: 광고가 방해되지 않는 배치
3. **SEO 최적화**: 검색 엔진 순위 향상
4. **소셜 마케팅**: SNS를 통한 홍보

### 9.2 장기적 성장 전략
- **콘텐츠 확장**: 새로운 테스트 유형 추가
- **사용자 참여**: 댓글, 공유 기능 추가
- **모바일 최적화**: 모바일 사용자 경험 향상
- **다국어 지원**: 글로벌 시장 진출

## 10. 지원 및 리소스

### 10.1 유용한 링크
- [Google AdSense 도움말](https://support.google.com/adsense)
- [AdSense 정책](https://support.google.com/adsense/answer/48182)
- [Google Analytics](https://analytics.google.com)
- [Google Search Console](https://search.google.com/search-console)

### 10.2 커뮤니티
- [AdSense 포럼](https://productforums.google.com/forum/#!forum/adsense)
- [웹마스터 센트럴](https://webmasters.googleblog.com)
- [한국 AdSense 커뮤니티](https://cafe.naver.com/adsense)

---

**주의사항**: 이 가이드는 일반적인 정보를 제공합니다. 실제 적용 시에는 Google AdSense의 최신 정책과 가이드라인을 확인하시기 바랍니다. 