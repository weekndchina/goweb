<template>
<v-container grid-list-xl>
<v-row>
<v-toolbar color="#f3f2f1" flat dense>
<v-btn small outlined dark color="#212121"> 新建目录</v-btn>
</v-toolbar>
</v-row>
<v-row class="fill-height">

  <v-col cols="4" md="4">
  <v-row>
    <v-subheader class="caption font-weight-bold">文件目录</v-subheader>
    </v-row>
    <v-divider class="mb-4"></v-divider>
  <v-row>
    <v-col cols="12">
  <v-treeview
    :active.sync="active"
    :open.sync="open"
    :items="items"
    activatable
    :load-children="fetchFiles"
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
  </v-row>
 </v-col>

  <v-col cols="4" md="4">
  <v-row>
    <v-subheader class="caption font-weight-bold">文件信息</v-subheader>
  </v-row>
  <v-divider class="mb-4"></v-divider>
  <v-row>
  <v-col cols="12">
  <div v-if="selected && selected.file != 'png'">
  <v-card height=200 outlined>
    <p class="overline">该文件格式不支持预览</p>
  </v-card>
  </div>
  <div v-else-if="!selected">
  <v-card height=200 outlined>
      <p class="overline">选择文件后即可查看信息</p>
  </v-card>
  </div>
  <div v-else="selected">
  <v-card height=200 outlined>
      <v-img src=""></v-img>
  </v-card>
  </div>
  </v-col>
  <v-col cols="3">
    <p class="overline text--right">文件名称</p>
  </v-col>
  <v-col cols="9">
  <div v-if="selected && selected.file != null">
  <p class="caption">{{ selected.name }}</p>
  </div>
  <div v-else="!selected">
  <p class="caption"></p>
  </div>
  </v-col>







  <v-col cols="3">
    <p class="overline">FUUID</p>
  </v-col>
  <v-col cols="9">
  <div v-if="selected">
  <p class="caption">{{ selected.fuuid }}</p>
  </div>
  <div v-else="!selected">
  <p class="caption"></p>
  </div>
  </v-col>
  <v-col cols="3">
    <p class="overline">域名配置</p>
  </v-col>
  <v-col cols="9">
    <v-text-field outlined hide-details dense class="caption" v-model="domain"></v-text-field>
  </v-col>
  <v-col cols="3">
    <p class="overline">文件URL</p>
  </v-col>
  <v-col cols="9">
    <div v-if="selected && selected.file != null">
    <p class="caption">{{ domain }}/{{ selected.name }}</p>
    </div>
    <div v-else>
    <p class="caption"></p>
    </div>
  </v-col>
  <v-col cols="3">
    <p class="overline">文件类型</p>
  </v-col>
  <v-col cols="9">
    <p class="caption">md</p>
  </v-col>
  <v-col cols="12">
  <v-btn outlined  small class="caption">下载文件</v-btn>
  <v-btn outlined  small class="ml-4 caption">删除文件</v-btn>
  </v-col>
  </v-row>
  </v-col>



    <v-col cols="4" md="4">
      <v-row>
        <v-subheader class="caption font-weight-bold">上传文件</v-subheader>

      </v-row>
      <v-divider class="mb-4"></v-divider>
      <v-row>
      <v-col cols="3">
        <p class="overline"> 上传路径 </p>
      </v-col>
      <v-col cols="9">
        <v-text-field hint="默认是当前路径" dense class="caption mt-0"
        persistent-hint placeholder="Directory"
        >
        </v-text-field>
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
      selection: [],
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
      active: [],
      items: [],
      domain: '',
    }),
    computed: {
      selected () {
        if (!this.active.length) return undefined
        const id = this.active[0]
        return this.items.find(item => item.id === id)
      },
    },
    mounted: function() {
      this.fetchFiles();
    },
    watch: {
      selected: 'weeknd',
    },
    methods: {
      fetchFiles() {
        let that = this;
        this.$http.get("/getFiles").then(res => {
          if (res.data.code === 200) {
            this.items = res.data.data.items;
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
  }
}
</script>


<style>
</style>
