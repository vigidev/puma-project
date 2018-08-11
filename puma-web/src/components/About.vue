<template>
  <div id="about">
  <b-container class="mt-3">
    <b-breadcrumb :items="items"/>

      <b-row>
        <h2>About</h2>
      </b-row>
      
      <b-row class="mb-3">
        <b-col sm="12" md="6" v-if="about1">
          <h3>{{ about1.title }}</h3>
          <span v-html="about1.content"></span>
        </b-col>
        <b-col sm="12" md="6" v-if="about2">
          <h3>{{ about2.title }}</h3>
          <span v-html="about2.content"></span>
        </b-col>
      </b-row>
      <!-- End of Intro -->
      <b-row class="mb-3">
        <b-col>
          <b-row>
            <h2>Computing Dean and Head Study Programme</h2>
          </b-row>
          <b-row align-h="center">
            <b-col sm="12" md="4" v-for="dnh of deannhead" :key="dnh.name">
              <!-- <b-card-group deck class="mb-3"> -->
                <b-card :title="dnh.name"
                        :img-src="dnh.img"
                        :img-alt="dnh.name"
                        img-top
                        class="mb-3"
                        align="center">
                    <p class="card-text" style="text-align:center;">
                    {{dnh.name}}
                    </p>
                </b-card>
              <!-- </b-card-group> -->
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- End of Dean and HOSP -->
      <b-row class="mb-3">
        <b-col>
          <b-row>
            <h2>PUMA Computing Team</h2>
          </b-row>
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab title="Board of Director" active>
                <b-row>
                  <b-col v-show="responsive" md="6">
                    <b-img fluid src="../../static/bod.jpg" alt="BOD" />
                  </b-col>
                  <b-col>
                    <h4>Board of Director</h4>
                    <p></p>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Student Activity">
                <b-row>
                  <b-col v-show="responsive" md="6">
                    <b-img fluid src="../../static/sa.jpg" alt="SA" />
                  </b-col>
                  <b-col>
                    <h4>Student Activity Division</h4>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Student Development">
                <b-row>
                  <b-col v-show="responsive" md="6">
                    <b-img fluid src="../../static/sd.jpg" alt="SD" />
                  </b-col>
                  <b-col>
                    <h4>Student Development Division</h4>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Communication">
                <b-row>
                  <b-col v-show="responsive" md="6">
                    <b-img fluid src="../../static/com.jpg" alt="COMM"/>
                  </b-col>
                  <b-col>
                    <h4>Communication</h4>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
      <!-- End of PUMA Computing Team -->
      <b-row class="mb-3">
        <b-col>
          <b-row>
            <h2>PUMA Computing Web Development Team</h2>
          </b-row>
          <b-row>
            <b-col sm="12" md="3" v-for="dev of devs" :key="dev.name">
              <b-card img-src="http://via.placeholder.com/200x200"
                      :img-alt="dev.name"
                      img-top
                      :title="dev.name"
                      class="mb-3"
                      align="center"
                      footer-tag="footer"
              >
              <em slot="footer">
                <a :href="'https://linkedin.com/in/' + dev.in" class="in" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a> &nbsp; 
                <a :href="'https://github.com/' + dev.git" class="git" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
              </em>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- End of PUMA Computing Web Development Team -->
    </b-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        about1: {
          uid: '',
          title: '',
          content: ''
        },
        about2: {
          uid: '',
          title: '',
          content: ''
        },
        responsive: true,
        items: [{
          text: 'Home',
          to: { name: 'Home' }
        },
        {
          text: 'About'
        }],
        deannhead: [{
          name: 'Rila Mandala, Ph.D',
          desc: 'Dean of School of Computer Science',
          img: 'https://iqyoe.github.io/puma-web/assets/img/rila.png'
        },
        {
          name: 'Drs. Nur Hadisukmana, M.Sc.',
          desc: 'Head of Information Technology Study Programme',
          img: 'http://via.placeholder.com/200x200'
        },
        {
          name: 'Rikip Ginanjar, M.Sc.',
          desc: 'Head of Information System Study Programme',
          img: 'http://via.placeholder.com/200x200'
        }],
        devs: [{
          name: 'Rakha Viantoni',
          in: 'rakhaviantoni',
          git: 'rakhaviantoni'
        },
        {
          name: 'Muhammad Iqbal',
          in: 'iqballukman',
          git: 'iqyoe'
        },
        {
          name: 'Teuku Hilman',
          in: 'thilmanr',
          git: 'teukuatjeh'
        },
        {
          name: 'Handy Lim',
          in: 'handylim',
          git: 'handylim'
        }]
      }
    },
    name: 'About',
    created () {
      this.fetchAbout1()
      this.fetchAbout2()
    },
    methods: {
      fetchAbout1 () {
        const url = 'https://api.pucomputing.org/api/about/1'
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
          this.about1.uid = res.data.uid
          this.about1.title = res.data.title
          this.about1.content = res.data.content
        })
        .catch(err => console.log(err))
      },
      fetchAbout2 () {
        const url = 'https://api.pucomputing.org/api/about/2'
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
          this.about2.uid = res.data.uid
          this.about2.title = res.data.title
          this.about2.content = res.data.content
        })
        .catch(err => console.log(err))
      },
      picShow () {
        if (window.innerWidth > 720) {
          this.responsive = true
        } else {
          this.responsive = false
        }
      }
    }
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
    a.in {
      color: rgba(0, 0, 0, 1);
    }
    a.in:hover {
      color: rgba(0, 119, 181, 1);
    }
    a.git {
      color: rgba(0, 0, 0, 1);
    }
    a.git:hover {
      color: rgba(36, 41, 46, 1);
    }
</style>