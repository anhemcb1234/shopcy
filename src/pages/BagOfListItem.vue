<template>
<div class="container mx-auto">
    <HeaderContent> </HeaderContent>
    <h1 class="text-center text-xl ">Giỏ hàng</h1>
    <div v-for="(item, index) in products" :key="index" class="grid  grid-rows-1 grid-cols-1 my-2">
        <div class="grid grid-rows-1 grid-cols-4">
            <div class="text-center  border-solid border-2 border-black-600">
                <p>Tên sản phẩm</p>
                {{item.name}}
                <div class="flex align-center justify-center">
                    <img class="w-20" :src='item.image.full_image_path' alt="">
                </div>
            </div>
            <div class="text-center border-solid border-2 border-black-600">
                <p>Số lượng</p>
                {{count}}
            </div>
            <div class="text-center border-solid border-2 border-black-600">
                <p>Đơn giá</p>
                {{item.price}}
            </div>
            <div class="text-center border-solid border-2 border-black-600">
                <p>Thành tiền</p>
                {{item.price * count}}
            </div>
        </div>
    </div>
    <FooterContent> </FooterContent>
</div>
</template>

<script>
import HeaderContent from '../components/HeaderContent'
import FooterContent from '../components/FooterContent'

export default {
    data() {
        return {
            products: [],
            count: 1
        }
    },
    components: {
        HeaderContent,
        FooterContent
    },
    methods: {
        load() {
            console.log(1)
        }
    },
    mounted() {
        setTimeout(() => {
            let data = localStorage.getItem('list');
            let list = JSON.parse(data);
            this.products = list;
            console.log(this.products)
        }, 100)
    },
}
</script>

<style>

</style>
