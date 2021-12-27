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


현재 http://3.36.93.66:3000/ 또는 http://3.36.93.66:8080/ 로 서버구동중
* 아래 결과화면은 모두 위의 주소에서 확인하실수 있습니다. *서버오류, 잦은 서버다운으로 인해 닫혀 있을 수 있습니다.
```

### Project setup
## frontend 환경설정
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

## backend 환경설정
```
npm install -g express-generator
->
express --view=pug backend // backend 폴더 생성
->
cd backend
->
npm i
->
SET DEBUG=backend:*
```

## backend 환경설정2
```
backend 폴더에 mysql, bcryptjs 암호화 모듈 설치
npm install mysql --save
->
npm install bcryptjs --save
->
backend express 와 mysql 연동하기 위한 파일 생성

userModel.js
---------------------------------------------------------------------------------------------------------
'use strict';

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '3.36.93.66',
      user : (보안),
      password : '(보안)',
      database : 'OPMK'
    }
});

module.exports = knex;
---------------------------------------------------------------------------------------------------------

API 통신을 위한 Axios 패키지 설치 * front,back 폴더 두 곳에서 전부 설치해야 합니다.
npm install axios --save
```

### 프로젝트 실행방법
```
frontend 폴더에서
yarn build
backend 폴더에서
yarn start

-> localhost:8080 or localhost:3000 접속
```

### 기본 사이트 메뉴 틀

![Menu 구조](https://user-images.githubusercontent.com/66094508/139628181-31dfa757-1644-4755-aa50-ed8709646222.PNG)


### Frontend 결과화면 및 설명
```
G마켓이나 옥션같은 오픈마켓을 좀더 부드럽고 컴포넌트형식으로 코드를 작성하여 재사용성을 높이기 위해 웹프레임워크 Vue 를 이용하여 프로젝트를 만들었습니다.
일반적인 웹사이트 경우 <A> 태그를 이용해 페이지를 새로고침하는 형식으로 사용하지만, Vue 는 router.js 에 각 페이지의 주소를 설정하여 
<a>태그와 동일한 기능인 <Router-link>를 이용해 전체 새로고침 없이 바뀌는 부분만 변경하는 기능을 이용하여 사이트를 제작하였습니다. 
또한, 네비게이션바, 로그인창 등과 같은 중복되는 페이지들을 여러페이지에 중복 작성하지않고 컴포넌트 단위로 만들어 조립하는 식의 코드를 작성하여 
유지보수 및 재사용이 뛰어나게끔 하였습니다. 이제 프로젝트의 대략적인 페이지 화면 이미지와 함께 설명하도록 하겠습니다.
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
### Backend 결과화면 및 설명
```
먼저 frontend 폴더와 연동하기위해 frontend 폴더에서 vue.config.js 파일을 생성해줌
------------------------------------------------------------------------------------------
module.exports = { 
    devServer: { // api 요청이 있을때 어디에서 처리할지를 설정
      proxy: { 
        '/api': { 
          target: 'http://localhost:3000/api',
          changeOrigin: true, 
          pathRewrite: { 
            '^/api': ''
          } 
        } 
      } 
    },
    outputDir: '../backend/public',  // 배포 파일의 위치를 지정
  }
------------------------------------------------------------------------------------------
```
```
backend express 폴더와 mysql 연동 파일 생성
userModel.js
---------------------------------------------------------------------------------------------------------
'use strict';

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '3.36.93.66',
      user : (보안),
      password : '(보안)',
      database : 'OPMK'
    }
});

module.exports = knex;
---------------------------------------------------------------------------------------------------------
```
![DB테이블구조](https://user-images.githubusercontent.com/66094508/144948379-d96784f5-a24d-45e7-9235-f89a4fca79a1.PNG)
```
회원가입 DB 테이블 구조입니다.
```
![회원가입정상적으로완료](https://user-images.githubusercontent.com/66094508/144948435-8910e56a-1082-45cf-9f9d-1b0cc28da649.PNG)
```
회원가입정보를 입력하고 회원가입 버튼을 누르면 회원가입 DB에 저장이 되도록 코드를 작성했습니다.
```
![회원DB 에 저장된 값](https://user-images.githubusercontent.com/66094508/144948389-ed4ea4c3-4b86-46ce-8e3c-53045f02f657.PNG)
```
회원가입을 하면 정상적으로 회원DB에 저장되는 것을 볼 수 있습니다.
```
![회원 유효성검사1](https://user-images.githubusercontent.com/66094508/144948408-27ce420b-adc8-4d20-bd65-bf8550b2549d.PNG)
```
NULL 값을 허용하지 않는 컬럼에 NULL 들어가면 안되기 때문에 유효성 검사 코드를 넣어 필수입력칸을 넣지않고 회원가입을 시도하려하면
해당입력칸을 기입하라는 경고문구가 나타나도록 만들었습니다.
```
![회원 유효성검사2](https://user-images.githubusercontent.com/66094508/144948417-a4b67a35-065d-4289-a654-ffea402bedf5.PNG)

### 앞으로 추가 및 보완해야할 사항

```
상품DB 생성 및 연동
로그인/세션 유지, 보안 등
```


### 참고자료
   1. https://kr.vuejs.org/v2/guide/index.html Vue.js 기본다루기
   2. https://www.gmarket.co.kr/ 국내 대표 오픈마켓 사이트 구조 보기
   3. https://opentutorials.org/course/608/3053 아마존 웹서비스 기본 사용법
   4. https://www.hani.co.kr/arti/economy/consumer/977461.html  
      통계청 온라인 거래규모 성장
   5. https://velog.io/@zofqofhtltm8015/Axios-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%84%9C%EB%B2%84-%ED%86%B5%EC%8B%A0-%ED%95%B4%EB%B3%B4%EA%B8%B0
      Axios 사용법
      
      
### 자세한 사이트 동작구조를 보시려면 http://3.36.93.66:8080/ 또는 http://3.36.93.66:3000/ 접속하셔서 보시면 됩니다.
