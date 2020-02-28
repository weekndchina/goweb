<template>
<div>
 <section id="hero">
<v-row no-gutters>
    <v-app-bar
      app
      height="48"
      dark
      color="black"
    >
    <v-tabs right>
        <v-tab>About</v-tab>
        <v-tab>Feature</v-tab>
    </v-tabs>
    <v-btn small color="deep-orange" outlined dense rounded>LOG IN</v-btn>
    <v-btn small color="indigo"  dense rounded class="ml-3">SIGN UP</v-btn>
    </v-app-bar>
          <v-img
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          >

          <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                <v-col
                    class="white--text text-center"
                    cols="12"
                  >
                    <span
                      class="font-weight-light"
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    >
                      WELCOME TO
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      RWPLUS
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    dark
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon dark>fa-mouse</v-icon>
                  </v-btn>
                  </v-row>
                 </v-container>
          </v-img>
        </v-row>

   </section>
         <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
            Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components.
          </v-responsive>

          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-avatar>

          <div></div>

          <v-btn
            color="grey"
            href="https://vuetifyjs.com"
            outlined
            large
          >
            <span class="grey--text text--darken-1 font-weight-bold">
              Vuetify Documentation
            </span>
          </v-btn>
        </v-container>

        <div class="py-12"></div>
      </section>
      </div>
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