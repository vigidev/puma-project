<template>
  <div id="academic">
    <b-container class="mt-3">
      <b-breadcrumb :items="breads" />

      <b-row>
        <h2>Academic</h2>
      </b-row>

      <b-row class="mb-3">
        <b-col class="mb-3">
          <b-card title="IT Information" v-if="it_downloadables.length>0">
            <b-list-group v-for="it_downloadable in it_downloadables" :key="it_downloadable.uid">
              <b-list-group-item>
                <a :href=it_downloadable.url>{{ it_downloadable.title }}</a>
              </b-list-group-item>
            </b-list-group>
          </b-card>
          <b-card title="IT Information" v-else>
            <b-list-group>
              No downloadable item found
            </b-list-group>
          </b-card>
        </b-col>
        <b-col class="mb-3">
          <b-card title="IS Information" v-if="is_downloadables.length>0">
            <b-list-group v-for="is_downloadable in is_downloadables" :key="is_downloadable.uid">
              <b-list-group-item>
                <a :href=is_downloadable.url>{{ is_downloadable.title }}</a>
              </b-list-group-item>
            </b-list-group>
          </b-card>
          <b-card title="IS Information" v-else>
            <b-list-group>
              No downloadable item found
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <h2>News</h2>
      </b-row>

      <b-row class="mb-3" v-if="academics.length>0">
        <b-col sm="12" v-for="academic in academics" :key="academic.uid">
          <router-link :to="'/academic/article'">
            <b-card>
              <b-row class="mt-3">
                <b-col sm="4" class="mb-3">
                  <b-img fluid src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png" :alt=academic.title style="height:10em;"
                  />
                </b-col>
                <b-col sm="8" class="mb-3">
                  <h3>{{ academic.title }}</h3>
                  <p>{{ academic.content }}</p>
                  <!-- <router-link :to="'/academic/article'" class="btn btn-primary">Read More</router-link> -->
                </b-col>
              </b-row>
            </b-card>
          </router-link>
        </b-col>
      </b-row>

      <b-row class="mb-3" v-else>
        <b-col>No academic news found</b-col>
        <!-- <b-col sm="12">
          <router-link :to="'/academic/article'">
            <b-card>
              <b-row class="mt-3">
                <b-col sm="4" class="mb-3">
                  <b-img fluid src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png" alt="cademic news" style="height:10em;"
                  />
                </b-col>
                <b-col sm="8" class="mb-3">
                  <h3>Acad News 2</h3>
                  <p>Lorem ipsum dolor sit amet, at quem dicant ceteros per, et per tota phaedrum, modo explicari mei cu. At
                    eam iudicabit efficiantur comprehensam. Paulo laudem ne nec, cum eu nibh consul ullamcorper. Alii quando
                    iriure at eam, probo offendit cu mei, tritani voluptua ex vis. Eam cu nisl option equidem.</p>
                  <router-link :to="'/academic/article'" class="btn btn-primary">Read More</router-link>
                </b-col>
              </b-row>
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
      it_downloadables: [],
      it_downloadable: {
        uid: '',
        title: '',
        url: ''
      },
      is_downloadables: [],
      is_downloadable: {
        uid: '',
        title: '',
        url: ''
      },
      academics: [],
      academic: {
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
          text: 'Academic'
        }
      ]
    }
  },
  created () {
    this.fetchITDownloadables()
    this.fetchISDownloadables()
    this.fetchAcademics()
  },
  methods: {
    fetchITDownloadables () {
      const url = 'https://api.pucomputing.org/api/it_downloadables/10'
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
        this.it_downloadables = res.data
      })
      .catch(err => console.log(err))
    },
    fetchISDownloadables () {
      const url = 'https://api.pucomputing.org/api/is_downloadables/10'
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
        this.is_downloadables = res.data
      })
      .catch(err => console.log(err))
    },
    fetchAcademics () {
      const url = 'https://api.pucomputing.org/api/academic_news/5'
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
        this.academics = res.data
      })
      .catch(err => console.log(err))
    }
  },
  name: 'Academic'
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
</style>
