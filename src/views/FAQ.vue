<template>
    <div>
        <div class="insideNavbar">
            <router-link to="/fna">공지사항</router-link>
            <router-link to="/OnetoOne">1:1 문의</router-link>
            <router-link to="/FAQ" style="background-color:#008793;color:white;">자주묻는 질문(FAQ)</router-link>
            <router-link to="">기타문의(광고)</router-link>
        </div>
        <div class="faq_dsn">
            자주묻는 질문(FAQ)
        </div>
        <div class="faq_title" :key="fna.id" v-for="fna in fnas">
            <b style="font-size:20px;"> {{ fna.title }} </b>
            <b style="font-size:12px; font-weight:200;color:gray"> {{ fna.date }} </b>
            <ion-icon name="chevron-down-sharp" class="ab_po_ic" v-if="fna.ic_vw1" @click="fna.ct_vw=true, fna.ic_vw1=false, fna.ic_vw2=true"></ion-icon>
            <ion-icon name="chevron-up-sharp" class="ab_po_ic" v-if="fna.ic_vw2" @click="fna.ct_vw=false, fna.ic_vw2=false, fna.ic_vw1=true"></ion-icon>
            <div class="faq_contents" v-if="fna.ct_vw"> {{ fna.contents }} </div>
        </div>
    </div>    
</template>

<script>
    export default {
        data(){
            return {
                fnas : [
                    {id:16, title:'Q 자주묻는 질문', date:'2021-09-24', contents:'답변 이미지16', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:15, title:'Q 자주묻는 질문', date:'2021-09-22', contents:'답변 이미지15', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:14, title:'Q 자주묻는 질문', date:'2021-09-20', contents:'답변 이미지14', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:13, title:'Q 자주묻는 질문', date:'2021-09-18', contents:'답변 이미지13', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:12, title:'Q 자주묻는 질문', date:'2021-09-17', contents:'답변 이미지12', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:11, title:'Q 자주묻는 질문', date:'2021-09-16', contents:'답변 이미지11', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:10, title:'Q 자주묻는 질문', date:'2021-09-15', contents:'답변 이미지10', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:9, title:'Q 자주묻는 질문', date:'2021-09-14', contents:'답변 이미지9', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:8, title:'Q 자주묻는 질문', date:'2021-09-13', contents:'답변 이미지8', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:7, title:'Q 자주묻는 질문', date:'2021-09-12', contents:'답변 이미지7', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:6, title:'Q 자주묻는 질문', date:'2021-09-11', contents:'답변 이미지6', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:5, title:'Q 자주묻는 질문', date:'2021-09-10', contents:'답변 이미지5', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:4, title:'Q 자주묻는 질문', date:'2021-09-09', contents:'답변 이미지4', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:3, title:'Q 자주묻는 질문', date:'2021-09-08', contents:'답변 이미지3', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:2, title:'Q 자주묻는 질문', date:'2021-09-07', contents:'답변 이미지2', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:1, title:'Q 자주묻는 질문', date:'2021-09-01', contents:'답변 이미지1', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                ],
            }
        },
    };
</script>

<style>
.faq_dsn {
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
.faq_title {
    width:1220px;
    margin:30px auto ;
    padding-bottom:5px;
    border-bottom:1px solid #004d7a;
}
.ab_po_ic { /* ion-icons 절대위치 설정 */
    position:absolute;
    right:170px;
    padding-top:5px;
    font-size:22px;
}
.faq_contents {
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