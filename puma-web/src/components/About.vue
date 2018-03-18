<template>
  <div id="about">
  <b-container style="margin-top:1%;">
    <b-breadcrumb :items="items"/>
      <b-row>
        <h2>About</h2>
      </b-row>
      <b-row>
        <b-col>
          <h3>Computer Science? Computing?</h3>
          <p>Computer Science is the theoretical study and practical application of computation, including such topics as: design and maintenance of software systems, distributed systems, human-computer interaction, computational modeling, artificial intelligence, mobile computing, programming languages, image processing, and computer graphics. The use of information technology in almost every corner of human activity continue to create opportunities for our graduates.</p>
          <p>Computing (Computer Science Faculty in President University) consist of 3 major: Information Technology, Information System, and Visual Communicaton Design. These three faculty hold activities and events that helped by the student organization called PUMA (President University Major Association) that represent each major or faculty.</p>
        </b-col>
        <b-col>
          <h3>PUMA Computing?</h3>
          <p>PUMA Computing is a student organization under Faculty of Computing. It main responsibility is to hold activities and events that have impact to student in both academic and non-academic. Puma Computing's events and activities are focused especially for IT and IS students. There are annual events that held by PUMA Computing such as CSGO, Computing Social Project, Comsphere, etc.</p>
          <p>From 2016-2017, PUMA Computing has cabinet called Evolvere. This cabinet is lead by Muhammad Iqbal Lukman as Chairperson and Annasya Christia as Vice Chairperson. The cabinet is divided to 4 division, which are Board of Director, Student Development, Student Activities, and Communication. There are 31 person in Evolvere Cabinet.</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3>Computing Dean and Head Study Programme</h3>
          <b-row align-h="center">
            <b-card-group deck class="mb-3">
                <b-card title="Rila Mandala, Ph.D"
                        img-src="https://iqyoe.github.io/puma-web/assets/img/rila.png"
                        img-alt="Rila Mandala, Ph.D"
                        img-top
                        tag="dean"
                        style="max-width: 20rem;"
                        class="mb-1"
                        align="center">
                    <p class="card-text">
                    Dean of School of Computer Science
                    </p>
                </b-card>
            </b-card-group>
          </b-row>
          <b-row align-h="center">
            <b-card-group deck class="mb-2">
                <b-card title="Drs. Nur Hadisukmana, M.Sc."
                        img-src="http://via.placeholder.com/200x200"
                        img-alt="Drs. Nur Hadisukmana, M.Sc."
                        img-top
                        tag="dean"
                        style="max-width: 20rem;"
                        align="center">
                    <p class="card-text">
                    Head of Information Technology Study Programme
                    </p>
                </b-card>
                <b-card title="Rikip Ginanjar, M.Sc."
                        img-src="http://via.placeholder.com/200x200"
                        img-alt="Rikip Ginanjar, M.Sc."
                        img-top
                        tag="dean"
                        style="max-width: 20rem;"
                        align="center">
                    <p class="card-text">
                    Head of Information System Study Programme
                    </p>
                </b-card>
            </b-card-group>
          </b-row>
        </b-col>
      </b-row>
  </b-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [{
          text: 'Home',
          to: { name: 'Home' }
        },
        {
          text: 'About'
        }]
      }
    },
    name: 'About'
  }
</script>

<style scoped>
    h2 {
        margin: auto;
        margin-bottom: 1em;
        font-size: 2.5em;
        padding-bottom: .2em;
        font-weight: bold;
        border-bottom: solid 5px #000;
        text-transform: uppercase;
    }
</style>