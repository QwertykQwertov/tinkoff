<script setup>
import {
  DxDataGrid,
  DxColumn,
  DxFormat,
  DxSummary,
  DxTotalItem,
} from "devextreme-vue/data-grid";
import { onMounted } from "vue";
import { productStore } from "../store/store";

const store = productStore();
const currencyDictionary = {
  RUB: "₽",
  EUR: "€",
  USD: "$",
  CNY: "¥",
  HK: "$",
};

onMounted(() => {
  const token = localStorage.getItem("token");
  if (token) {
    console.log(token);
    store.fetchActives(token);
  }
});

const customizeRub = (item) => (item.value ? `${item.valueText} ₽` : "-");
const customizeCurrency = (e) => {
  if (e.rowType != "data") return;
  if (e.column.dataField === "total" || e.column.dataField === "price") {
    e.cellElement.innerHTML = `${e.text} ${
      currencyDictionary[e.data.currency]
    }`;
  } else if (e.column.dataField === "is_exchange" && e.value === true) {
    e.cellElement.querySelector(".dx-checkbox-icon").style.background =
      "#cddc39";
  }
};
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
      <DxColumn data-field="name" caption="Тикер" data-type="string" />

      <DxColumn data-field="_type" caption="Тип" data-type="string" />
      <DxColumn data-field="figi" caption="Figi" data-type="string" />
      <DxColumn
        alignment="left"
        data-field="quantity"
        caption="Количество"
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

<style scoped>
/* .dx-datagrid-checkbox-size.dx-checkbox-checked .dx-checkbox-icon {
  border: 1px solid red !important;
} */
</style>
