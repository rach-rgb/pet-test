# Cat MBTI

GitHub Pages에서 바로 호스팅할 수 있는 정적 고양이 MBTI 테스트입니다.

## 구성

- `index.html`: 화면 구조
- `styles.css`: 반응형 UI 스타일
- `script.js`: 질문, 결과 산출, 공유 링크, 결과 이미지 생성
- `assets/cat-mascot.png`: 결과 카드용 고양이 이미지

## 배포

1. GitHub 저장소에 이 파일들을 push합니다.
2. GitHub 저장소의 `Settings > Pages`로 이동합니다.
3. `Deploy from a branch`를 선택합니다.
4. `main` 브랜치와 `/root`를 선택한 뒤 저장합니다.

배포 후 `https://사용자명.github.io/저장소명/` 주소로 접속할 수 있습니다.

## 공유 방식

서버가 없는 GitHub Pages 환경이므로 생성된 PNG를 서버에 업로드하지 않습니다. 대신 결과 링크는 `?type=ENFJ`처럼 유형을 담아 같은 결과 화면을 재현하고, 브라우저에서 결과 PNG를 즉석 생성해 저장하거나 공유합니다.
