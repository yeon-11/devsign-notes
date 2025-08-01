# 🎨 Vuetify + Vite 프로젝트 셋업 가이드

**1. Node.js 설치**
- [https://nodejs.org/ko/download]

---

**2. Vuetify 프로젝트 생성**
```bash
npm create vuetify@latest
```

- 패키지 매니저 선택 → `npm`
- 프로젝트 이름 → 원하는 이름 입력 (예: `my-vuetify-app`)
- Add TypeScript? → ❌ No
- Add Vue Router? → ✅ Yes

---

**3. 프로젝트 폴더 이동 후 의존성 설치**
```bash
cd 프로젝트명
npm install
```

> 이미 설치된 경우에도 오류 방지용으로 다시 입력해주는게 안전!

---

**4. Vuetify 및 Vite 플러그인 설치**
```bash
npm i -D vuetify vite-plugin-vuetify
```

---

**5. 머티리얼 디자인 아이콘 설치**
```bash
npm i @mdi/font
```

---

**6. `vuetify.js` 파일 생성 (`src/plugins/vuetify.js`)**
```js
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
})
```

---

**7. `main.js`에서 Vuetify 연결**
```js
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // 만든 vuetify.js import

createApp(App).use(vuetify).mount('#app')
```

---

**8. `vite.config.js` 설정**
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
})
```

---

**9. 실행**
```bash
npm run dev
```

> 이미 설치된 Vue 프로젝트에 Vuetify를 추가한 경우엔 `npm run serve`도 가능!