<template>
<v-container grid-list-xl>
<v-row>
<v-toolbar color="#f3f2f1" flat dense>
<v-btn small outlined dark color="#212121"> 新建目录</v-btn>
</v-toolbar>
</v-row>
<v-row class="fill-height">
  <v-col cols="4" md="4">
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
  <v-col cols="4" md="4">
  <v-card
  flat
  class="mx-lg-auto"
  color="#f3f2f1"
  height="100%"
  >
</v-card>
  </v-col>
    <v-col cols="4" md="4">
      <v-row>
        <v-subheader class="caption font-weight-bold">上传文件</v-subheader>

      </v-row>
      <v-divider class="mb-4"></v-divider>
      <v-row>
      <v-col cols="3">
        <p class="overline">上传目录</p>
      </v-col>
      <v-col cols="9">
        <v-text-field hint="默认是当前路径" dense class="caption mt-0" persistent-hint placeholder="Directory"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
      <v-col cols="3">
      <p class="overline">上传文件</p>
      </v-col>
      <v-col cols="9">

    <v-file-input
    v-model="uploadfiles"
    :clearable="false"
    counter
    label="File input"
    class="caption mx-auto"
    multiple
    placeholder="请选择上传文件"
    outlined
    prepend-icon=""
    height="150"
    :show-size="1000"
  >
    <template v-slot:selection="{ index, text }">
      <v-chip
        v-if="index < 2"
        color="#212121"
        dark
        label
        small
      >
        {{ text }}
      </v-chip>

      <span
        v-else-if="index === 2"
        class="overline grey--text text--darken-3 mx-2"
      >
        +{{ files.length - 2 }} File(s)
      </span>
    </template>
  </v-file-input>
      </v-col>
      </v-row>
    </v-col>
</v-row>
</v-container>
</template>


<script>
export default {
  data: () => ({
      uploadfiles: [],
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
