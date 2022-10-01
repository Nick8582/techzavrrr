<template>
  <div class="loader">
    <div class="loader__wrapper">
      <div class="loader__circle"></div>
      <div class="loader__circle"></div>
      <div class="loader__circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Loader',
};
</script>

<style>

@keyframes animate-circle{
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.loader--small,
.loader__wrapper {
  height: 30px;
  width: 30px;
}

.loader__wrapper{
  height: 50px;
  width: 50px;
}

.loader__circle{
  position: absolute;
  height: inherit;
  width: inherit;
  background: #9eff00;
  border-radius: 50%;
  animation: animate-circle 2s cubic-bezier(.9,.24,.62,.79) infinite;
}

.loader__circle:nth-of-type(1){
  animation-delay: 0;
}
.loader__circle:nth-of-type(2){
  animation-delay: (2s / -3);
}
.loader__circle:nth-of-type(3){
  animation-delay: (2s / -6);
}
</style>
