<template>
<div class="container mx-auto pt-10 px-2">
        <p class="font-bold text-xl pb-3">Sản phẩm mua nhiều nhất1</p>
      <div class="grid grid-rows-1   grid-cols-4  gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-cols-4">
        <div class="shadow-lg" v-for="(item, index) in products.topSoldProducts" :key="index">
          <img class="w-screen" :src="item.image.full_image_path" alt="">
          <div class="flex items-center justify-between pt-2">
            <p class="font-bold text-xl">{{item.name}}</p>
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="text-red-600 font-bold">
            {{item.price}}
          </div>
          <div class="grid grid-rows-1 grid-cols-2 gap-4 mt-3">
            <div class="flex">
              <button class="">+</button>
              <input class="w-10 mx-20" v-model="value" type="text">
              <button class="">-</button>
            </div>
            <div class="flex justify-between">
              <button class="button font-bold">Add to card</button>
              <button class="button"><i class="fa-solid fa-square-share-nodes"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>  
</template>

<script>
export default {
data() {
        return {
            products: [],
            value: 1,
        }
    },
    methods: {
        getData() {
            fetch('http://128.199.211.17/api/v1/home').then((res) => res.json()).then((data) => {
                this.products = data;
            })
        }
    },
    mounted() {
        this.getData();
        setTimeout(() => {
        },2000)
    },
}
</script>


<style scoped src="@/assets/index.css">

</style>