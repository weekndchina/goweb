<template>
  <v-container
    fill-height
    class="text-center"
    fluid
    style="background:linear-gradient(to right, #24243e, #141E30, #0f0c29);"
  >
    <v-col md=12 sm=12 xs=12>
          <v-row align="center" class="mx-auto white--text" justify="center">
        <v-card color="transparent" dark flat>
        <p class="display-3 font-weight-bold red--text">502</p>
        <p class="overline grey--text">发生了意外的错误</p>
        <p class="overline font-weight-bold grey--text">正在紧急修复中</p>
        <v-img src="img/rw.svg"></v-img>
        </v-card>
                </v-row>
          <v-row align="center" class="mx-auto white--text" justify="center">
        <v-btn small rounded outlined dark class="mt-3"color="cyan"><v-icon color="cyan">fa-angle-double-left</v-icon>回到过去</v-btn>
        </v-row>
        </v-col>
  </v-container>
</template>

<script>
export default {
    name: "errSystem"
};
</script>