<template>
  <div id="about">
  <b-container class="mt-3">
    <b-breadcrumb :items="items"/>

      <b-row>
        <h2>About</h2>
      </b-row>
      
      <b-row class="mb-3">
        <b-col sm="12" md="6">
          <h3>Computer Science? Computing?</h3>
          <p>Computer Science is the theoretical study and practical application of computation, including such topics as: design and maintenance of software systems, distributed systems, human-computer interaction, computational modeling, artificial intelligence, mobile computing, programming languages, image processing, and computer graphics. The use of information technology in almost every corner of human activity continue to create opportunities for our graduates.</p>
          <p>Computing (Computer Science Faculty in President University) consist of 3 major: Information Technology, Information System, and Visual Communicaton Design. These three faculty hold activities and events that helped by the student organization called PUMA (President University Major Association) that represent each major or faculty.</p>
        </b-col>
        <b-col sm="12" md="6">
          <h3>PUMA Computing?</h3>
          <p>PUMA Computing is a student organization under Faculty of Computing. It main responsibility is to hold activities and events that have impact to student in both academic and non-academic. Puma Computing's events and activities are focused especially for IT and IS students. There are annual events that held by PUMA Computing such as CSGO, Computing Social Project, Comsphere, etc.</p>
          <p>From 2016-2017, PUMA Computing has cabinet called Evolvere. This cabinet is lead by Muhammad Iqbal Lukman as Chairperson and Annasya Christia as Vice Chairperson. The cabinet is divided to 4 division, which are Board of Director, Student Development, Student Activities, and Communication. There are 31 person in Evolvere Cabinet.</p>
        </b-col>
      </b-row>
      <!-- End of Intro -->
      <b-row class="mb-3">
        <b-col>
          <h3>Computing Dean and Head Study Programme</h3>
          <b-row align-h="center">
            <b-col sm="12" md="4" v-for="dnh of deannhead" :key="dnh.name">
              <!-- <b-card-group deck class="mb-3"> -->
                <b-card :title="dnh.name"
                        :img-src="dnh.img"
                        :img-alt="dnh.name"
                        img-top
                        class="mb-3"
                        align="center">
                    <p class="card-text">
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
          <h3>PUMA Computing Team</h3>
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
          <h3>PUMA Computing Web Development Team</h3>
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
                <a style="font-size:1.5em;" :href="'https://linkedin.com/'.in" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a> <span>&nbsp;</span> 
                <a style="font-size:1.5em;" :href="'https://github.com/'.git" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
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
          name: 'Rakha Viantoni Prastya',
          in: 'rakhaviantoni',
          git: 'rakhaviantoni'
        },
        {
          name: 'Muhammad Iqbal',
          in: 'iqballukman',
          git: 'iqyoe'
        },
        {
          name: 'Teuku Hilman Revanda',
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
    methods: {
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
        margin: 1.5em auto;
        font-size: 2.5em;
        padding-bottom: .2em;
        font-weight: bold;
        border-bottom: solid 5px;
        text-transform: uppercase;
    }
</style>