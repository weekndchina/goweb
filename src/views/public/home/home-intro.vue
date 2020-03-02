<template>
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
                <br>
                 <p class="text-uppercase  mt-3 overline font-weight-medium text-right indigo--text">tasks</p>
                <v-chip color="red" text-color="white" small>COMING SOON</v-chip>
                </div>
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
</template>


<script>
  export default {
    name: 'HomeIntro',
  }
</script>