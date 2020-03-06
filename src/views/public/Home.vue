<template>
<div id="home">
 <v-app-bar
      app
      height="48"
      dark
      style="background: linear-gradient(to right, #24243e, #141E30, #0f0c29);"
    >
    <v-tabs right height="48">
        <v-tab class="caption font-weight-bold" @click="$vuetify.goTo('#about-us')">关于我们</v-tab>
        <v-tab class="caption font-weight-bold"  @click="$vuetify.goTo('#about-intro')">RW介绍</v-tab>
         <v-tab class="caption font-weight-bold"  @click="$vuetify.goTo('#contact-us')">联系我们</v-tab>
    </v-tabs>
    <v-btn small color="deep-orange" outlined dense rounded class="ml-1" to='/login'>登陆</v-btn>
    <v-btn small color="indigo"  dense rounded class="ml-3">注册</v-btn>
</v-app-bar>
    <v-content>
    <home-hero />
    <home-us />
    <home-intro />
    <home-contact />
</v-content>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
      HomeHero: () => import('./home/home-hero'),
      HomeUs: () => import('./home/home-us'),
      HomeIntro: () => import('./home/home-intro'),
      HomeContact: () => import('./home/home-contact'),
    },
  }
</script>