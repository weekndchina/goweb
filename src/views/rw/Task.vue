<template>
  <v-container grid-list-xl fluid>
  <v-row class="fill-height">
<v-col>
  <v-sheet height="64">
    <v-toolbar flat color="#f3f2f1">
    <v-btn  class="mr-3 caption" dark color="#212121" small dense @click.stop="addevent = true">
      添加任务
    </v-btn>

    <v-dialog
      v-model="addevent"
      max-width="600"
    >
  <v-card>
  <v-app-bar
    dense
    dark
    color="#212121"
    >
    <v-card-title class="subtitle-2 font-weight-bold">Task</v-card-title>
</v-app-bar>
<v-card-text>
<v-container>
<v-row>
  <v-col cols="12" md="1" sm="1" xs="1">
    <v-icon small right>fa-tag</v-icon>
  </v-col>
  <v-col cols="12" md="9" sm="9" xs="9">
    <v-text-field  dense hint="Task标题" label="title"
      class='caption'    persistent-hint ></v-text-field>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12" md="1" sm="1" xs="1">
    <v-icon small right>fa-level-up-alt</v-icon>
  </v-col>
  <v-col cols="12" md="5" sm="5" xs="5">
    <v-select class="caption" hint="Task等级Picker"
        label="level"  persistent-hint dense :items='["red","orange","info","success"]'></v-select>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12" md="1" sm="1" xs="1">
    <v-icon small right>fa-calendar</v-icon>
  </v-col>
  <v-col cols="12" md="5" sm="3" xs="3">
  <v-menu
        v-model="datemodel"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="datetime"
            readonly
            label="start date"
            v-bind="attrs"
            v-on="on"
            dense
            hint="Task开始日期Picker"
            persistent-hint
            class="caption"
          ></v-text-field>
        </template>
        <v-date-picker v-model="datetime" no-title></v-date-picker>
      </v-menu>
  </v-col>


  <v-col cols="12" md="3" sm="3" xs="3">
  <v-menu
        ref="menu"
        v-model="startmodel"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="starttime"
            class="caption"
            label="start time"
            hint="Task开始时间Picker"
            persistent-hint
            readonly
            v-bind="attrs"
            v-on="on"
            dense
          ></v-text-field>
        </template>
        <v-time-picker v-model="starttime" no-title v-if="startmodel"></v-time-picker>
      </v-menu>
  </v-col>

  <v-col cols="12" md="3" sm="3" xs="3">
  <v-menu
        ref="menu"
        v-model="endmodel"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            class="caption"
            v-model="endtime"
            label="end time"
            readonly
            v-bind="attrs"
            v-on="on"
            dense
            hint="Task结束时间Picker"
            persistent-hint
          ></v-text-field>
        </template>
        <v-time-picker v-model="endtime" no-title v-if="endmodel"></v-time-picker>
      </v-menu>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12" md="1" sm="1" xs="1">
    <v-icon small right>fa-clock</v-icon>
  </v-col>
  <v-col cols="12" md="5" sm="5" xs="5">
    <v-select  class="caption" hint="开始前多长时间提醒" label="alert"
          persistent-hint dense :items='["5min","30min","1hour","2hour"]'></v-select>
  </v-col>
</v-row>

</v-container>
</v-card-text>

<v-card-actions>
  <v-btn dense dark flat color="#212121" small @click="addevent = false" class="caption">保存</v-btn>
  <v-btn dense dark small color="#212121" small @click="addevent = false" class="caption">取消</v-btn>
  <v-spacer></v-spacer>
  <v-btn dense small outlined @click="addevent = false" class="caption">更多</v-btn>
</v-card-actions>
</v-card>
      </v-card>
    </v-dialog>



      <v-btn outlined class="mr-3 caption" color="grey darken-2" @click="setToday" small dense>
        today
      </v-btn>
      <v-btn fab text small color="grey darken-2" @click="prev" small dense>
        <v-icon small>fa-caret-left</v-icon>
      </v-btn>
      <v-btn fab text small color="grey darken-2" @click="next" small dense>
        <v-icon small>fa-caret-right</v-icon>
      </v-btn>
      <v-toolbar-title class="caption">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            outlined
            small
            dense
            color="grey darken-2"
            v-bind="attrs"
            v-on="on"
            class="caption"
          >
            <span>{{ typeToLabel[type] }}</span>
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list dense class="caption">
          <v-list-item @click="type = 'day'">
            <v-list-item-title>Day</v-list-item-title>
          </v-list-item>
          <v-list-item @click="type = 'week'">
            <v-list-item-title>Week</v-list-item-title>
          </v-list-item>
          <v-list-item @click="type = 'month'">
            <v-list-item-title>Month</v-list-item-title>
          </v-list-item>
          <v-list-item @click="type = '4day'">
            <v-list-item-title>4 days</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-sheet>
  <v-sheet height="600">
    <v-calendar
      ref="calendar"
      color="cyan"
      v-model="focus"
      :now="today"
      :type="type"
      :events="events"
      :event-color="getEventColor"
      @click:event="showEvent"
      @click:more="viewDay"
      @click:date="viewDay"
      @change="updateRange"
    ></v-calendar>
    <v-menu
      v-model="selectedOpen"
      :close-on-content-click="false"
      :activator="selectedElement"
      offset-x
    >
      <v-card
        color="grey lighten-4"
        min-width="350px"
        flat
      >
        <v-toolbar
          :color="selectedEvent.color"
          dark
        >
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <span v-html="selectedEvent.details"></span>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="secondary"
            @click="selectedOpen = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-sheet>
</v-col>
</v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      datemodel: false,
      datetime: null,
      endmodel: false,
      startmodel: false,
      starttime: null,
      endtime: null,
      addevent: false,
      today: '',
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [
      {
          name: '碧池叫我去吃饭',
          start: '2020-06-09 09:00',
          end: '2020-06-09 10:00',
          color: 'orange',
        },
      ],
    }),
    computed: {
      title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        switch (this.type) {
          case 'month':
            return `${startMonth} ${startYear}`
          case 'week':
          case '4day':
            return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
          case 'day':
            return `${startMonth} ${startDay} ${startYear}`
        }
        return ''
      },
      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC', month: 'long',
        })
      },
    },
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
      formatDate (a, withTime) {
        return withTime
          ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
          : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
      },
      updateRange({start, end}) {
          this.start = start
          this.end = end
      },
    },
}
</script>
