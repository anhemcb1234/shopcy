<template>
<div class="container mx-auto shadow-lg">
        <div class="p-2 grid grid-rows-1 grid-cols-2 gap-4">
            <div class="logo">
                <img :src="require('../assets/logo.jpg')" style="width:22%" alt="">
            </div>
            <div class="flex items-center justify-end">
                <ul class="flex items-center gap-4 ">
                    <li class="lg:text-black-700 font-bold underline underline-offset-8"><a href="">HOME</a></li>
                    <li><a href="">DANH MỤC</a></li>
                    <li><a href="">ĐĂNG KÍ</a></li>
                    <li><a href="">ĐĂNG NHẬP</a></li>
                    <a href=""><i class="fa-solid fa-bag-shopping"></i></a>
                </ul>
            </div>
        </div>
</div>  
</template>

<script>
export default {
}
</script>


<style scoped src="@/assets/index.css">

</style>