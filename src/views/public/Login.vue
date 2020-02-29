<template>
      <v-container
        class="fill-height"
        fluid
         style="background: linear-gradient(to right, #24243e, #141E30, #0f0c29);"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="6"
            sm="8"
            md="4"
          >
          <v-row>
            <v-text-field  dark color="indigo"
             clearable
            prepend-icon="fa-smile-wink"
></v-text-field>
            </v-row>
             <v-row>
            <v-text-field  dark color="indigo"
              clearable
             prepend-icon="fa-key"
             ></v-text-field>
              </v-row>
             <v-row>
             <v-btn  class="ml-10" color="deep-orange"  text><v-icon left>fa-registered</v-icon>注册</v-btn>
             <v-spacer></v-spacer>
             <v-btn  class="mr-10" color="indigo"  to='/task' text><v-icon left>fa-sign-in-alt</v-icon>登陆</v-btn>
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
    },
    show(){

    },
  }
}
</script>
