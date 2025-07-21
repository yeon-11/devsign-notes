# 🎨 Vuetify + Vite 프로젝트 셋업 \& GitHub Pages 배포 가이드

**1. Vuetify 프로젝트 생성**

```bash

npm create vuetify@latest

```


✅ 선택 가이드

* 패키지 매니저 선택 → `npm`
* Project name → 원하는 폴더 이름 입력 (예: `my-vuetify-app`)
* Add TypeScript? → ❌ No (자바스크립트 사용)
* Add Vue Router (SPA)? → ✅ Yes

---

**2. 프로젝트 폴더 이동 및 의존성 설치**

```bash

cd 프로젝트명

npm install

```

---

**3. Vuetify 및 Vite 플러그인 설치 (개발용)**

```bash

npm i -D vuetify vite-plugin-vuetify

```

---

**4. 머티리얼 디자인 아이콘 설치**

```bash

npm i @mdi/font

```

---

**5. package.json에 배포 스크립트 추가**

```json

"scripts": {

"dev": "vite",

"build": "vite build",

"preview": "vite preview",

"predeploy": "npm run build",

"deploy": "gh-pages -d dist"

}

```

---

**6. vite.config.js 설정**

```js

import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

import vuetify from 'vite-plugin-vuetify';



export default defineConfig({

base: '/리포지토리명/',

plugins: \[

vue(),

vuetify({ autoImport: true }),

],

});

```



✅ `base`에 반드시 GitHub 리포지토리 이름을 `/`로 감싸서 넣기!

---

**7. main.js (또는 main.ts)에 Vuetify 연결**

```js

import 'vuetify/styles'

import { createVuetify } from 'vuetify'

import { createApp } from 'vue'

import App from './App.vue'



const vuetify = createVuetify()



createApp(App).use(vuetify).mount('#app')

```

---

**8. GitHub Pages 배포 설정**

```bash

git init

git add .

git commit -m "초기 커밋"

git remote add origin https://github.com/깃허브아이디/리포지토리명.git

git push -u origin main        # 에러 나면 브랜치 문제일 수 있음

git branch -M main             # 브랜치를 main으로 강제 변경

npm install --save-dev gh-pages

npm run deploy

```

---

✅ 배포 주소 확인

```

https://깃허브아이디.github.io/리포지토리명/

```



`npm run build` → `npm run deploy` 만 반복하면 자동 배포 완료!

