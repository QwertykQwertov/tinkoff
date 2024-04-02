<template>
  <div class="footer">
    <a
      class="footer-link"
      href="https://github.com/QwertykQwertov"
      target="_blank"
      ><img
        class="image-link"
        src="../assets/github-mark.svg"
        alt="GitHub logo"
    /></a>
    <a
      class="footer-link"
      href="https://t.me/QwertykQwertov"
      target="_blank"
      ><img
        class="image-link"
        src="../assets/telegram.svg"
        alt="Telegram logo"
    /></a>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.image-link {
  height: 30px;
  width: 30px;
}

.footer-link {
  height: 30px;
  width: 30px;
  border: 2px solid transparent;
  border-radius: 50%;
  &:hover {
    border-color: #cddc39;
  }
}
</style>