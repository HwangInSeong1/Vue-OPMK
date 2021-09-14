<template>
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
                            <input type="text" class="id" placeholder="ID">
                        </div>
                        <div class="passForm">
                            <input type="password" class="pw" placeholder="PW">
                        </div>
                        <button type="button" class="loginbtn">LOG IN</button>
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

                <div class="input_Sign">
                    <span class="span01">ID</span> <span class="span02"> <input type="text" class="ipsi" placeholder="ID INPUT " size=28 required></span><br>
                    <span class="span01">PW</span> <span class="span02"> <input type="password" class="ipsi" placeholder="PASSWORD INPUT" size=28 required></span><br>
                    <span class="span01">PHONE</span> <span class="span02"> <input type="text" class="ipsi" placeholder="- 빼고 입력하세요." size=28 required></span><br>
                    <span class="span01" style="padding:2px;">GENDER</span> <span class="span02"> &nbsp;<input type="radio" name="gender" value="m">남자 &nbsp;<input type="radio" name="gender" value="f">여자 </span><br>
                    <span class="span01">BIRTH</span> <span class="span02"> <input type="text" class="ipsi" placeholder="EX) 19960727" size=28 required></span><br>
                    <span>
                        <div style="margin-top:5px;">제 1약관 <a href="#">[자세히보기]</a> <span class="emptyspace"></span>
                            <input type="checkbox" name="check" value="ck" required> 동의합니다.</div>
                        <div>제 2약관 <a href="#">[자세히보기]</a> <span class="emptyspace"></span>
                            <input type="checkbox" name="check1" value="ck2" required> 동의합니다.</div>
                    </span>
                    </div>
                        <input type="submit" value="회원가입" class="submit_Design"><br>
                        <input type="button" @click="signmodal = false, loginmodal = true" class="back_Login" value="돌아가기">
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
                <div class="xbox_sign" @click="modalcheck = false, signmodal = false, loginmodal = true"> <!-- 모달창 닫기 -->
                    x
                </div>
            </div>
        </transition>
    </div>    
</template>

<script>
import Search from './Search.vue'; // 검색vue import

export default {
    name : 'LoginSignBar',
    components: {Search, // 검색vue import
    },
    data(){
        return {
            modalcheck : false,  
            signmodal : false,
            loginmodal : true,    
        }
    },
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