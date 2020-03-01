<template>
 <v-container grid-list-xl fluid>
 <v-row>
    <v-col cols="3" md=3 sm=6 xs=6>
          <v-card
            height="80"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
            <v-card class="mt-n4 ml-6" height="60" color="deep-orange">
             <v-avatar
                size="60"
                color="cyan"
              >
              <v-icon dark>fa-tasks</v-icon>
              </v-avatar>
              </v-card>
              <div>
              <v-card-text class="caption font-weight-bold pt-2">
                    待开发功能/Tasks Num
                </v-card-text>
                <v-card-subtitle class="pt-0 font-weight-bold"
                >55/个
                </v-card-subtitle>
              </div>
            </div>
          </v-card>
    </v-col>
    <v-col cols="3" md=3 sm=6 xs=6>
              <v-card
            height="80"

          >
            <div class="d-flex flex-no-wrap justify-space-between">
            <v-card class="mt-n4 ml-6" height="60" color="deep-orange">
             <v-avatar
                size="60"
                color="teal"
              >
              <v-icon dark>fa-user-friends</v-icon>
              </v-avatar>
              </v-card>
              <div>
              <v-card-text class="caption font-weight-bold pt-2">
                    新增用户数/Users Num
                </v-card-text>
                <v-card-subtitle class="pt-0 font-weight-bold"
                >+20
                </v-card-subtitle>
              </div>
            </div>
          </v-card>
    </v-col>
    <v-col cols="3" md=3 sm=6 xs=6>
              <v-card
            height="80"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
           <v-card class="mt-n4 ml-6" height="60" color="deep-orange">
             <v-avatar
                size="60"
                color="orange"
              >
              <v-icon dark>fa-bug</v-icon>
              </v-avatar>
              </v-card>
              <div>
              <v-card-text class="caption font-weight-bold pt-2">
                    待处理BUG数/Bugs Num
                </v-card-text>
                <v-card-subtitle class="pt-0 font-weight-bold"
                >5
                </v-card-subtitle>
              </div>
            </div>
          </v-card>
    </v-col>
    <v-col cols="3" md=3 sm=6 xs=6>
           <v-card
            height="80"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
            <v-card class="mt-n4 ml-6" height="60" color="indigo">
             <v-avatar
                size="60"
              >
              <v-icon dark>fa-blog</v-icon>
              </v-avatar>
              </v-card>
              <div>
              <v-card-text class="caption font-weight-bold pt-2">
                    社区文章推送/Texts Num
                </v-card-text>
                <v-card-subtitle class="pt-0 font-weight-bold"
                >10
                </v-card-subtitle>
              </div>
            </div>
          </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {}
}
</script>