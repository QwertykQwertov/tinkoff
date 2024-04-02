<script setup>
import { mainStore } from "../store/store.js";
import {beautyTotal} from '../functions.js'

const store = mainStore();

function checkTheLimit(value) {
  return value < 100000 ? 'greenText' : 'redText'
}
</script>

<template>
  <h3 v-if="store.totalSummary">Подано на конвертацию: <span :class="checkTheLimit(store.totalSummary)">{{ beautyTotal(store.totalSummary) }}</span> / <span class="greenText">100 000 ₽</span></h3>
</template>

<style>

.greenText {
  color: #97f900;
}

.redText {
 color: #e12b2b;
}

h3 {
  margin: 0;
  font-size: 1.8em;
}
</style>