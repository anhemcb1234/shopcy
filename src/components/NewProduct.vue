<template>
<div class="container mx-auto pt-10 px-2">
    <p class="font-bold text-xl pb-3">Sản phẩm nhiều lượt xem nhất</p>
    <div class="grid grid-rows-1 grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-cols-4">
        <div @click="handlerRouter(item.id)" class="shadow-lg" v-for="(item, index) in products.topViewProducts" :key="index">
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
                    <button @click="puls()" class="pe-2">+</button>
                    <input class="w-10 mx-20 text-center" v-model="count" type="text">
                    <button class="ps-2">-</button>
                </div>
                <div class="flex justify-between">
                    <button class="button text-xl font-bold ">Add to card</button>
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
            list: [],
            count: 0,
        }
    },
    methods: {
        getData() {
            fetch('http://128.199.211.17/api/v1/home').then((res) => res.json()).then((data) => {
                this.products = data;

            })
        },
        handlerRouter(id) {
            let data = this.products.topViewProducts.find((item) => item.id === id);
            setTimeout(() => {
                this.list.push(data)
            }, 300)
            localStorage.setItem('list', JSON.stringify(this.list));
            console.log(this.list)
        },
        subtraction() {
            this.count--;

        },
        puls() {
            this.count++;

        },
    },
    mounted() {
        this.getData();
    },
}
</script>

<style scoped src="@/assets/index.css">

</style>
