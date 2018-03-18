<template>
  <b-container fluid>
    <b-container style="margin-top:1%;">
      <b-breadcrumb :items="breads"/>
    </b-container>
      <div id="Event">
        <b-row>
          <h2>Events</h2>
        </b-row>
        <b-row>
          <b-col v-for="ev of evs" 
                 :key="ev.id">
            <b-card :img-src="ev.bg"
                    :img-alt="ev.t"
                    :title="ev.t"
                    style="width:30vw;"
            >
            <p class="card-text">
              {{ev.d}}
            </p>
            </b-card>
          </b-col>
        </b-row>
      </div>

      <div id="Aktivitas">
        <b-row>
          <h2>Activity</h2>
        </b-row>
        <b-row>
          <b-col v-for="ev of evs" 
                 :key="ev.id">
            <b-card :img-src="ev.bg"
                    :img-alt="ev.t"
                    :title="ev.t"
                    style="width:30vw;"
            >
            <p class="card-text">
              {{ev.d}}
            </p>
            </b-card>
          </b-col>
        </b-row>
      </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      breads:
      [
        {
          text: 'Home',
          to: {name: 'Home'}
        },
        {
          text: 'Event'
        }
      ],
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
  },
  name: 'Event'
}
</script>

<style scoped>
h2{
    margin: auto;
    margin-bottom: 1em;
    font-size: 2.5em;
    padding-bottom: .2em;
    font-weight: bold;
    border-bottom: solid 5px;
    text-transform: uppercase;
}
.card{
  margin-bottom: 1em;
}
#Event{
    margin-top: 3em;
}
#Aktivitas{
    margin-top: 3em;
}
</style>
