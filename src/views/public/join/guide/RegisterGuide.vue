<template>
  <v-card
    height="100%"
    tile
    elevation="8"
    width="100%"
    style="background:linear-gradient(to right, #24243e, #141E30, #0f0c29);"
  >
    <v-container fill-height>
      <v-col cols="12" md="12" sm="12" xs="12">
        <v-row align="center" class="mx-auto grey--text" justify="center">
          <p class="display-1 teal--text">欢迎回来！</p>
        </v-row>
        <v-row align="center" class="mx-auto grey--text mt-3" justify="center">
          <v-col md="4" xs="6" sm="6">
            <p class="overline text-center">小伙伴，欢迎加入RWPLUS！希望在这里，你能开启一段有意义的旅程。</p>
          </v-col>
        </v-row>
        <v-row align="center" class="mx-auto grey--text" justify="center">
          <v-col md="1" sm="1" xs="1">
            <v-divider dark></v-divider>
          </v-col>
        </v-row>

        <v-row align="center" class="mx-auto grey--text mt-3" justify="center">
          <v-col md="4" sm="6" xs="6">
            <p class="overline text-center cyan--text">创建账号？</p>
          </v-col>
        </v-row>
        <v-row align="center" class="mx-auto grey--text" justify="center">
          <v-col md="4" sx="6" sm="6">
            <v-btn
              block
              dark
              small
              outlined
              rounded
              color="cyan"
              to="/join/register"
              @click="toRegisterPage"
            >注册</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "registerGuide",
  props: {},
  data() {
    return {};
  },
  methods: {
    toRegisterPage() {
      this.$emit("changeStatusEvent", false);
    }
  }
};
</script>