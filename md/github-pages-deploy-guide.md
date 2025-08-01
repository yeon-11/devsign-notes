# ✨ Git + GitHub Pages 배포 매뉴얼 (Vite 기준)


**1. Git 설치 옵션 (설치 시 선택 사항)**

- Visual Studio Code (기본 에디터)
- Let Git decide (브랜치 이름 자동 지정)
- Git from the command line and also from 3rd-party software
- Use bundled OpenSSH
- Use native Windows Secure Channel
- Checkout Windows-style, commit Unix-style
- Use MinTTY (Git Bash)
- Fast-forward or merge
- Git Credential Manager
- ✅ **Enable file system caching** ← 꼭 체크!

---

**2. Git 사용자 정보 등록 (최초 1회만)**

```bash
git config --global user.name "깃허브아이디"
git config --global user.email "your-email@example.com"
```

---

**3. Vite 빌드 설정**

`vite.config.js` 또는 `vite.config.mjs`에 아래 설정 추가:

```js
export default defineConfig({
  base: '/레포지토리이름/',
  build: {
    outDir: 'docs',
  },
});
```

---

**4. Git 초기화**

```bash
git init
```

---

**5. Vite 빌드 실행 (`docs` 폴더 생성됨)**

```bash
npm run build
```

👉 `docs/` 폴더가 생성되어야 GitHub Pages 배포 가능!

---

**6. Git 커밋 준비**

```bash
git add .
git commit -m "첫 배포 준비: 빌드 결과물 추가"
```

---

**7. 브랜치 이름 변경 및 원격 저장소 연결**
 
```bash
git branch -M main
git remote add origin https://github.com/깃허브아이디/레포지토리이름.git
```

---

**8. 원격 저장소로 푸시**

```bash
git push -u origin main
```

---

**9. GitHub Pages 설정**

1. 깃허브 저장소 → **Settings**
2. 왼쪽 탭에서 **Pages** 선택
3. **Source**: `main` / `docs` 폴더 선택
4. 저장 (Save)

---

**10. 배포 결과 확인**

브라우저에서 확인:

```
https://깃허브아이디.github.io/레포지토리이름/
```

---

**11. 수정 후 재배포**

```bash
npm run build
git add .
git commit -m "배포 업데이트"
git push
```

---

**📝 안전하게 병합해서 Push 하기 (추천)**

```bash
git pull origin main --rebase
git push -u origin main
```

**📌 설명**
- `git pull origin main --rebase`  
  → 원격 저장소의 커밋을 **내 커밋 뒤로 이어붙이기**  
- `git push -u origin main`  
  → 정상적으로 병합 후 푸시

**⚠️ 충돌 발생 시**
1. 충돌난 파일 수정
2. 아래 명령어로 계속 진행
```bash
git add .
git rebase --continue
```

---

**📝 참고 명령어 모음**

* 원격 저장소 확인  `git remote -v` 
* 원격 저장소 변경  `git remote set-url origin https://github.com/아이디/레포지토리이름.git`
* 강제 푸시  `git push -u origin main --force` 
* git 초기화 `rm -rf .git`
* dist/docs 삭제  `rm -rf dist docs`
* master → main 변경 `git branch -m master main`