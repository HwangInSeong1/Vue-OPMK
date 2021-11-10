<template>
    <div>
        <div class="insideNavbar">
            <router-link to="/Notice" style="background-color:#008793;color:white;">공지사항</router-link>
            <router-link to="/OnetoOne">1:1 문의</router-link>
            <router-link to="/FAQ">자주묻는 질문(FAQ)</router-link>
            <router-link to="/Adver">기타문의(광고)</router-link>
        </div>
        <div class="notice_dsn">
            공지사항
        </div>
        <div class="notice_title" :key="notice.id" v-for="notice in notices">
            <b style="font-size:20px;"> {{ notice.title }} </b>
            <b style="font-size:12px; font-weight:200;color:gray"> {{ notice.date }} </b>
            <ion-icon name="chevron-down-sharp" class="ab_po_ic" v-if="notice.ic_vw1" @click="notice.ct_vw=true, notice.ic_vw1=false, notice.ic_vw2=true"></ion-icon>
            <ion-icon name="chevron-up-sharp" class="ab_po_ic" v-if="notice.ic_vw2" @click="notice.ct_vw=false, notice.ic_vw2=false, notice.ic_vw1=true"></ion-icon>
            <div class="notice_contents" v-if="notice.ct_vw"> {{ notice.contents }} </div>
        </div>
    </div>    
</template>

<script>

    export default {

        data(){
            return {
                notices : [
                    {id:16, title:'[공지] 위해 상품정보 안내', date:'2021-09-24', contents:'공지 내용 16', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:15, title:'[공지] 사이트 오류 및 조치 안내', date:'2021-09-22', contents:'공지 내용 15', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:14, title:'[공지] 위해 상품정보 안내', date:'2021-09-20', contents:'공지 내용 14', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:13, title:'[공지] 위해 상품정보 안내', date:'2021-09-18', contents:'공지 내용 13', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:12, title:'[공지] 위해 상품정보 안내', date:'2021-09-17', contents:'공지 내용 12', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:11, title:'[공지] 위해 상품정보 안내', date:'2021-09-16', contents:'공지 내용 11', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:10, title:'[공지] 오픈마켓 약관 개정 안내', date:'2021-09-15', contents:'공지 내용 10', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:9, title:'[공지] 위해 상품정보 안내', date:'2021-09-14', contents:'공지 내용 9', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:8, title:'[공지] 위해 상품정보 안내', date:'2021-09-13', contents:'공지 내용 8', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:7, title:'[공지] 위해 상품정보 안내', date:'2021-09-12', contents:'공지 내용 7', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:6, title:'[공지] 위해 상품정보 안내', date:'2021-09-11', contents:'공지 내용 6', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:5, title:'[공지] 위해 상품정보 안내', date:'2021-09-10', contents:'공지 내용 5', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:4, title:'[공지] 위해 상품정보 안내', date:'2021-09-09', contents:'공지 내용 4', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:3, title:'[공지] 위해 상품정보 안내', date:'2021-09-08', contents:'공지 내용 3', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:2, title:'[공지] 위해 상품정보 안내', date:'2021-09-07', contents:'공지 내용 2', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:1, title:'[공지] 오픈마켓 이용 안내', date:'2021-09-01', contents:'공지 내용 1', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                ],
            }
        },
    };
</script>

<style>
.notice_dsn {
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
.notice_title {
    width:1220px;
    margin:30px auto ;
    padding-bottom:5px;
    border-bottom:1px solid #004d7a;
}
.ab_po_ic { /* ion-icons 절대위치 설정 */
    float:right;
    padding-right:15px;
    padding-top:5px;
    font-size:22px;
}
.notice_contents {
    background:rgba(0, 135, 147, 0.1);
    height:200px;
    margin-top:10px;
    padding:10px;
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