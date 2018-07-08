<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in" appear>
      <router-view style="padding: 60px 0 40px 0" :key="$route.fullPath"/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" src="./assets/styles/main.scss"></style>
