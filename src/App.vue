<script setup>
import TheHeader from "./components/TheHeader.vue";
import MainForm from "./components/MainForm.vue";
import MainGrid from "./components/MainGrid.vue";
import MainText from "./components/MainText.vue";
import AccessNum from "./components/AccessNum.vue";
import TheFooter from "./components/TheFooter.vue";
import { DxToast } from "devextreme-vue/toast";
import { message, isVisible, type } from "./modules/toast";
import { checkServise } from "./modules/requests";

checkServise();
</script>

<template>
  <div class="main-wrapper">
    <TheHeader />
    <MainForm />
    <MainText/>
    <AccessNum/>
    <MainGrid />
    <p class="info">*Фикс. цена - сумма, зафиксированная организатором торгов 22 марта 2024 года. Ниже неё активы проданы не будут.</p>
    <TheFooter/>
  </div>
  <DxToast
    v-model:visible="isVisible"
    v-model:message="message"
    v-model:type="type"
    :display-time="1500"
  />
</template>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info {
  margin: 0;
}
</style>
