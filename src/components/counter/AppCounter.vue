<template>
  <div class="form__counter" :class="className">
    <button type="button" aria-label="Убрать один товар" @click.prevent="dizcriment">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="amount" name="count">

    <button type="button" aria-label="Добавить один товар" @click.prevent="increment">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppCounter',
  props: {
    className: String,
    productAmount: Number,
  },
  data() {
    return {
      amount: this.productAmount
    }
  },
  methods: {
    increment() {
      this.$emit('update:productAmount', this.amount += 1);
    },
    dizcriment() {
      if (this.productAmount > 1) {
        this.$emit('update:productAmount', this.amount -= 1);
      }
    },
  }
}
</script>
