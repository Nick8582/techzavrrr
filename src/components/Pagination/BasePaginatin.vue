<template>
  <ul class="catalog__pagination pagination" v-show="visible">
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled' : page === 1}"
         @click.prevent="paginate(page - 1)" aria-label="Предыдущая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNum in pages" :key="pageNum">
      <a class="pagination__link" :class="{'pagination__link--current' : pageNum === page }"
         @click.prevent="paginate(pageNum)">
        {{ pageNum }}
      </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled' : page === pages}"
         @click.prevent="paginate(page + 1)" aria-label="Следующая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BasePagination',
  props: ['modelValue', 'count', 'perPage'],
  computed: {
    page() {
      return this.modelValue;
    },
    pages() {
      return Math.ceil(this.count / this.perPage)
    },
    visible() {
      return !(this.pages === 1 || this.pages === 0 );
    },
  },
  methods: {
    paginate(page) {
      this.$emit('update:modelValue', page);
    },
  },
};
</script>
