<template>
  <v-row no-gutters class="move" :style="backgroundStyle">
    <v-col ref="left" cols="12" md="6" xs="12" sm="12" class="col-box left">
      <router-view v-if="isLogin"></router-view>
      <LoginGuide v-on:changeStatusEvent="changeStatus" v-if="!isLogin" />
    </v-col>
    <v-col ref="right" cols="12" md="6" xs="12" sm="12" class="col-box right">
      <router-view v-if="!isLogin"></router-view>
      <RegisterGuide v-on:changeStatusEvent="changeStatus" v-if="isLogin" />
    </v-col>
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
      isLogin: true,
      backgroundStyle: {
        "background-position": "",
        "background-size": "",
        transition: ""
      }
    };
  },
  methods: {
    changeStatus(loginStatus) {
      this.isLogin = loginStatus;
    },
    justifyBackground(isLogin, isClick = false, that = this) {
      if (isClick) {
        that.backgroundStyle["transition"] = "all 0.5s ease-in-out";
      } else {
        that.backgroundStyle["transition"] = "none";
      }
      that.$nextTick(() => {
        const left = this.$refs.left.getClientRects()[0];
        const right = this.$refs.right.getClientRects()[0];
        const el = isLogin ? right : left;
        this.backgroundStyle[
          "background-position"
        ] = `${el.left}px ${el.top}px`;
        this.backgroundStyle[
          "background-size"
        ] = `${el.width}px ${el.height}px`;
      });
    }
  },
  watch: {
    isLogin(newVal, oldVal) {
      // console.log(oldVal, newVal);
      this.justifyBackground(newVal, true);
    }
  },
  created() {
    if (this.$route.path.indexOf("register") != -1) {
      this.isLogin = false;
    }
  },
  mounted() {
    this.justifyBackground(this.isLogin, false);
    window.addEventListener("resize", () => {
      this.justifyBackground(this.isLogin, false);
    });
  }
};
</script>
<style lang="css" scoped>
.move {
  background: linear-gradient(to right, #24243e, #141e30, #0f0c29);
  background-repeat: no-repeat;
}
</style>