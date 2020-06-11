<template>
<v-container grid-list-xl>
<v-row>
<v-toolbar color="#f3f2f1" flat dense>
<v-btn small outlined dark color="#212121"> 新建目录</v-btn>
</v-toolbar>
</v-row>
<v-row class="fill-height">
  <v-col cols="3" md="3">
  <v-treeview
    v-model="tree"
    :open="open"
    :items="items"
    activatable
    item-key="name"
    open-on-click
    class="caption"
    >
  <template v-slot:prepend="{ item, open }">
    <v-icon v-if="!item.file" small>
      {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
    </v-icon>
    <v-icon v-else small>
      {{ files[item.file] }}
    </v-icon>
   </template>
  </v-treeview>
 </v-col>
  <v-col cols="3" md="6">
  <v-card
  flat
  class="mx-lg-auto"
  color="white"
  height="100%"
  >
  <v-card-subtitle class="pb-0 mb-4 black--text subtitle-2">README.md</v-card-subtitle>
  <v-divider></v-divider>
  <v-card-text>
    <h1 class="headline font-weight-bold">rwplus</h1>
  </v-card-text>
</v-card>
  </v-col>
</v-row>
</v-container>
</template>


<script>
export default {
  data: () => ({
      open: ['public'],
      files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-json',
        md: 'mdi-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel',
      },
      tree: [],
      items: [
        {
          name: '.git',
        },
        {
          name: 'node_modules',
        },
        {
          name: 'public',
          children: [
            {
              name: 'static',
              children: [{
                name: 'logo.png',
                file: 'png',
              }],
            },
            {
              name: 'favicon.ico',
              file: 'png',
            },
            {
              name: 'index.html',
              file: 'html',
            },
          ],
        },
        {
          name: '.gitignore',
          file: 'txt',
        },
        {
          name: 'babel.config.js',
          file: 'js',
        },
        {
          name: 'package.json',
          file: 'json',
        },
        {
          name: 'README.md',
          file: 'md',
        },
        {
          name: 'vue.config.js',
          file: 'js',
        },
        {
          name: 'yarn.lock',
          file: 'txt',
        },
      ],
    }),
  }
</script>


<style>
</style>
