<template>
    <div>
        <div id="mainadslide">
            <div><img src="../assets/listimg/image01.jpg" width="1200px"></div>
            <div><img src="../assets/listimg/image02.jpg" width="1200px"></div>
            <div><img src="../assets/listimg/image03.jpg" width="1200px"></div>
            <div><img src="../assets/listimg/image04.jpg" width="1200px"></div>
        </div>
    </div>    
</template>

<script>
import $ from 'jquery';

$(document).ready(function(){
    var num = 0;
    
    start();

    function start(){
        $('#mainadslide img').eq(num-1).css({left:1200});
        setInterval(function(){
            slide();
        }, 5000);
    }

    function slide(){
        if (num == 3) {
            num = 0;
        }
        else {
            num++;
        }

        $('#mainadslide img').eq(num-1).animate({left:-1200},2000,function(){
            $('#mainadslide img').eq(num-1).css({left:1200});
        });
        $('#mainadslide img').eq(num).animate({left:0},2000);
    }
});
export default {
    
}
</script>

<style>
@import url(../css/Home.css);
</style>