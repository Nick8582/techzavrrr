<template>
  <div class="loader__block">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name: 'LoaderPage',
}
</script>

<style>
.loader__block {
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
}

.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 6rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  animation: pulsOut 1.8s ease-in-out infinite;
  filter: drop-shadow(0 0 1rem rgba(39, 39, 39, 0.75));
}

.loader:before {
  width: 100%;
  padding-bottom: 100%;
  box-shadow: inset 0 0 0 1rem #272727;
  animation-name: pulsIn;
}

.loader:after {
  width: calc(100% - 2rem);
  padding-bottom: calc(100% - 2rem);
  box-shadow: 0 0 0 0 #272727;
}

@keyframes pulsIn {
  0% {
    box-shadow: inset 0 0 0 1rem rgba(0, 255, 0, 0.94);
    opacity: 1;
  }
  50%, 100% {
    box-shadow: inset 0 0 0 0 rgba(0, 255, 0, 0.94);
    opacity: 0;
  }
}

@keyframes pulsOut {
  0%, 50% {
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.94);
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 1rem rgba(0, 255, 0, 0.94);
    opacity: 1;
  }
}

</style>
