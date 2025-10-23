# Next.js 설치 가이드

**1. 프로젝트 생성**

```bash
npx create-next-app@latest
```

> 처음 실행 시 의존성 설치에 몇 초 걸릴 수 있음!

---

**2. 초기 설정**

아래 질문들에 순서대로 답하세요:

1. **What is your project named?**  
   원하는 프로젝트 이름 입력 (예: `프로젝트명`)

2. **Would you like to use TypeScript?**  
   `No (n)` 선택

3. **Would you like to use ESLint?**  
 `No (n)` 선택

4. **Would you like to use Tailwind CSS?**  
   `No (n)` 선택

5. **Would you like to use `src/` directory?**  
   `Yes (y)` 선택

6. **Would you like to use App Router (recommended)?**  
   `Yes (y)` 선택

7. **Would you like to customize the default import alias (`@/*`)?**  
   `Yes (y)` 선택

8. **What import alias would you like configured?**  
   그냥 `Enter` 눌러 기본값 `@/*` 사용

---

**3. 생성된 프로젝트로 이동**

```bash
cd 프로젝트명
```

> 위에서 입력한 이름과 동일한 디렉토리명!

---

**4. 개발 서버 실행**

```bash
npm run dev
```

접속: `http://localhost:3000`

---

## TIP

- `Ctrl + C` 로 서버 종료 가능
- 설정 바꾸고 새로 시작할 땐 `npm run dev` 다시 실행
- `src/app/page.tsx` → 첫 화면 내용 수정 가능

---
