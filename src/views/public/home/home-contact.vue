<template>
 <section id="contact-us">
      <v-row no-gutters style="background: linear-gradient(to right, #24243e, #141E30, #0f0c29);">
       <v-container dark class="text-center"
    >
         <p class="headline">联系我们</p>
           <v-responsive
            class="mx-auto mb-8"
          >
            <v-divider class="mb-1"></v-divider>
          </v-responsive>
              <div class="text-center">
             <v-btn class="mx-2" fab dark small color="primary">
             <v-icon dark>fa-smile</v-icon>
             </v-btn>
              <v-btn class="mx-2" fab dark small color="pink">
               <v-icon>fa-charts</v-icon>
              </v-btn>
             <v-btn class="mx-2" fab dark small color="indigo">
            <v-icon dark>fa-qq</v-icon>
             </v-btn>
             </div>
          </v-container>
      </v-row>
    </section>
</template>


<script>
  export default {
    name: 'HomeContact',
  }
</script>