<template>
    <div> <!-- 임시로 검색창 구현해놓은것 -->
     <input type="text" placeholder="검색어를 입력해주세요." class="search"> 
    <button class="searchbtn">검색</button> <!-- LoginBar.vue 안에 컴포넌트로 들어가있음 -->
     </div>
</template>

<script>
export default{}
</script>

<style>
.search {
    width: 380px;
    height: 40px;
    border-radius: 10px;
}

.searchbtn {
    height: 40px;
    border-radius: 10px;
    margin-left:2px;
}
</style>