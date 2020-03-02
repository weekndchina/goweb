<template>
<v-container fill-height class="text-center" fluid style="background:linear-gradient(to right, #24243e, #141E30, #0f0c29);">
     <v-col cols="12" md=6 sm=12 xs=12>
    <v-row
      align="center"
      class="mx-auto white--text"
      justify="center"
      >
       <p class='headline' dark>Meet With Us</p>
     </v-row>
     <v-row
      align="center"
      class="mx-auto"
      justify="center"
      >
      <v-col cols=10>
      <v-avatar color="grey lighten-4" v-for="img in images">
                        <img :src="img" alt="avatar">
        </v-avatar>
        </v-col>
      </v-row>

       <v-row
      align="center"
      class="mx-auto"
      justify="center"
      >
      <v-col cols=10>
        <v-btn
                     v-for="icon in icons"
                     :key="icon"
                     class="mx-3 white--text"
                    icon
                    >
                   <v-icon size="20px">{{ icon }}</v-icon>
                    </v-btn>
                    </v-col>
         </v-row>
    </v-col>
    <v-col cols="12" md=6 sm=12 xs=12 >
    <v-row
      align="center"
      class="mx-auto white--text"
      justify="center"
      >
       <p class='headline' dark><span class="title">RWPLUS</span></p><br>
     </v-row>
     <v-row
      align="center"
      class="mx-auto white--text"
      justify="center"
      >
      <v-col cols=10>
        <v-text-field  dark dense color='indigo' prepend-icon="fa-user-circle-o" label="电子邮件"  v-model="model.username"  placeholder="rwplus@github.com"></v-text-field>
        </v-text-field>
        </v-col>
        </v-row>
            <v-row
            align="center"
            class="mx-auto white--text"
            justify="center"
         > <v-col cols=10>
        <v-text-field  dark dense color='indigo' prepend-icon="fa-key" label="密码" type="password" v-model="model.password" placeholder="password">
        </v-text-field>
        </v-col>
        </v-row>
         <v-btn dark dense text outlined color="deep-orange" rounded dark @click="login">登录</v-btn>
         <v-btn dark dense text outlined rounded class="ml-6">注册</v-btn>
    </v-col>
</v-container>
</template>




<script>
export default {
    data: () => ({
    loading: false,
    model: {
      username: 'weeknd.su@wukongbox.com',
      password: '123456'
    },
    images: ['/img/1.jpeg','/img/2.jpeg','/img/3.jpeg','/img/4.jpeg','/img/5.jpeg','/img/6.jpeg','/img/7.jpeg','/img/8.jpeg','/img/9.jpeg','/img/10.jpeg',
     '/img/11.jpeg','/img/12.jpeg','/img/13.jpeg','/img/14.jpeg','/img/15.jpeg','/img/16.jpeg','/img/17.jpeg','/img/18.jpeg','/img/19.jpeg','/img/20.jpeg'
    ],
    icons: [
      'fa-qq',
      'fa-wechat',
      'fa-github',
      'fa-linkedin'
          ]
  }),
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
