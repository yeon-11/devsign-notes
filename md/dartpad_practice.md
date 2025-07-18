# 💻 DartPad 기초 연습 정리

> [DartPad 바로가기](https://dartpad.dev/)

---

## 1. 기본 문법 연습
---
```dart
void main() { // void: 아무 값도 반환하지 않음
  print('Hello World'); // Hello World

  var name = 'yeon';
  print(name); // yeon

  name = 'jiyeon'; // 변수 값 변경
  print(name); // jiyeon

  /* 
   final(런타임 상수), const(컴파일 상수)
   - final: 코드를 실행할 때 값이 확정됨
   - const: 코드 실행 전에 이미 확정되어야 함
  */
  final DateTime now = DateTime.now(); // const 사용 시 에러 발생
  print(now); // 현재 시간 출력 예: 2025-07-18 10:25:43.123456
}
```
---

## 2. 변수 타입
---
```dart
/*
 모든 변수는 타입을 가진다!
 - var: 타입을 자동 추론하지만, 명시해주면 더 명확하고 유지보수에 좋음
 - String: 문자열
 - int: 정수
 - double: 실수
 - bool: true 또는 false (논리값)
*/

void main() {
  String name = 'string';
  int isInt = 10;
  double isDouble = 2.5;
  bool isTrue = true;

  print(name); // string
  print(isInt); // 10
  print(isDouble); // 2.5
  print(isTrue); // true
}
```
---

## 3. 리스트 타입 (List)
---
```dart
/*
 리스트(List): 여러 값을 순서대로 저장할 수 있는 자료형
 - 리스트의 구성 단위 = 원소(Element)
 - 인덱스로 특정 원소에 접근 (0부터 시작, 마지막은 length - 1)
*/

void main() {
  List<String> blackPinkList = ['리사', '지수', '제니', '로제'];
  blackPinkList.add('yg'); // 원소 추가

  print(blackPinkList); // [리사, 지수, 제니, 로제, yg]
  print(blackPinkList[0]); // 리사
  print(blackPinkList[3]); // 로제
  print(blackPinkList.length); // 5
}
```