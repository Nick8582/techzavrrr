import OrderInputField from "@/components/Order/OrderInputField";

export default {
  model: {OrderInputField},
  props: ['title', 'error', 'placeholder', 'modelValue'],
  components: {OrderInputField},
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(modelValue) {
        this.$emit('update:modelValue', modelValue);
      },
    },
  },
};
