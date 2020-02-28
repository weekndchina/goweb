<template>
      <v-container
        class="fill-height"
        fluid
        style="background:#35363a"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
          <v-row>
            <v-text-field dark solo color="indigo"
            dense clearable rounded
            prepend-icon="fa-smile-wink"
            background-color="#202124"></v-text-field>
            </v-row>
             <v-row>
            <v-text-field dark solo color="indigo"
             dense clearable rounded
             background-color="#202124"
             prepend-icon="fa-key"
             ></v-text-field>
              </v-row>
             <v-row>
             <v-btn  class="ml-10" color="#202124" dark ><v-icon left>fa-registered</v-icon>注册</v-btn>
             <v-spacer></v-spacer>
             <v-btn  class="mr-10" color="#202124" dark @click="login()"><v-icon left>fa-sign-in-alt</v-icon>登陆</v-btn>
             </v-row>
          </v-col>
        </v-row>
      </v-container>
</template>


<script>
export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    login() {
        let that=this;
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
    }
  }
}
</script>