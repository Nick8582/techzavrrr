<template>
  <OrderInputField :title="title" :error="error">
    <input
        class="form__input"
        :type="type"
        :placeholder="placeholder"
        v-model="dataValue"/>
  </OrderInputField>
</template>

<script>
import OrderInputField from "@/components/Order/OrderInputField";
import formFieldMixin from "@/mixin/formFieldMixin";

export default {
  name: 'OrderInput',
  components: {OrderInputField},
  props: {
    type: {
      default: 'text',
    },
  },
  mixins: [formFieldMixin],
}
</script>
