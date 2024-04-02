export const customizeRub = (item) => `${item.valueText} ₽`;

export const customizeCurrency = (e) => {
  if (e.rowType != "data") return;
  if (e.value === null) {
    e.cellElement.innerHTML = "-";
  } else if (e.column.dataField === "total" || e.column.dataField === "price") {
    e.cellElement.innerHTML = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: e.data.currency }).format(
      e.value
    )
  } else if ((e.column.dataField === "is_exchange" || e.column.dataField === "is_used") && e.value) {
    e.cellElement.querySelector(".dx-checkbox-icon").style.background =
      "#cddc39";
  }
};

export function beautyTotal(value) {
  const integer = Math.floor(value)
  return new Intl.NumberFormat('ru-RU').format(integer)
}
