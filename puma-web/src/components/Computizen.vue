<template>
  <div id="computizen">
      <b-container class="mt-3">
        <b-breadcrumb :items="breads"/>

          <b-row class="mt-3 mb-3">
              <b-col sm="12" md="8" class="mb-3">

                  <b-row align-v="center">
                    <h2>Aspiration Box</h2>
                  </b-row>

                  <b-row align-v="start" class="mb-3">
                    <b-col sm="12" class="mb-3">
                      <b-form @reset="onReset">
                        <b-form-group>
                            <b-form-row inline>
                                <b-form-group id="Name"
                                                label="Name: "
                                                label-for="nm"
                                                description="*We'll never share your personal data to anyone else.<br>*Your name will be anonymous."
                                                readonly
                                                >
                                    <b-form-input id="inputName"
                                                type="text"
                                                v-model="form.name"
                                                required
                                                placeholder="Name">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="Major"
                                                label="Major: "
                                                label-for="ma"
                                                style="margin-left:1em;"
                                                >
                                    <b-form-input id="inputMajor"
                                                type="text"
                                                v-model="form.Major"
                                                required
                                                placeholder="CIT/CIS">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="Batch"
                                                label="Batch: "
                                                label-for="pn"
                                                style="margin-left:1em;"
                                                >
                                    <b-form-input id="inputBatch"
                                                type="text"
                                                v-model="form.batch"
                                                placeholder="Batch">
                                    </b-form-input>
                                </b-form-group>
                            </b-form-row>
                            <b-form-row>
                                <label for="">Subject: </label>
                                <b-form-input id="inputSubject"
                                            v-model="form.title"
                                            placeholder="Subject"
                                            >
                                </b-form-input>
                            </b-form-row>
                            <b-form-row>
                                <label for="">Message: </label>
                                <b-form-textarea id="inputMessage"
                                                    v-model="form.msg"
                                                    placeholder="Your Message Here"
                                                    :rows="4"
                                                    no-resize
                                                    >
                                    </b-form-textarea>
                            </b-form-row>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                      </b-form>
                    </b-col>
                  </b-row>
              </b-col>
              <b-col sm="12" md="4" class="mb-3">
                <b-row align-v="center" class="mb-3">
                  <b-col sm="12">
                    <b-card title="Downloadables">
                    <b-list-group>
                        <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                        <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                        <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                    </b-list-group>
                    </b-card>
                  </b-col>
                </b-row>
              </b-col>
          </b-row>

          <b-row class="mb-3">
              <b-col sm="12" class="mb-3">

                <b-row align-v="center">
                  <h2>Latest News</h2>
                </b-row>
                  
                <b-row class="mb-3">
                    <b-col sm="12">
                        <b-card>
                                <b-row class="mt-3">
                                <b-col sm="4" class="mb-3">
                                    <b-img fluid src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png" alt="cademic news" style="height:10em;" />
                                </b-col>
                                <b-col sm="8" class="mb-3">
                                    <h3>News 1</h3>
                                    <p>Lorem ipsum dolor sit amet, at quem dicant ceteros per, et per tota phaedrum, modo explicari mei cu. At eam iudicabit efficiantur comprehensam. Paulo laudem ne nec, cum eu nibh consul ullamcorper. Alii quando iriure at eam, probo offendit cu mei, tritani voluptua ex vis. Eam cu nisl option equidem.</p>
                                    <router-link :to="'/academic/article'" class="btn btn-primary">Read More</router-link>
                                </b-col>
                                </b-row>
                        </b-card>
                    </b-col>
                    </b-row>
                    
                    <b-row class="mb-3">
                    <b-col sm="12">
                        <b-card>
                                <b-row class="mt-3">
                                <b-col sm="4" class="mb-3">
                                    <b-img fluid src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png" alt="cademic news" style="height:10em;" />
                                </b-col>
                                <b-col sm="8" class="mb-3">
                                    <h3>News 2</h3>
                                    <p>Lorem ipsum dolor sit amet, at quem dicant ceteros per, et per tota phaedrum, modo explicari mei cu. At eam iudicabit efficiantur comprehensam. Paulo laudem ne nec, cum eu nibh consul ullamcorper. Alii quando iriure at eam, probo offendit cu mei, tritani voluptua ex vis. Eam cu nisl option equidem.</p>
                                    <router-link :to="'/academic/article'" class="btn btn-primary">Read More</router-link>
                                </b-col>
                                </b-row>
                        </b-card>
                    </b-col>
                    </b-row>

              </b-col>

              <b-col sm="12" class="mb-3">

                  <b-row align-v="center">
                      <h2>Latest Event</h2>
                  </b-row>

                  <b-row class="mb-3">
                    <b-col sm="12" class="mb-3">
                      <b-card img-src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png"
                              img-alt="event photo"
                              title="Event">
                            <p>description</p>
                            <a href="" class="btn btn-primary">Read More</a>
                      </b-card>
                    </b-col>
                  </b-row>

              </b-col>
          </b-row>

          <b-row class="mb-3">
              <h2>PUMA Audit</h2>
          </b-row>

          <b-row class="mb-3">
            <b-col sm="12" class="mb-3">
              <b-table responsive striped hover :items="cashs"></b-table>
            </b-col>
          </b-row>

      </b-container>
  </div>
</template>

<script>
const cash = [
    {No: 1, Date: '8-Jan-18', Description: 'Cash Batch 16', Income: 'IDR  180,000.00 ', Outcome: '', Balance: ' IDR  11,300,700.00 '},
    {No: 2, Date: '20-Jan-18', Description: 'Compcare', Income: ' IDR  190,000.00 ', Outcome: '', Balance: ' IDR  11,490,700.00 '},
    {No: 3, Date: '25-Jan-18', Description: 'Remaining from Compsphere 2017', Income: ' IDR  7,151,500.00 ', Outcome: '', Balance: ' IDR  18,642,200.00 '},
    {No: 4, Date: '25-Jan-18', Description: 'Capital For Compsphere 18', Income: ' IDR  5,000,000.00 ', Outcome: '', Balance: ' IDR  23,642,200.00 '},
    {No: 5, Date: '28-Jan-18', Description: 'Subsidi For Campus Activities', Income: ' ', Outcome: ' IDR  3,000,000.00 ', Balance: ' IDR  20,642,200.00 '}
]

export default {
  data () {
    return {
      cashs: cash,
      breads:
      [
        {
          text: 'Home',
          to: {name: 'Home'}
        },
        {
          text: 'Computizen'
        }
      ],
      form: [{
        name: '',
        batch: '',
        major: '',
        title: '',
        msg: ''
      }]
    }
  }
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
