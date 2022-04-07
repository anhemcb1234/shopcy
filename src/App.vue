<template>
<div class="">
    <HeaderContent> </HeaderContent>
    <NewProduct> </NewProduct>
    <MostViewProduct> </MostViewProduct>
    <MostBuyItemContent> </MostBuyItemContent>
    <FooterContent> </FooterContent>
    <BagOfListItem> </BagOfListItem>
</div>
</template>

<script>
import HeaderContent from './components/HeaderContent'
import NewProduct from './components/NewProduct'
import MostViewProduct from './components/MostViewProduct'
import FooterContent from './components/FooterContent'
import MostBuyItemContent from './components/MostBuyItemContent'
import BagOfListItem from './pages/BagOfListItem.vue'
export default {
    data() {
      return {
        homeData: {}
      }
    },
    components: {
      HeaderContent,
      NewProduct,
      MostViewProduct,
      FooterContent,
      MostBuyItemContent,
      BagOfListItem
    },

}

</script>

<style scoped src="@/assets/index.css">

</style>
