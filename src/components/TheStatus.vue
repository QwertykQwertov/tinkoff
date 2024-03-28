<script setup>
import { ref } from "vue";
import { DxToast } from "devextreme-vue/toast";

const isVisible = ref(false);
const message = ref('test');
const type = ref("");

fetch("https://exchange844.artydev.ru/health", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    if (data.status === "Ok") {
      showToast("success", "Соединение с сервером успешно установлено!");
    } else {
      showToast("error", "Сервер недоступен, попробуйте позже!");
    }
  });

function showToast(newType, newMessage) {
  isVisible.value = true;
  type.value = newType;
  message.value = newMessage;
}
</script>
<template>
  <DxToast
    v-model:visible="isVisible"
    v-model:message="message"
    v-model:type="type"
    :display-time="1500"
  />
</template>
