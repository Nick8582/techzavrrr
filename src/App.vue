<template>
  <HeaderPage/>
  <main class="content container">
    <router-view/>
  </main>
  <FooterPage/>
</template>

<script>
import HeaderPage from "@/components/Header/HeaderPage";
import FooterPage from "@/components/Footer/FooterPage";
import gotoPage from "@/helpers/gotoPage";
import {mapActions, mapMutations} from "vuex";

export default {
  gotoPage,
  name: 'App',
  components: {FooterPage, HeaderPage},
  created() {
    const userAccessKey = localStorage.getItem('userAccessKey');
    if (userAccessKey) {
      this.updateUserAccessKey(userAccessKey);
    }
    this.loadCart();
  },
  methods: {
    ...mapActions(['loadCart']),
    ...mapMutations(['updateUserAccessKey']),
  },
};
</script>
