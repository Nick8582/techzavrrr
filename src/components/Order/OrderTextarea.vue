<template>
  <OrderInputField :title="title" :error="error">
    <textarea class="form__input form__input--area"
              v-model="dataValue"
              :placeholder="placeholder"/>
  </OrderInputField>
</template>
<script>
import OrderInputField from "@/components/Order/OrderInputField";
import formFieldMixin from "@/mixin/formFieldMixin";

export default {
  name: 'OrderTextarea',
  components: {OrderInputField},
  mixins: [formFieldMixin]
}
</script>
