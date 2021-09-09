<template>
    <div>
        <div class="insideNavbar">
            <router-link to="/Notice">공지사항</router-link>
            <router-link to="/OnetoOne" style="background-color:#008793;color:white;">1:1 문의</router-link>
            <router-link to="/FAQ">자주묻는 질문(FAQ)</router-link>
            <router-link to="">기타문의(광고)</router-link>
        </div>
        <div class="oneandone_dsn">
            1:1 문의
        </div>
        <div class="oneandone"></div>
    </div>    
</template>

<script>
    export default {
    };
</script>

<style>
.oneandone_dsn {
    width:1220px;
    height:100px;
    line-height:100px;
    font-size:40px;
    font-weight: bold;
    margin:20px auto;
    background:linear-gradient(45deg,#004d7a,#008793, rgb(255, 255 ,255),#00bf72);
    color:white;
    padding-left:30px;
}
.oneandone {
    width:1220px;
    height: 800px;
}
.insideNavbar {
    width:1220px;
    margin:20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    text-align: center;
}
.insideNavbar > a {
    text-decoration: none;
    border:1px solid rgba(15, 92, 192, 0.3);
    width:25%;
    padding:10px;
    font-size:15px;
    font-weight: bold;
    background:rgba(15, 92, 192, 0.1);
    cursor: pointer;
    color:rgb(28, 65, 78);
}
.insideNavbar > a:hover {
    color:rgb(28, 65, 78);
}

.insideNavbar > a:nth-child(1) {
    border-right:0px;
    
}
.insideNavbar > a:nth-child(2) {
    border-right:0px;
   
}
.insideNavbar > a:nth-child(3) {
    border-right:0px;
    
}
</style>