<script setup>
import spblogo from '../assets/spblogo.svg'
import tinkofflogo from '../assets/tinkofflogo.svg'
import telegram from '../assets/telegram.svg'
</script>
<template>
  <div class="header-wrapper">
    <img :src="spblogo" alt="">
    <img :src="tinkofflogo" alt="">
    <h1 class="header-title">Обмен заблокированных активов</h1>
    <img :src="telegram" alt="">
  </div>
</template>
<style lang="scss" scoped>
.header-wrapper {
display: flex;
gap: 10px;

& img {
  border-radius: 10px;
}  

& .header-title {
  flex: 1;
}
}
</style>
