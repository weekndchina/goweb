<template>
<div>
 <section id="hero">
<v-row no-gutters>
    <v-app-bar
      app
      height="48"
      dark
      color="transparent"
      hide-on-scroll
      style="background: linear-gradient(to right, #24243e, #141E30, #0f0c29);"
    >
    <v-tabs right height="48">
        <v-tab class="caption font-weight-bold" @click="$vuetify.goTo('#about-us')">关于我们</v-tab>
        <v-tab class="caption font-weight-bold"  @click="$vuetify.goTo('#about-intro')">RW介绍</v-tab>
    </v-tabs>
    <v-btn small color="deep-orange" outlined dense rounded class="ml-1" to='/login'>登陆</v-btn>
    <v-btn small color="indigo"  dense rounded class="ml-3">注册</v-btn>
    </v-app-bar>
       <v-card
            tile
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            width="100%"
            style="background: linear-gradient(to right, #24243e, #141E30, #0f0c29);"
          >

          <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                <v-col
                    class="white--text text-center"
                    cols="12"
                  >
                    <span
                      class="font-weight-light"
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    >
                      WELCOME TO
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      RWPLUS
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    dark
                    outlined
                    @click="$vuetify.goTo('#about-us')"
                  >
                    <v-icon dark>fa-angle-double-down</v-icon>
                  </v-btn>
                  </v-row>
                 </v-container>
                 </v-card>
        </v-row>

   </section>
      <section id="about-us">
       <v-card
            tile
            flat
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            width="100%"
          >
          </v-card>
      </section>


      <section id="about-intro">
      <v-row no-gutters style="background: linear-gradient(to right, #24243e, #141E30, #0f0c29);">
       <v-container dark class="text-center">
          <p class="headline  white--text">特性</p>
           <v-responsive
            class="mx-auto mb-12"
          >
            <v-divider dark class="mb-1"></v-divider>
          </v-responsive>
          <v-row>
            <v-col cols=6>
                <div class="text-right mb-3">
                <v-icon color="indigo">fa-tasks</v-icon>
                </div>
                <p class="text-uppercase  overline font-weight-medium text-right indigo--text">tasks</p>
                <p class="headline text-right white--text">高度定制日志搜索</p>
                <p class="caption text-right white--text ml-6">智能日志管理平台实现日志数据/业务数据的全生命周期智能管理，适用于运维监控、安全审计及业务数据分析等场景，实现客户数字化升级及智能监控。</p>
            </v-col>
            <v-col cols=6>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols=6>
            </v-col>
            <v-col cols=6>
                            <div class="text-left mb-3">
                <v-icon color="error">fa-robot</v-icon>
                </div>
                <p class="text-uppercase  overline font-weight-medium text-left error--text">Maintainer</p>
                <p class="headline text-left white--text">智能运维辅助</p>
                <p class="caption text-left white--text mr-6">智能日志管理平台实现日志数据/业务数据的全生命周期智能管理，适用于运维监控、安全审计及业务数据分析等场景，实现客户数字化升级及智能监控。</p>
            </v-col>
            <v-divider class="mb-1"></v-divider>
          </v-row>

                  <v-row>
            <v-col cols=6>
                <div class="text-right mb-3">
                <v-icon color="info">fa-user-astronaut</v-icon>
                </div>
                <p class="text-uppercase  overline font-weight-medium text-right info--text">convinient</p>
                <p class="headline text-right white--text">极致用户体验</p>
                <p class="caption text-right white--text ml-6">智能日志管理平台实现日志数据/业务数据的全生命周期智能管理，适用于运维监控、安全审计及业务数据分析等场景，实现客户数字化升级及智能监控。</p>
            </v-col>
            <v-col cols=6>
            </v-col>
          </v-row>

                  <v-row>
            <v-col cols=6>
            </v-col>
            <v-col cols=6>
            <div class="text-left mb-3">
                <v-icon color="orange">fa-outdent</v-icon>
                </div>
                <p class="text-uppercase  overline font-weight-medium text-left orange--text">Scaleble</p>
                <p class="headline text-left white--text">分布式水平扩展</p>
                <p class="caption text-left white--text mr-6">智能日志管理平台实现日志数据/业务数据的全生命周期智能管理，适用于运维监控、安全审计及业务数据分析等场景，实现客户数字化升级及智能监控。</p>
            </v-col>
            <v-divider class="mb-1"></v-divider>
          </v-row>

          </v-container>
          </v-row>
      </section>
      </div>
</template>


<script>
export default {
  data: () => ({
  }),
  methods: {
  }
}
</script>
