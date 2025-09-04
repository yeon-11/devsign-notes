# 🛠️ VSCode에서 Flutter 프로젝트 시작하기

**1. Flutter SDK 다운로드**
- [Flutter 설치 페이지](https://docs.flutter.dev/get-started/install) 접속  
- Windows 선택 후 `Download Flutter SDK` 클릭  
- 압축 해제한 후 `C:\flutter` 경로에 저장  
- `C:\flutter` 폴더 생겼는지 확인
---
**2. VSCode에서 Flutter 프로젝트 생성**

- VSCode 열기  
- `Ctrl + Shift + P` → `Flutter: New Project`  
  - **Application** 선택  
  - 예: `C:\dev` 폴더 선택  
  - 프로젝트명 입력
---
**3. VSCode 재시작**

- 혹시 SDK 인식이 안 되면 VSCode를 껐다가 다시 켜기  
- `C:\flutter` 폴더 열어서 확인 후 다시 시도
---
**4. pubspec.yaml 설정**

- `pubspec.yaml` 파일 열기  
- 안에 있는 내용 **전부 지우고 아래 내용 붙여넣기**:

```yaml
name: namer_app
description: A new Flutter project.

publish_to: 'none' # Remove this line if you wish to publish to pub.dev

version: 0.0.1+1

environment:
  sdk: '>=2.19.4 <4.0.0'

dependencies:
  flutter:
    sdk: flutter

  english_words: ^4.0.0
  provider: ^6.0.0

dev_dependencies:
  flutter_test:
    sdk: flutter

  flutter_lints: ^2.0.0

flutter:
  uses-material-design: true
```
---
**5. analysis_options.yaml 설정**

- `analysis_options.yaml` 파일 열기  
- 안에 있는 내용 **전부 지우고 아래 내용 붙여넣기**:  

```yaml
nclude: package:flutter_lints/flutter.yaml

linter:
  rules:
    prefer_const_constructors: false
    prefer_final_fields: false
    use_key_in_widget_constructors: false
    prefer_const_literals_to_create_immutables: false
    prefer_const_constructors_in_immutables: false
    avoid_print: false
```
---
**6. main.dart 작성**

- `lib/main.dart` 파일 열기  
- 내용 **전부 삭제 후 아래 코드 붙여넣기**:

```dart
import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override  // 클래스명 내가 원하는대로 재정의
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => MyAppState(),
      child: MaterialApp(
        title: 'Namer App',
        theme: ThemeData(
          useMaterial3: true,
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepOrange),
        ),
        home: MyHomePage(),
      ),
    );
  }
}

class MyAppState extends ChangeNotifier {
  var current = WordPair.random();
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var appState = context.watch<MyAppState>();

    return Scaffold(
      body: Column(
        children: [
          Text('A random idea:'),
          Text(appState.current.asLowerCase),
        ],
      ),
    );
  }
}
```
---
**7. 실행하기 (디버깅)**

- VSCode 좌측 디버그 탭(벌레 아이콘) 클릭  
- 크롬 브라우저 선택해서 실행  
- 정상적으로 실행되면 브라우저 주소창에 `http://localhost:57158/` 형태로 열림  
  > 이게 뜨면 성공! 🎉
---
**8. SDK 재설치 안내**

- 만약 다시 `Flutter: New Project` 할 때도 다운로드하라고 뜨면  
  → [Flutter 설치 페이지](https://docs.flutter.dev/get-started/install)에서  
  `Download` → `Install` 단계 다시 체크!
