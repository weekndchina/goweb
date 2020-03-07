<template>
  <v-container
    fill-height
    class="text-center"
    fluid
    style="background:linear-gradient(to right, #24243e, #141E30, #0f0c29);"
  >
    <v-col cols="12" md="6" sm="12" xs="12">
      <v-row align="center" class="mx-auto white--text" justify="center">
        <p class="overline font-weight-bold grey--text" dark>Members</p>
      </v-row>
      <v-row align="center" class="mx-auto" justify="center">
        <v-col cols="10">
          <v-divider class="mb-6" dark></v-divider>
          <v-avatar color="grey lighten-4" v-for="img in images" :key="img">
            <img :src="img" alt="avatar" />
          </v-avatar>
        </v-col>
      </v-row>

      <v-row align="center" class="mx-auto" justify="center">
        <v-col cols="10">
          <v-divider class="mx-6" dark></v-divider>
          <p class="overline grey--text mt-6">
            宗旨：工作中解决的问题，随手学到的知识，帮助小伙伴时的乐趣。
          </p>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="6" sm="12" xs="12">
      <v-row align="center" class="mx-auto white--text" justify="center">
        <p class="headline indigo--text font-weight-bold uppercase">RWPLUS</p>
      </v-row>

      <v-row align="center" class="mx-auto white--text" justify="center">
        <v-col cols="10">
          <v-text-field
            dark
            dense
            color="indigo"
            prepend-icon="fa-user-check"
            label="电子邮件"
            v-model="model.username"
            placeholder="rwplus@github.com"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" class="mx-auto white--text" justify="center">
        <v-col cols="10">
          <v-text-field
            dark
            dense
            color="indigo"
            prepend-icon="fa-key"
            label="密码"
            type="password"
            v-model="model.password"
            placeholder="password"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-btn small dark dense outlined rounded @click="login" color="deep-orange">登录</v-btn>
      <v-btn small dark dense color="indigo" rounded class="ml-6">注册</v-btn>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
      username: "weeknd.su@wukongbox.com",
      password: "123456"
    },
    images: []
  }),
  methods: {
    login() {
      let that = this;
      this.$http.get("/login").then(res => {
        if (res.data.code === 200) {
          this.$store.commit("snackbar/setSnackbar", {
            show: true,
            message: res.data.msg,
            color: "black",
            top: true
          });
        } else {
          this.$store.commit("snackbar/setSnackbar", {
            show: true,
            message: res.data.msg,
            color: "error",
            top: true
          });
        }
      });
    },
    getImages() {
      this.$http.get("getImages").then(res => {
        if (res.data.code === 200) {
          this.images = res.data.data.images;
        }
      });
    }
  },
  created() {
    this.getImages();
  }
};
</script>
