<template>
  <v-row no-gutters class="move" :style="{'background-position-x': isLogin?'right':'left'}">
    <v-col cols="12" md="6" xs="12" sm="12" class="col-box left">
      <v-slide-y-transition hide-on-leave>
        <router-view v-if="isLogin"></router-view>
      </v-slide-y-transition>
      <v-slide-x-reverse-transition>
        <LoginGuide v-on:changeStatusEvent="changeStatus" v-if="!isLogin" />
      </v-slide-x-reverse-transition>
    </v-col>
    <v-col cols="12" md="6" xs="12" sm="12" class="col-box right">
      <v-slide-y-transition hide-on-leave>
        <router-view v-if="!isLogin"></router-view>
      </v-slide-y-transition>
      <v-slide-x-transition>
        <RegisterGuide v-on:changeStatusEvent="changeStatus" v-if="isLogin" />
      </v-slide-x-transition>
    </v-col>
    <!-- <div class="move" :style="styleObject"></div> -->
  </v-row>
</template>

<script>
import LoginGuide from "./guide/LoginGuide";
import RegisterGuide from "./guide/RegisterGuide";

export default {
  name: "Join",
  components: {
    LoginGuide,
    RegisterGuide
  },
  data() {
    return {
      isLogin: true
    };
  },
  methods: {
    changeStatus(loginStatus) {
      this.isLogin = loginStatus;
    }
  },
  computed: {
    styleObject() {
      return this.isLogin ? { right: 0 } : { left: 0 };
    }
  },
  created() {
    if (this.$route.path.indexOf("register") != -1) {
      this.isLogin = false;
    }
  }
};
</script>
<style lang="css" scoped>
.col-box {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 999;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
.move {
  transition: all 0.3s ease-in-out;
  background: linear-gradient(to right, #24243e, #141e30, #0f0c29);
  background-repeat: no-repeat;
  background-size: 50% 100%;
}
</style>