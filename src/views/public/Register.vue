<template>
<v-row no-gutters>
<v-col cols="12" md=6 xs=12 sm=12>
<v-card height="100%" tile elevation="8" width="100%" style="background:linear-gradient(to right, #24243e, #141E30, #0f0c29);">
<v-container fill-height>
  <v-col cols="12" md="12" sm="12" xs="12">
      <v-row align="center" class="mx-auto grey--text" justify="center">
        <p class="display-1 teal--text">Hello there!</p>
      </v-row>
      <v-row align="center" class="mx-auto grey--text mt-3" justify="center">
      <v-col md=4 xs=6 sm=6>
        <p class="overline text-center">小伙伴，欢迎加入RWPLUS！希望在这里，你能开启一段有意义的旅程。</p>
      </v-col>
      </v-row>
            <v-row align="center" class="mx-auto grey--text" justify="center">
        <v-col md=1 sm=1 xs=1>
            <v-divider dark></v-divider>
        </v-col>
      </v-row>

      <v-row align="center" class="mx-auto grey--text mt-3" justify="center">
        <v-col md=4 sm=6 xs=6>
        <p class="overline text-center cyan--text">已经账号？</p>
        </v-col>
      </v-row>
        <v-row align="center" class="mx-auto grey--text" justify="center">
        <v-col md=4 sx=6 sm=6>
            <v-btn block dark small outlined rounded color="cyan">登陆</v-btn>
        </v-col>
      </v-row>
</v-col>
</v-container>
</v-card>
</v-col>
<v-col cols="12" md=6 sx=12 sm=12>

<v-container fill-height fluid>
  <v-col cols="12" md="12" sm="12" xs="12">
      <v-row align="center" class="mx-auto" justify="center">
        <p class="title" >注册账号</p>
      </v-row>
      <v-row align="center" class="mx-auto" justify="center">
          <v-avatar>
            <img src="img/rw.svg" />
          </v-avatar>
      </v-row>
      <v-row align="center" class="mx-auto" justify="center">
          <p class="caption mt-6">
                或者使用邮箱注册
          </p>
      </v-row>
      <v-row align="center" class="mx-auto" justify="center">
        <v-col cols="1">
         <v-icon small right color="black">fa-user</v-icon>
        </v-col>
        <v-col cols="11" md=6 xs=6 sm=6>
          <v-text-field
            dense
            hide-details
            color="indigo"
            label="用户名"
            placeholder="rwplus"
          ></v-text-field>
        </v-col>
      </v-row>
            <v-row align="center" class="mx-auto" justify="center">
       <v-col cols="1">
         <v-icon small right color="black">fa-at</v-icon>
        </v-col>
        <v-col cols="11" md=6 xs=6 sm=6>
          <v-text-field
            dense
            hide-details
            color="indigo"
            label="邮箱"
             placeholder="xxx@rwplus.com"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" class="mx-auto" justify="center">
         <v-col cols="1">
         <v-icon small right color="black">fa-unlock</v-icon>
        </v-col>
        <v-col cols="11" md=6 xs=6 sm=6>
          <v-text-field
            dense
            hide-details
            color="indigo"
            label="密码"
            placeholder="123456"
          ></v-text-field>
        </v-col>
      </v-row>
        <v-row align="center" class="mx-auto mt-3" justify="center">
        <v-col md=4 sm=4 xs=4>
            <v-btn  small outlined rounded block small> 注册</v-btn>
            </v-col>
      </v-row>
        <v-row align="center" class="mx-auto" justify="center">
        <v-col md=6 xs=6 sm=6>
           <p class="caption text-center">By signing up for an account, I agree to the terms and conditions
</p>
            </v-col>
      </v-row>
    </v-col>
</v-container>
</v-col>
</v-row>
</template>


<script>

</script>


<style>
</style>