<template>
    <div class="bodydiv">
        
        <div class="loginBar">
            <router-link to="/"><div class="logo"><img src="../assets/OpenMarket.png" class="logoimg"></div></router-link>
            <span>고객센터</span>
            <span>SignUp</span>
            <span @click="modalcheck = true">Login</span>
            <span><Search /></span> <!-- 검색창 컴포넌트 -->
        </div>
        <transition name="slide-fade">
            <div class="modalout" v-if="modalcheck">
                <div class="modalin" v-if="loginmodal">
                    <form action="#" method="post" class="loginForm">
                        <h2>Login</h2>
                        <div class="idForm">
                            <input type="text" class="id" placeholder="ID">
                        </div>
                        <div class="passForm">
                            <input type="password" class="pw" placeholder="PW">
                        </div>
                        <button type="button" class="loginbtn">LOG IN</button>
                        <div class="bottomText"> Don't you have ID? <a href="#" @click="signmodal=true, loginmodal=false">sign up</a>
                        </div>
                    </form>
                </div>
                <div class="modalin" v-if="signmodal">
                    <div @click="signmodal = false, loginmodal = true">Hi</div>
                </div>
                <div class="xbox" @click="modalcheck = false, signmodal = false, loginmodal = true">
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
</style>