<template>
  <div class="loader__error-page">
    <h2>Произошла ошибка при загрузке {{ message }}
      <button class="loader__reboot" @click.prevent="rebootLoad">попробовать снова</button>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'LoaderErrorPage',
  props: {
    message: String,
    rebootLoad: Function,
  },

}
</script>

<style>
.loader__error-page {
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
}

.loader__reboot {
  background: none;
  border: none;
  font-weight: inherit;
  font-size: inherit;
  color: rgba(0, 255, 0, 0.94);
  cursor: pointer;
  transition: color ease-in-out .3s;
}

.loader__reboot:hover {
  color: #00e01e;
}
</style>
