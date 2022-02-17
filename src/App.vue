<template>
  <div id="app">
    <Header></Header>
    <!-- 所有的一级路由都在此显示 -->
    <router-view></router-view>
    <!-- Footer比较特殊，不可以小写，小写的话就和footer这个H5标签重名了 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,Footer
  }
}
</script>

<style>
</style>
