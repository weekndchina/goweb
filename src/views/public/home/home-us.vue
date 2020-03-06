<template>
      <section id="about-us">
       <v-row no-gutters>
           <v-card
            tile
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          >
         <v-row
              align="center"
              class="mx-auto"
                >

                <v-col
                    class="text-center"
                    md=12 xs=12 sm=12
                  >
         <p class="headline">关于我们</p>
          <v-responsive
            class="mx-auto mb-8"
          >
            <v-divider class="mb-1"></v-divider>
          </v-responsive>
          </v-col>
            </v-row>
            <v-row align="center"
                  class="white--text
                   mx-auto"
                  justify="center">
             <v-col md=6 xs=6 sm=6>
              <v-img src="index.png"></v-img>
              </v-col>
             <v-col md=6 xs=6 sm=6>
             </v-col>
            </v-row>
         </v-card>
        </v-row>
      </section>
</template>


<script>
  export default {
    name: 'HomeUs',
  }
</script>