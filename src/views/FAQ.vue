<template>
    <div>
        <div class="insideNavbar">
            <router-link to="/Notice">공지사항</router-link>
            <router-link to="/OnetoOne">1:1 문의</router-link>
            <router-link to="/FAQ" style="background-color:#008793;color:white;">자주묻는 질문(FAQ)</router-link>
            <router-link to="/Adver">기타문의(광고)</router-link>
        </div>
        <div class="faq_dsn">
            자주묻는 질문(FAQ)
        </div>
        <div class="faq_title" :key="fna.id" v-for="fna in fnas">
            <b style="font-size:20px;"> {{ fna.title }} </b>
            <ion-icon name="chevron-down-sharp" class="ab_po_ic" v-if="fna.ic_vw1" @click="fna.ct_vw=true, fna.ic_vw1=false, fna.ic_vw2=true"></ion-icon>
            <ion-icon name="chevron-up-sharp" class="ab_po_ic" v-if="fna.ic_vw2" @click="fna.ct_vw=false, fna.ic_vw2=false, fna.ic_vw1=true"></ion-icon>
            <div class="faq_contents" v-if="fna.ct_vw" v-html='fna.contents.replace("\n", "<br />")'> </div>
        </div>
    </div>    
</template>

<script>
    export default {
        computed: {
            contents() {
                return this.fnas.contents.replace("\n", "<br />")
            }
        },
        data(){
            return {
                fnas : [
                    {id:16, title:'Q [회원탈퇴] 회원탈퇴를 하면 정보가 완벽하게 사라지나요?', 
                    contents:'<b style="color:red">A</b> 회원탈퇴 후 7일이 지나면 해당회원정보가 영구삭제됩니다.', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:15, title:'Q [고객센터] 청각이나 언어장애를 가진 고객이 문의할 수 있는 방법은 없나요?', 
                    contents:'<b style="color:red">A</b> 카카오톡 채팅을 통해 문의 주시거나 107센터(NIA 손말이음센터 )를 통해 고객센터(☎1577-7011) 로 문의 주시면 상담이 가능합니다.\n ※ 107센터를 통한 중개서비스가 아닌, 타인을 통해 고객센터로 문의 주시는 경우에는 제 3자이므로 회원 본인의 동의가 확인되지 않기 때문에 상담이 불가합니다.',
                    ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:14, title:'Q [고객센터] 고객센터 운영시간은 어떻게 되나요?', 
                    contents:'<b style="color:red">A</b> 오픈마켓 고객센터는 365일 24시간 연중무휴로 운영합니다.', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:13, title:'Q [환불] 휴대폰결제 후 취소했는데, 언제 환불되나요?', 
                    contents:'<b style="color:red">A</b> 휴대폰결제 후 주문을 취소하는 경우 환불은 [취소완료] 문자 수신 후 평일(영업일) 기준 2일 이내 한도 복구됩니다. ', 
                    ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:12, title:'Q [결제수단] 이미 주문을 했는데, 결제 수단을 변경할 수 있나요?', 
                    contents:'<b style="color:red">A</b> 결제완료 이후에는 결제수단 변경은 가능하지 않습니다. 판매중인 상품일 경우 주문 취소 후 원하시는 결제수단으로 다시 한 번 구매하여 주시기 바랍니다.', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:11, title:'Q [분쟁처리] 분쟁처리절차는 어떻게 되나요?', contents:'-', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:10, title:'Q [선물하기] 선물하는 사람의 이름과 연락처를 선물받는 사람이 확인할 수 있나요?', 
                    contents:'<b style="color:red">A</b> 카카오톡 발송의 경우 선물하는 사람의 이름을 확인할 수 있으며 \n &nbsp;&nbsp;&nbsp;문자(SMS)발송의 경우 선물하는 사람의 이름과 휴대전화번호 끝 4자리를 확인할 수 있습니다.', 
                    ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:9, title:'Q [환불] 다른 사람 명의의 계좌로 환불받을 수 있나요?', contents:'<b style="color:red">A</b> 고객님 본인 명의의 계좌로만 환불이 가능합니다.', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:8, title:'Q [취소] 배송 전 취소신청을 했는데, 상품이 배송되었습니다.', contents:'답변 이미지8', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:7, title:'Q [반품] 반품 신청을 철회하고 싶어요.', 
                    contents:'<b style="color:red">A</b> 반품접수 후, 반품할 상품을 아직 보내지 않은 경우, 마이페이지에서 반품철회를 하실 수 있습니다. \n<br> &nbsp;&nbsp; ■ 반품 철회하기 <a href="#">[바로가기]</a>',
                     ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:6, title:'Q [배송일정] 배송중인 상품의 위치를 알고 싶어요.', contents:'답변 이미지6', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:5, title:'Q [회원정보] 개인정보와 관련된 피해를 입은 경우 어떻게 하나요?', contents:'답변 이미지5', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:4, title:'Q [비밀번호] 비밀번호가 기억나지 않아요.', contents:'답변 이미지4', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:3, title:'Q [배송지] 주문 후 배송지를 변경 할 수 있나요?', contents:'답변 이미지3', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:2, title:'Q [주문] 긴급재난지원금을 오픈마켓에서 사용 가능한가요?', contents:'답변 이미지2', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
                    {id:1, title:'Q [정기배송] 정기배송은 어떤 서비스인가요?', contents:'답변 이미지1', ct_vw : false ,ic_vw1 : true, ic_vw2 : false},
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
    margin-top:10px;
    padding:15px;
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