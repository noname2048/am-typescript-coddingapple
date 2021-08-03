# am-typescript-codingapple

- 유투브 "코딩애플" 채널의 ["Typescript로 웹개발하려면 HTML 조지는 법을 알아야"](https://www.youtube.com/watch?v=iZjfnoF784k) 관련 코딩
- 새벽에 피드에 올라와서 확인했다.
- 업로드 8.3 코딩 8.4

## A. 배운점
### i. tsc -w
- `tsc -w` 를 통해서 파일 watch를 통해 ts가 js로 컴파일(트랜스파일링) 된다.
- 설치는 `npm install -g typescript`
### ii. Element, HTMLAnchorElement
- 요러한 HTML element 에 대한 클래스가 있다.
### iii. "strictNullChecks": true
- `"strictNullChecks": true` 캄파일 옵션 null을 엄격하게 관리한다.
#### iv. narrowing
- null에 의한 에러를 방지하기 위한 narrowing 기법 6개

1. if 문으로 `null !=` 이용하기
2. if 문으로 `instanceof` 사용하기
3. as 문으로 타입 사기(?) 치기 - 비추천
4. ?. 문으로 optional chaning 사용
5. strict 모드 끄기 - 비추천

## B. 챌린지
- 한꺼번에 여러개 변환하기
- 리스트로 풀어보려고 했는데
- forEach 혹은 for (추가변수 이용) 가 답이였다.
