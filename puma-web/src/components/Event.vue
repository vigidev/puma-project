<template>
  <div id="event">
    <b-container class="mt-3">
      <b-breadcrumb :items="breads"/>
      
        <b-row>
          <h2>Event</h2>
        </b-row>
        
        <b-row class="mb-3" v-if="events.length>0">
          <b-col v-for="event of events" 
                 :key="event.uid"
                 sm="12" md="4">
            <router-link :to="'/academic/article'">
            <b-card :img-src="event.poster"
                    :img-alt="event.title"
                    :title="event.title"
                    img-bottom
            >
            <p class="card-text">
              {{event.content}}
            </p>
            <!-- <a href="" class="btn btn-primary">Read More</a> -->
            </b-card>
            </router-link>
          </b-col>
        </b-row>
        
        <b-row class="mb-3" v-else>
          <b-col>No event found</b-col>
          <!-- <b-col v-for="ev of evs" 
                 :key="ev.id"
                 sm="12" md="4">
            <router-link :to="'/academic/article'">
            <b-card :img-src="ev.bg"
                    :img-alt="ev.t"
                    :title="ev.t"
                    img-bottom
            >
            <p class="card-text">
              {{ev.d}}
            </p>
            <a href="" class="btn btn-primary">Read More</a>
            </b-card>
            </router-link>
          </b-col> -->
        </b-row>
        
        <b-row>
          <h2>Activity</h2>
        </b-row>
        
        <b-row class="mb-3" v-if="activities.length>0">
          <b-col v-for="activity of activities" 
                 :key="activity.uid"
                 sm="12" md="4">
            <router-link :to="'/academic/article'">
            <b-card :img-src="activity.poster"
                    :img-alt="activity.title"
                    :title="activity.title"
                    img-bottom
            >
            <p class="card-text">
              {{activity.content}}
            </p>
            <!-- <a href="" class="btn btn-primary">Read More</a> -->
            </b-card>
            </router-link>
          </b-col>
        </b-row>

        <b-row class="mb-3" v-else>
          <b-col>No activity found</b-col>
          <!-- <b-col v-for="ev of evs" 
                 :key="ev.id"
                  sm="12" md="4">
            <router-link :to="'/academic/article'">
            <b-card :img-src="ev.bg"
                    :img-alt="ev.t"
                    :title="ev.t"
                    img-bottom
            >
            <p class="card-text">
              {{ev.d}}
            </p>
            <a href="" class="btn btn-primary">Read More</a>
            </b-card>
            </router-link>
          </b-col> -->
        </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      events: [],
      event: {
        uid: '',
        title: '',
        url: ''
      },
      activities: [],
      activity: {
        uid: '',
        title: '',
        url: ''
      },
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
  created () {
    this.fetchEvents()
    this.fetchActivities()
  },
  methods: {
    fetchEvents () {
      const url = 'https://api.pucomputing.org/api/events/6'
      fetch(url
        // {
        //   headers: new Headers({
        //     'Authorization': 'Bearer' +
        //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3B1bWEtYmFja2VuZFwvcHVibGljXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwNzY2NDYzLCJleHAiOjE1MzA3NzAwNjMsIm5iZiI6MTUzMDc2NjQ2MywianRpIjoiWHlSU2p3SUx0WFo5SHNoSCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.x14hrlPcG7O9KWkM1c0N46us9ZJBbicUBpKZyZVqoCU'
        //   })
        // }
      ).then(res => res.json())
      .then(res => {
        console.log(res.data)
        this.events = res.data
      })
      .catch(err => console.log(err))
    },
    fetchActivities () {
      const url = 'https://api.pucomputing.org/api/activities/6'
      fetch(url
        // {
        //   headers: new Headers({
        //     'Authorization': 'Bearer' +
        //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3B1bWEtYmFja2VuZFwvcHVibGljXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwNzY2NDYzLCJleHAiOjE1MzA3NzAwNjMsIm5iZiI6MTUzMDc2NjQ2MywianRpIjoiWHlSU2p3SUx0WFo5SHNoSCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.x14hrlPcG7O9KWkM1c0N46us9ZJBbicUBpKZyZVqoCU'
        //   })
        // }
      ).then(res => res.json())
      .then(res => {
        console.log(res.data)
        this.activities = res.data
      })
      .catch(err => console.log(err))
    }
  },
  name: 'Event'
}
</script>

<style scoped>
  h2 {
    background-color: #ced4da;
    padding: 0.5em;
    margin: 1em auto;
    font-weight: bold;
    text-transform: uppercase;
  }
    .card {
      margin: 0 0 1em 0;
    }
    /* #Event {
        margin-top: 3em;
    }
    #Aktivitas {
        margin-top: 3em;
    } */
</style>
