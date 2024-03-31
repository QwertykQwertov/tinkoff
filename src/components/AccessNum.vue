<script setup>
import { mainStore } from "../store/store.js";
import {beautyTotal} from '../functions.js'

const store = mainStore();

function checkTheLimit(value) {
  return value > 100000 ? 'greenText' : 'redText'
}
</script>

<template>
  <h3 v-if="store.totalSummary">Доступно: <span :class="checkTheLimit()">{{ beautyTotal(store.totalSummary) }} ₽</span>/<span class="greenText">100 000 ₽</span></h3>
</template>

<style>

.greenText {
  color: #97f900;
}

.redText {
 color: #e12b2b;
}
</style>