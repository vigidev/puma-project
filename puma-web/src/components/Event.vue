<template>
  <b-container fluid>
      <div id="Event" :style="eventStyle">
          <b-container>
            <h2>Events</h2>
          <b-row v-for="ev of evs" :key="ev.id" v-if="ev.id<=2">
              <b-card :title="ev.t"
                      style="max-width:30vw;"
              >
                  <p>{{ev.d}}</p>
                  <a v-on:click="changeEventBg(ev.id)"><b-btn variant="primary">Test</b-btn></a>
              </b-card>
          </b-row>
          </b-container>
      </div>
      <div id="Aktivitas" :style="activityStyle">
           <b-container>
            <h2>Events</h2>
          <b-row v-for="ev of evs" :key="ev.id" v-if="ev.id<=2">
              <b-card :title="ev.t"
                      style="max-width:30vw;"
              >
                  <p>{{ev.d}}</p>
                  <a v-on:click="changeActivityBg(ev.id)"><b-btn variant="primary">Test</b-btn></a>
              </b-card>
          </b-row>
          </b-container>
      </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      eventStyle: {
        background: 'url("https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png")',
        padding: '.5em'
      },
      activityStyle: {
        background: 'url("https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png")',
        padding: '.5em'
      },
      evs: [
        {
          id: 1,
          t: 'Event 1',
          d: 'Lorem ipsum dolor sit amet, at quem dicant ceteros per, et per tota phaedrum, modo explicari mei cu. At eam iudicabit efficiantur comprehensam. Paulo laudem ne nec, cum eu nibh consul ullamcorper. Alii quando iriure at eam, probo offendit cu mei, tritani voluptua ex vis. Eam cu nisl option equidem.',
          bg: 'https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png'
        },
        {
          id: 2,
          t: 'Event 2',
          d: 'Lorem ipsum dolor sit amet, at quem dicant ceteros per, et per tota phaedrum, modo explicari mei cu. At eam iudicabit efficiantur comprehensam. Paulo laudem ne nec, cum eu nibh consul ullamcorper. Alii quando iriure at eam, probo offendit cu mei, tritani voluptua ex vis. Eam cu nisl option equidem.',
          bg: 'https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png'
        },
        {
          id: 3,
          t: 'Event 3',
          d: 'Lorem ipsum dolor sit amet, at quem dicant ceteros per, et per tota phaedrum, modo explicari mei cu. At eam iudicabit efficiantur comprehensam. Paulo laudem ne nec, cum eu nibh consul ullamcorper. Alii quando iriure at eam, probo offendit cu mei, tritani voluptua ex vis. Eam cu nisl option equidem.',
          bg: 'https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png'
        },
        {
          id: 4,
          t: 'Event 4',
          d: 'Lorem ipsum dolor sit amet, at quem dicant ceteros per, et per tota phaedrum, modo explicari mei cu. At eam iudicabit efficiantur comprehensam. Paulo laudem ne nec, cum eu nibh consul ullamcorper. Alii quando iriure at eam, probo offendit cu mei, tritani voluptua ex vis. Eam cu nisl option equidem.',
          bg: 'https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png'
        }
      ]
    }
  },
  methods: {
    changeEventBg: function (num) {
      switch (num % 2) {
        case 0:
          this.eventStyle.background = 'url("https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png")'
          break
        case 1:
          this.eventStyle.background = 'url("https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png")'
          break
      }
    },
    changeActivityBg: function (num) {
      switch (num % 2) {
        case 0:
          this.activityStyle.background = 'url("https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png")'
          break
        case 1:
          this.activityStyle.background = 'url("https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png")'
          break
      }
    }
  },
  name: 'Event'
}
</script>

<style scoped>
h2{
    margin-bottom: 1em;
    color: #fff;
    font-size: 2.5em;
    padding-bottom: .2em;
    font-weight: bold;
    border-bottom: solid 5px #fff;
    text-transform: uppercase;
}
#Event{
    margin-top: 3em;
}
#Aktivitas{
    margin-top: 3em;
}
</style>
