<script setup>
import { DxValidator, DxRequiredRule } from "devextreme-vue/validator";
import { ref } from "vue";
import { DxButton } from "devextreme-vue/button";
import { DxTextBox } from "devextreme-vue/text-box";
import { productStore } from "../store/store";

const store = productStore();

const height = 40;

const onClick = () => {};

const handleSubmit = (e) => {
  const token = e.target[0].value.trim()

  localStorage.setItem('token', token)
  store.fetchActives(token)


  // fetch('../assets/test.json').then(res => res.json()).then(data => data)
};
</script>
<template>
  <form class="custom-form" @submit.prevent="handleSubmit">
    <DxTextBox
      :height="height"
      name="token"
      v-model="token"
      mode="text"
      styling-mode="outlined"
      label="Укжите токен Tinkoff"
      class="custom-input"
    >
      <DxValidator ref="validate">
        <DxRequiredRule message="Укажите токен!" />
      </DxValidator>
    </DxTextBox>
    <DxButton
      class="custom-button"
      :height="height"
      text="Проверить"
      type="default"
      icon="taskcomplete"
      @click="onClick(event)"
      :use-submit-behavior="true"
    />
  </form>
</template>

<style scoped lang="scss">
.custom-form {
  display: flex;
  align-items: center;
  gap: 10px;
  // margin-bottom: 30px;

  .custom-input {
    flex: 1;
  }
}

.custom-button {
  margin-top: 4px;
}
</style>
