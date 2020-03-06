<template>
 <section id="contact-us">
 <v-row align="center" justify="center">
     <v-card width=400 class="mt-6" flat>
         <v-img src="index.png"></v-img>
    </v-card>
 </v-row>
      <v-row no-gutters>
       <v-container dark class="text-center"
    >
              <div class="text-center mx-6">
             <v-btn class="mx-2" fab  small text>
             <v-icon dark>fab fa-gitlab</v-icon>
             </v-btn>
              <v-btn class="mx-2" fab  small  text>
               <v-icon>fab fa-qq</v-icon>
              </v-btn>
             <v-btn class="mx-2" fab  small  text>
            <v-icon dark>fab fa-github</v-icon>
             </v-btn>
              <v-btn class="mx-2" fab small  text>
                <v-icon dark>fab fa-weixin</v-icon>
             </v-btn>
                 <v-btn class="mx-2" fab small  text>
            <v-icon dark>fab fa-weibo</v-icon>
             </v-btn>
             </div>
          </v-container>
      </v-row>
 <v-row align="center" justify="center" >
     <v-col md=4 sm=6 xs=6 class="text-center">
        <v-text-field outlined rounded dense
        placeholder="邮箱"
        append-icon="fa-paper-plane"
></v-text-field>
    <p class="subtitle-2">点击订阅，获取RW最新动态以及最新消息</p>
    <v-divider class="mb-4"></v-divider>
    <p class="overline"> No-one is promised tomorrow</p>
     </v-col>
 </v-row>
    </section>
</template>


<script>
  export default {
    name: 'HomeContact',
  }
</script>