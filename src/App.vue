<script setup>
import TheHeader from "./components/TheHeader.vue";
import MainForm from "./components/MainForm.vue";
import MainGrid from "./components/MainGrid.vue";
import TheStatus from "./components/TheStatus.vue";
import MainText from "./components/MainText.vue";
</script>

<template>
  <div class="main-wrapper">
    <TheHeader />
    <MainForm />
    <MainText/>
    <MainGrid />
  </div>
  <TheStatus/>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
