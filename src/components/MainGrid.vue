<script setup>
import { DxDataGrid, DxColumn, DxFilterRow } from "devextreme-vue/data-grid";
import DataSource from "devextreme/data/data_source";

const gridSource = new DataSource({
  key: "figi",
  load() {
    return [
      {
        ticker: "Nubank",
        figi: "KYG6683N1034",
        quantity: 3,
        price: "3.79000000",
        total: "11.37000000",
        currency: "usd",
        acc: "Comeback",
      },
      {
        ticker: "Uber",
        figi: "US90353T1007",
        quantity: 6,
        price: "22.02000000",
        total: "132.12000000",
        currency: "usd",
        acc: "Aggressive investing",
      },
    ];
  },
});
</script>
<template>
  <div>
    <DxDataGrid
      :show-borders="true"
      :data-source="gridSource"
      :column-auto-width="true"
      :loadPanel="{ showIndicator: false, showPane: false, text: '' }"
      no-data-text="Нет данных"
    >
      <!-- <DxHeaderFilter :visible="true" /> -->
      <DxFilterRow :visible="true" apply-filter="auto" />
      <DxColumn data-field="ticker" caption="Тикер" data-type="string" />
      <DxColumn data-field="figi" caption="Figi" data-type="string" />
      <DxColumn alignment='left' data-field="quantity" caption="Количество" data-type="number" />
      <DxColumn alignment='left' data-field="price" caption="Цена" data-type="number" />
      <DxColumn alignment='left' data-field="total" caption="Сумма" data-type="number" />
      <DxColumn data-field="currency" caption="Валюта" data-type="string" />
      <DxColumn data-field="acc" caption="Портфель" data-type="string" />
    </DxDataGrid>
  </div>
</template>
