<script setup>
import {ref} from 'vue'
import { DxButton } from "devextreme-vue/button";
import { DxTextBox } from "devextreme-vue/text-box";

const token = ref()

</script>
<template>
  <div class="custom-form">
    <DxTextBox
      :height='30'
      v-model="token"
      mode="text"
      styling-mode="outlined"
      label='Укжите токен Tinkoff'
      class="custom-input"
    />
    <DxButton
      :height='30'
      text="Отправить"
      type="default"
      icon=""
      hint=""
      @click="onClick(event)"
      class="custom-button"
    />
  </div>
</template>

<style scoped lang="scss">
.custom-form {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  .custom-input {
    flex: 1;
  }


}

.custom-button {
    margin-top: 4px;
  }

</style>
