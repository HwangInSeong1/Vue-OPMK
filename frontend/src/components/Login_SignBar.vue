<template id="loginBarTemplate">
    <div class="bodydiv">
        <div class="loginBar">
            <router-link to="/"><div class="logo"><img src="../assets/OpenMarket.png" class="logoimg"></div></router-link>
            <span><router-link to="/Onetoone" class="link_center">고객센터</router-link></span>
            <span @click="modalcheck = true, signmodal = true, loginmodal=false">SignUp</span>
            <span @click="modalcheck = true">Login</span>
            <span><Search /></span> <!-- 검색창 컴포넌트 -->
        </div>
        <transition name="slide-fade"> <!-- Vue 애니메이션 효과 적용 -->
            <div class="modalout" v-if="modalcheck"> <!-- 모달창으로 회원가입 로그인 창 구현 -->
                <div class="modalin" v-if="loginmodal">
                    <form action="#" method="post" class="loginForm">
                        <h2>Login</h2> <!-- 로그인 -->
                        <div class="idForm">
                            <input type="text" class="id" placeholder="ID" v-model="userEmail">
                        </div>
                        <div class="passForm">
                            <input type="password" class="pw" placeholder="PW" v-model="userPw">
                        </div>
                        <button type="button" class="loginbtn" @click="loginProc">LOG IN</button>
                        <div class="bottomText"> Don't you have ID? <a href="#" @click="signmodal=true, loginmodal=false">sign up</a>
                        </div>
                        <div class="loginlogo"></div>
                    </form>
                </div>
                <div class="xbox" @click="modalcheck = false, signmodal = false, loginmodal = true">
                    x
                </div>

                <div class="modalin_sign" v-if="signmodal">
                <form action="#" method="post" class="signForm">
                <h2>SignUp</h2> <!-- 회원가입 -->
                         
                        <div style="border:1px;height:30px;margin-bottom:-35px;margin-top:15px;color:red;"> {{ error }} </div>
                    
                <div class="input_Sign">
                    <span class="span01">ID</span> <span class="span02"> 
                        <input type="text" v-model="registerUserInfo.userid" class="ipsi" placeholder="이메일" size=22 required>
                        <button class="duplicateCheck">OK</button> <!-- @click="duplicateCheck" 추가하면 됨-->
                    </span><br>
                    <span class="span01">PW</span> <span class="span02"> 
                        <input type="password" v-model="registerUserInfo.password" class="ipsi" placeholder="비밀번호" size=28 required>
                    </span><br>
                    <span class="span01">NAME</span> <span class="span02"> 
                        <input type="text" v-model="registerUserInfo.name" class="ipsi" placeholder="이름" size=28 required>
                    </span><br>
                    <span class="span01">PHONE</span> <span class="span02"> 
                        <input type="text" v-model="registerUserInfo.phone" class="ipsi" placeholder="- 빼고 입력하세요." size=28 required>
                    </span><br>
                    <span class="span01" style="padding:2px;">GENDER</span> 
                    <span class="span02"> &nbsp;
                        <input type="radio"  v-model="registerUserInfo.gender" name="gender" value="m"> 남자 &nbsp;
                        <input type="radio" v-model="registerUserInfo.gender" name="gender" value="f"> 여자
                    </span><br>
                    <span class="span01">BIRTH</span> <span class="span02"> 
                        <input type="text" v-model="registerUserInfo.birth" class="ipsi" placeholder="EX) 19960727" size=28 required>
                    </span><br>
                    <span>
                        <div style="margin-top:5px;">제 1약관 <a href="#">[자세히보기]</a> 
                            <span class="emptyspace"></span>
                            <input type="checkbox" name="check" value="ck" v-model="agree1" required> 동의합니다.
                        </div>
                        <div>제 2약관 <a href="#">[자세히보기]</a> 
                            <span class="emptyspace"></span>
                            <input type="checkbox" name="check1" value="ck2" v-model="agree2" required> 동의합니다.
                        </div>
                    </span>
                    </div>
                        <input type="button" value="회원가입" class="submit_Design" @click="signUpProc"><br>
                        <input type="button" @click="signmodal = false, loginmodal = true, initForm()" class="back_Login" value="돌아가기">
                    </form>
                    <div class="othersign">
                    <ul>
                            <li><a href="#">
                                    <ion-icon name="logo-google" class="google_ic"></ion-icon>
                                </a></li>
                            <li><a href="#">
                                    <ion-icon name="logo-discord" class="discord_ic"></ion-icon>
                                </a></li>
                            <li><a href="https://github.com/HwangInSeong1/Vue-OPMK" target="_blank">
                                    <ion-icon name="logo-github" class="github_ic"></ion-icon>
                                </a></li>
                            <li><a href="#">
                                    <ion-icon name="logo-vue" class="vue_ic"></ion-icon>
                                </a></li>
                            <li><a href="#">
                                    <ion-icon name="logo-facebook" class="facebook_ic"></ion-icon>
                                </a></li>
                        </ul>
                        <div class="signlogo"></div>
                    </div>
                </div>
                <div class="xbox_sign" @click="modalcheck = false, signmodal = false, loginmodal = true, initForm()"> <!-- 모달창 닫기 -->
                    x
                </div>
            </div>
        </transition>
    </div>    
</template>

<script>
import Search from './Search.vue'; // 검색vue import
import Axios from 'axios';

export default {
    name : 'LoginSignBar',
    template: 'loginBarTemplate',
    components: {
        Search, // 검색vue import
    },
    created: function (){
        console.log('테스트', this.test);
    },
    data() {
        return {
            // 로그인 관련
            userEmail: '',
            userPw: '',

            // 회원가입 관련
            registerUserInfo: {
                userid: "",
                password:"",
                name: "",
                phone: "",
                gender: "",
                birth: "",
            },
            modalcheck : false,  // 로그인,회원가입창 모달체크값
            signmodal : false, // 모달안에있는 회원가입창 체크값
            loginmodal : true,   // 모달안에있는 로그인창 체크값
            test: [], // 테스트
            error: "",
            agree1: false,
            agree2: false,
        }
    },
    methods: {
        loginProc: function () {
            let userLoingInfo = {
                'userEmail': this.userEmail,
                'userPw': this.userPw,
            }

            Axios.post('/user/loginProc' , userLoingInfo).then(res => {
                console.log(res);
            });
        },
        signUpProc: function() {
            if(!this.validation())
                return false;
            
                Axios.post('/user/signUpProc' , this.registerUserInfo).then(res => {
                    console.log(res.data);
                    alert('회원가입이 완료되었습니다.');
                    this.modalcheck = false;
                    // 가입후 폼 초기화
                    this.initForm();
                });
        },
        
        // duplicateCheck: function() {
        //      let emailData = {
        //         'userEmail': this.userid,
        //     }
        //     Axios.post('/user/duplicateCheck' , emailData).then(res => {
        //             if(emailData){
        //                 alert('이미 사용중인 ID(이메일)입니다.');
        //                 return false;
        //             }
        //             else
        //                 return true;
        //         });
        // },

        // 유효성 검사
        validation: function () {
            if(!this.registerUserInfo.userid) {
                this.error = "※ ID(이메일)은 필수입력칸입니다.";
                return false;
            }
            if(!this.registerUserInfo.password) {
                this.error = "※ 비밀번호를 입력해주세요.";
                return false;
            }
            if(!this.registerUserInfo.name) {
                this.error = "※ 이름을 입력해주세요.";
                return false;
            }
            if(!this.registerUserInfo.phone) {
                this.error = "※ 휴대전화번호를 입력해주세요.";
                return false;
            }
            if(!this.registerUserInfo.gender) {
                this.error = "※ 성별을 선택해주세요.";
                return false;
            }
            if(!this.registerUserInfo.birth) {
                this.error = "※ 생년월일을 입력해주세요.";
                return false;
            }
            if(!this.agree1) {
                this.error = "※ 약관1을 동의해주세요.";
                return false;
            }
            if(!this.agree2) {
                this.error = "※ 약관2를 동의해주세요.";
                return false;
            }
            return true;
        },

        // 가입 후 폼 초기화
        initForm() {
            this.registerUserInfo.userid = "";
            this.registerUserInfo.password = "";
            this.registerUserInfo.name = "";
            this.registerUserInfo.phone = "";
            this.registerUserInfo.gender = "";
            this.registerUserInfo.birth = "";
            this.agree1 = false;
            this.agree2 = false;
            this.error =  "";
        },

    },
    watch: {
        userEmail: function () {
            console.log('이메일',this.userEmail);
        }
    }
};
</script>

<style>
@import url(../css/Login_SignBar.css);
.link_center {
    text-decoration: none;
    color:black;
    padding:2px;
}
</style>