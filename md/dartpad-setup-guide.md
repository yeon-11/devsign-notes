# 🛠️ IntelliJ IDEA로 Dart 개발환경 세팅 가이드

**1. IntelliJ IDEA 설치**

👉 [공식 다운로드 페이지](https://www.jetbrains.com/ko-kr/idea/download/?section=windows) 접속  
👉 하단의 **Community Edition** 에서 다운로드 후 실행

설치 중 옵션은 모두 체크:
- 바탕화면 아이콘 생성
- 파일 연결(.java, .kt 등)

설치 완료 후 **재부팅 필수!**

---

**2. Dart 플러그인 설치**

상단 메뉴 → `Plugins`  
검색창에 `Dart` 입력 → **설치**  
> 설치 후 재시작 필요할 수 있음

⚠️ Flutter도 개발할 경우 `Flutter` 플러그인도 설치!

---

**3. 세팅 변경**

`File` → `Settings (Ctrl + Alt + S)`  
다음 항목들 설정:

- `Editor > General > Mouse Control`  
  👉 `Change font size with Ctrl + Mouse Wheel` 체크 여부 확인
- `Editor > General > Editor Tabs`  
  👉 `Active editor only` 설정 여부 확인

---

**4. Dart 파일 생성**

`File` → `Open` → 작업할 폴더 선택  
`lib` 폴더 우클릭 → `New` → `Dart File`  
파일 이름 입력 (예: `main.dart`)

---

## ✅ TIP

- Dart 실행 시 `main()` 함수 필요!
- `void main() { print('Hello, Dart!'); }` 로 테스트 가능
- IntelliJ에서 Run 버튼으로 실행도 가능
- 자동완성, 디버깅 기능 매우 훌륭함