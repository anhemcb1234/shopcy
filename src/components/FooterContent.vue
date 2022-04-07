<template>
<div class="container pt-10 mt-16 bg-zinc-600">
      <div class="p-2 grid grid-rows-1 grid-cols-3 gap-4">
        <div class="col">
          <div class="">
            <img :src="require('../assets/logo.jpg')" style="width:20%" alt="">
          </div>
          <p>Công ty TNHH 1 thành viên Luân</p>
          <p>Địa chỉ: Hạ Long - Quảng Ninh</p>
          <p>SDT: 0868120192</p>
        </div>
        <div class="col">
          <ul>
            <li><a href="">Về chúng tôi</a></li>
            <li><a href="">Chính sách mua hàng</a></li>
            <li><a href="">Chính sách trả hàng</a></li>
          </ul>
        </div>
        <div class="col">
          <p>Mạng xã hội</p>
          <div class="flex py-2">
            <i class="fa-brands pe-2  fa-facebook-square"></i>
            <i class="fa-brands px-2 fa-google"></i>
            <i class="fa-brands  fa-instagram"></i>
          </div>
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