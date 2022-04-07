<template>
<div class="">
    <HeaderContent> </HeaderContent>
    <div class="container mx-auto py-20">
        <div class="grid grid-rows-1 grid-cols-2 gap-4">
            <div class=" flex justify-end">
                <img class="setting" :src="require('../assets/hehe.jpeg')" alt="">
            </div>
            <div class="">
                <p class="font-bold text-xl">Nike Jordan 2</p>
                <p class="text-red-600 font-bold">100</p>
                <div class="flex">
                    <button class="">+</button>
                    <input class="w-10" type="text">
                    <button class="">-</button>
                    <button class="add font-bold text-xl">Add to Card</button>
                </div>
            </div>

        </div>
    </div>
    <div class="container mx-auto">
        <div class="grid grid-rows-1 grid-cols-2">
            <div class="">
                <p>Có thể bạn sẽ thích</p>
                <div class="">
                    <div class="">
                        <img class="setting1" :src="require('../assets/hehe.jpeg')" alt="">
                    </div>
                    <div class="flex justify-between">
                        <p>NMD 2</p>
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <p class="text-red-600 font-bold">100</p>
                </div>
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
    components: {
        HeaderContent,
        FooterContent
    },
}
</script>

<style src="../assets/index.css">

</style>
