<template>
  <div>
    <v-header></v-header>
    <v-nav></v-nav>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  import nav from './components/nav/nav.vue';
  import footer from './components/footer/footer.vue';
  export default {
    components: {
      'v-header': header,
      'v-nav': nav,
      'v-footer': footer
    }
  };
</script>

<style>

</style>
