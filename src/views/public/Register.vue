<template>
<v-container fluid fill-height style="background:linear-gradient(to right, #24243e, #141E30, #0f0c29);">
<v-row align="center" justify="center">
<v-col md=6 xs=12 sm=12>
 <v-row align="center" class="white--text" justify="center">

    <v-card color="transparent" dark flat>
    <v-img src="img/rw.svg"></v-img>
    <p class="overline grey--text">Keep connected with us</p>
    </v-card>
    </v-row>
     <v-row align="center" class="white--text" justify="center">

    <v-btn outlined text rounded small dark color="cyan" ><v-icon></v-icon>LOGIN</v-btn>
    </v-row>
</v-col>
<v-col md="6" xs="12" sm="12">
 <v-row align="center" class="white--text" justify="center">
 <v-col cols="7" class="mx-3 caption">
   <p class="display-1 grey--text text-center">创建账号</p>
   <div class="text-center">
      <v-icon color="grey" class="mx-2">fab fa-github</v-icon>
      <v-icon color="grey" class="mx-2">fab fa-weixin</v-icon>
      <v-icon color="grey" class="mx-2">fab fa-weibo</v-icon>
    </div>
       <p class="overline grey--text text-center ma-6">或者使用你的邮箱注册</p>
    <v-text-field dense    color="indigo"

    dark prepend-icon="fa-id-card-alt size=16"></v-text-field>
    <v-text-field dense
    color="indigo"  dark prepend-icon="fa-at small"></v-text-field>
    <v-text-field dense   color="indigo"
 dark prepend-icon="fa-key"></v-text-field>
  </v-col>
  </v-row>
   <v-row align="center" class="white--text" justify="center">
<v-btn small   rounded dark color="indigo">REGISTER</v-btn>
</v-row>
</v-col>
</v-row>
</v-container>
</template>


<script>

</script>


<style>
</style>