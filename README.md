# opmk
웹프레임워크 Vue.js 기반으로  온라인 전자상거래 프로젝트 "오픈마켓" 입니다.

## 개발환경
```

Front-end: Vue.js, Bootstrap-vue
Back-end: Node.js Express
DBMS: Mysql
Server: WAS - nginx +Node.js,
Auth Server: nginx + Node.js,
File Server: nginx, AWS, 운영체제 ubuntu 20.04 LTS
IDE: Visual Studio Code


현재 http://3.35.220.234:8080/ 로 서버구동중
```

## Project setup
```
vs-code 설치
vs-code 터미널 열고

Node.js 설치 https://nodejs.org/en/
->
npm install -g @vue/cli
->
npm install vue-router
->
npm install vue bootstrap bootstrap-vue 또는 yarn add vue bootstrap bootstrap-vue
->
npm i swiper@5.3.7 
npm i vue-awesome-swiper

vue-awesome-swiper 설치 이유 : 메인화면 광고슬라이드를 구현하기위함
```

### 프로젝트 실행방법
```
해당 폴더에서
yarn serve
```

### 기본 사이트 메뉴 틀

![Menu 구조](https://user-images.githubusercontent.com/66094508/139628181-31dfa757-1644-4755-aa50-ed8709646222.PNG)


### 결과화면 및 설명
```
G마켓이나 옥션같은 오픈마켓을 좀더 부드럽고 컴포넌트형식으로 코드를 작성하여 재사용성을 높이기 위해 웹프레임워크 Vue 를 이용하여 프로젝트를 만들었습니다.
일반적인 웹사이트 경우 <A> 태그를 이용해 페이지를 새로고침하는 형식으로 사용하지만, Vue 는 router.js 에 각 페이지의 주소를 설정하여 <a>태그와 동일한 기능인 <Router-link>를 이용해
전체 새로고침 없이 바뀌는 부분만 변경하는 기능을 이용하여 사이트를 제작하였습니다. 또한, 네비게이션바, 로그인창 등과 같은 중복되는 페이지들을 여러페이지에
중복 작성하지않고 컴포넌트 단위로 만들어 조립하는 식의 코드를 작성하여 유지보수 및 재사용이 뛰어나게끔 하였습니다.
이제 프로젝트의 대략적인 페이지 화면 이미지와 함께 설명하도록 하겠습니다.
```
![상단1](https://user-images.githubusercontent.com/66094508/139628169-3bf7ab22-c2b3-41b4-b1cc-97fe0d2d6c50.PNG)
```
먼저 사이트에 접속했을때 가장 윗상단 부분입니다. 어떤 페이지에서든지 왼쪽상단의 로고를 클릭하면 메인화면으로 돌아오게끔 설정하였고, 
오른쪽상단에는 로그인,회원가입을 모달창으로 구현하였습니다. 그리고 그아래는 네비게이션 바입니다.
```
![로그인](https://user-images.githubusercontent.com/66094508/139628043-cac1b57f-12c9-4b7a-8d66-319e18acbcb1.PNG)
```
로그인 버튼을 클릭하게되면 모달창형식으로 로그인화면이 스르륵 나오게되고 뒤의배경은 어두워지게 디자인했습니다.
```
![회원가입](https://user-images.githubusercontent.com/66094508/139628177-ae4962fc-c78e-4179-b140-c7b0eda729ad.PNG)
```
회원가입 버튼을 눌러도되고, 로그인 창에서 sign up 버튼을 눌러도 이동하게끔 제작했습니다. 이또한 모달창으로 구현하였습니다.
```
![메뉴바1](https://user-images.githubusercontent.com/66094508/139628165-5e0a4359-c5f2-45b0-a444-e5748e6aec6c.png)
```
마우스를 각 메인바에다가 올려놨을때 각각 해당하는 사이드메뉴들이 보이게끔 만들었습니다.
```
![상점](https://user-images.githubusercontent.com/66094508/139628171-0b1f00fd-9461-4196-bff6-41df11ddb026.PNG)
```
일반적인 쇼핑몰 판매목록창과 같이 구현했습니다.
```
![중단1](https://user-images.githubusercontent.com/66094508/139628173-2debe6b9-55b5-4e98-8fa6-02510a9da4c3.PNG)
```
메인메뉴의 중앙위치에 있는 화면입니다. 기능은 아직 구현하지않았으나, 매달 판매량이 높은 12개의 상품을 등록되도록 설정합니다.
```
![하단1](https://user-images.githubusercontent.com/66094508/139628174-212d63bb-c369-4656-a636-f59cb3a3f48d.PNG)
```
사이트의 하단부분입니다.
```

![공지사항](https://user-images.githubusercontent.com/66094508/139628038-160a15f2-b5f3-43f0-8d71-5b6e00b8e851.PNG)
```
자주묻는 질문이나 공지사항들을 위와같은 이미지처럼 구현했습니다.
```
