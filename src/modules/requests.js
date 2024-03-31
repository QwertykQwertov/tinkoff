import { showToast } from "./toast.js";


export async function getActives(token) {
  return
  return fetch("https://exchange844.artydev.ru/api/v1/exchange_info", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token })
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status !== 'success') {
        showToast('Произошла ошибка или введен некорректный токен!', 'error')
        return data
      }
      data.rows = data.rows.map(el => {
        return { ...el, is_exchange: el.is_exchange === 'Y' ? true : false }
      })
      return data

    }).catch(err => {
      showToast('Произошла ошибка при получении данных!', 'error')
      console.log(err)
      return {status: err, rows: []}
    })
}

export function checkServise() {
  fetch("https://exchange844.artydev.ru/health", { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "Ok") {
        showToast("Соединение с сервером успешно установлено!", "success");
      } else {
        showToast("Сервер недоступен, попробуйте позже!", "error");
      }
    });
}