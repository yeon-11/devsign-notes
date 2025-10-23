# Python 가상환경 + Django 설치 가이드


**1. 프로젝트 폴더 생성 및 이동**

```bash
mkdir 프로젝트명
cd 프로젝트명
```

---

**2. 가상환경 생성**

```bash
python -m venv venv
```

> `venv`는 가상환경 폴더 이름입니다 (보통 `venv` 또는 `.venv` 사용)

---

**3. 가상환경 활성화**

- **Windows**:
  ```bash
  .\venv\Scripts\activate
  ```

- **Mac/Linux**:
  ```bash
  source venv/bin/activate
  ```

> 활성화되면 터미널 앞에 `(venv)` 표시가 뜹니다.

---

**4. pip 업그레이드 (선택 권장)**

```bash
python -m pip install --upgrade pip
```

---

**5. Django 설치**

```bash
python -m pip install Django
```

---

**6. Django 프로젝트 생성**

```bash
django-admin startproject config .
```

> `.` 을 붙이면 현재 폴더에 생성됩니다.  
> `config`는 프로젝트 이름이며 자유롭게 변경 가능합니다.

---

**7. 개발 서버 실행 테스트**

```bash
python manage.py runserver
```

> `http://127.0.0.1:8000` 접속해서 정상 동작 확인

---

**8. 앱 생성**

```bash
python manage.py startapp myapp
```

> `myapp`은 앱 이름입니다. 프로젝트 이름과 다르게 지정하세요.

---

**9. 앱 등록 (settings.py)**

`config/settings.py`의 `INSTALLED_APPS`에 다음 추가:

```python
INSTALLED_APPS = [
    ...
    'myapp',
]
```

---

**10. `views.py` 작성**

`myapp/views.py` 파일 열고 함수 작성:

```python
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello, Django!")
```

---

**11. URL 연결**

- `myapp/urls.py` 생성:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello),
]
```

- `config/urls.py` 수정:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),
]
```

---

## TIP

> **생성이 안 될 경우**
>
> `PC(user)/PycharmProjects/.venv` 경로 확인 후 다시 시도하거나,  
> VSCode에서 Python 인터프리터 재선택 필요할 수 있습니다.

---
