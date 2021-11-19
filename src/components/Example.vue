<template>
  <section id="main">
    <div class="container">
      <h1>Example message: {{ getM }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getM() {
     return this.$store.getters.getMessage;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  background-color: rgb(94, 21, 100);
  text-align: center;
  padding: 20px 0;
  color: #fff;
}
</style>