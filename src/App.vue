<template>
  <div>
  <nav>
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
  <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default{
  components: {Footer}
}
</script>