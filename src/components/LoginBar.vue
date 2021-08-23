<template>
    <div class="bodydiv">
        <div class="loginBar">
            <router-link to="/"><div class="logo"><img src="../assets/OpenMarket.png" class="logoimg"></div></router-link>
            <span>고객센터</span>
            <span>SignUp</span>
            <span @click="modalcheck = true">Login</span>
        </div>
        <transition name="slide-fade">
            <div class="modalout" v-if="modalcheck">
                <div class="modalin">
                    <form action="#" method="post" class="loginForm">
                        <h2>Login</h2>
                        <div class="idForm">
                            <input type="text" class="id" placeholder="ID">
                        </div>
                        <div class="passForm">
                            <input type="password" class="pw" placeholder="PW">
                        </div>
                        <button type="button" class="loginbtn">LOG IN</button>
                        <div class="bottomText"> Don't you have ID? <a href="#">sign up</a>
                        </div>
                    </form>
                </div>
                <div class="xbox" @click="modalcheck = false">
                    x
                </div>
            </div>
        </transition>
    </div>    
</template>

<script>
export default {
    name : 'LoginBar',
    data(){
        return {
            modalcheck : false,
        }
    },
};
</script>

<style>
@import url(../css/LoginBar.css);
</style>