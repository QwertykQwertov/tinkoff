<script setup>
import {
  DxDataGrid,
  DxColumn,
  DxFormat,
  DxSummary,
  DxTotalItem,
} from "devextreme-vue/data-grid";
import { onMounted } from "vue";
import { mainStore } from "../store/store.js";
import { getActives } from "../modules/requests.js";
import { customizeRub, customizeCurrency } from "../functions.js";

const store = mainStore();

onMounted(() => {
  const token = localStorage.getItem("token");
  if (token) {
    getActives(token).then((data) => {
      store.setActives(data.rows);
      store.setTotalSummary(data.total_rub);
    });
  }
});
</script>
<template>
  <div>
    <DxDataGrid
      :show-borders="true"
      :data-source="store.actives"
      :column-auto-width="true"
      :loadPanel="{ showIndicator: false, showPane: false, text: '' }"
      no-data-text="Нет данных"
      @cell-prepared="customizeCurrency"
    >
      <DxColumn data-field="name" caption="Наименование" data-type="string" />

      <DxColumn data-field="figi" caption="FIGI" data-type="string" />
      <DxColumn data-field="_type" caption="Тип" data-type="string" />
      <DxColumn
        alignment="left"
        data-field="quantity"
        caption="Кол-во"
        data-type="number"
      />
      <DxColumn
        alignment="left"
        data-field="price"
        caption="Цена"
        data-type="number"
      >
        <DxFormat type="fixedPoint" :precision="2" />
      </DxColumn>
      <DxColumn alignment="left" data-field="total" caption="Сумма">
        <DxFormat type="fixedPoint" :precision="2" />
      </DxColumn>
      <DxColumn
        alignment="left"
        data-field="price_cb"
        caption="Фикс. цена"
        data-type="number"
        :customize-text="customizeRub"
      >
        <DxFormat type="fixedPoint" :precision="2" />
      </DxColumn>
      <DxColumn
        alignment="left"
        data-field="total_cb_price"
        caption="Фикс. сумма"
        data-type="number"
        :customize-text="customizeRub"
      >
        <DxFormat type="fixedPoint" :precision="2" />
      </DxColumn>
      <DxColumn
        data-field="is_exchange"
        caption="Доступно"
        data-type="boolean"
        :width="90"
      />
      <DxColumn data-field="acc" caption="Портфель" data-type="string" />
      <DxSummary>
        <DxTotalItem
          column="total_cb_price"
          summary-type="sum"
          :value-format="{
            style: 'currency',
            currency: 'RUB',
            useGrouping: true,
          }"
        />
      </DxSummary>
    </DxDataGrid>
  </div>
</template>
