<template>
 <section id="about-hero">
    <v-row no-gutters>
       <v-card
            tile
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            width="100%"
            style="background: linear-gradient(to right, #24243e, #141E30, #0f0c29);"
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
                    @click="$vuetify.goTo('#about-us')"
                  >
                    <v-icon dark>fa-angle-double-down</v-icon>
                  </v-btn>
                  </v-row>
                 </v-container>
                 </v-card>
        </v-row>
   </section>
</template>

<script>
  export default {
    name: 'HomeHero',
  }
</script>
