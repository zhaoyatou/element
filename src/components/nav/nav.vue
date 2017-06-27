<template>
  <div id="content">
    <div class="nav">
      <div>
        <router-link to="/cont1" class="c">商品</router-link>
      </div>
      <div>
        <router-link to="/cont2">评价</router-link>
      </div>
      <div>
        <router-link to="/cont3">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>


<style lang="scss" scoped>
  @import "nav";
</style>

