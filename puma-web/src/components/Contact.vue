<template>
  <div id="contact">
      <b-container class="mt-3">
      <b-breadcrumb :items="breads" />

          <b-row>
            <h2>Contact</h2>
          </b-row>

          <b-row class="mb-3">
              <b-col sm="12" md="4">
                <h4>Address</h4>
                  <p>President University Campus <br> Jl. Ki Hajar Dewantara, Kota Jababeka, <br> Cikarang Baru, Bekasi 17550 - Indonesia</p>
                <h4>Email</h4>
                  <p><a href="mailto:puma.computing@president.ac.id">puma.computing@president.ac.id</a></p>
                  <h4>Social Media</h4>
                  <a href="https://www.youtube.com/channel/UCTuJBY7PYu_6-Tin6SEAFhA" class="sm" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" size="lg" /></a>
                  <a href="https://facebook.com/pumacomputing/" class="sm" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" size="lg" /></a>
                  <a href="https://instagram.com/pucomputing/" class="sm" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" size="lg" /></a>
                  <a href="http://line.me/ti/p/~pucomputing" class="sm" target="_blank"><font-awesome-icon :icon="['fab', 'line']" size="lg" /></a>
                  <!-- <a href="" class="sm"><font-awesome-icon :icon="['fab', 'ask']" size="lg" /></a> -->
              </b-col>

              <b-col sm="12" md="8">
                  <h4>Maps</h4>
                   <gmap-map
                        :center="center"
                        :zoom="16"
                        style="height: 40vh"
                    >
                        <gmap-marker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                        ></gmap-marker>
                    </gmap-map>
              </b-col>
          </b-row>
          
          <b-row>
              <h2>Tell Us</h2>
          </b-row>
          
          <b-row align-h="center">
            <b-col class="mb-3">
                <b-form @reset="onReset">
                    <b-form-group>
                        <b-form-row inline>
                            <b-form-group id="Name"
                                            label="Name: "
                                            label-for="nm"
                                            description="We'll never share your personal data to anyone else."
                                            >
                                <b-form-input id="inputName"
                                            type="text"
                                            v-model="form.name"
                                            required
                                            placeholder="Name">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group id="Email"
                                            label="Email: "
                                            label-for="em"
                                            style="margin-left:1em;"
                                            >
                                <b-form-input id="inputEmail"
                                            type="email"
                                            v-model="form.email"
                                            required
                                            placeholder="Email">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group id="Phone"
                                            label="Phone Number: "
                                            label-for="pn"
                                            style="margin-left:1em;"
                                            >
                                <b-form-input id="inputPhone"
                                            type="text"
                                            v-model="form.phone"
                                            placeholder="Phone Number">
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
    </b-container>
  </div>
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
          text: 'Contact'
        }
      ],
      center: {lat: -6.2849417, lng: 107.1705597},
      markers: [{
        position: {lat: -6.2849417, lng: 107.1705597}
      }],
      form: {
        name: '',
        email: '',
        phone: '',
        title: '',
        msg: ''
      }
    }
  },
  methods: {
    onReset (evt) {
      evt.preventDefault()
      this.form.name = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.msg = ''
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
    .sm{
        font-size: 2em;
        margin: 0 .5em; 
        color: rgba(0, 0, 0, 0.5);
    }
    .sm:hover{
        color: rgba(0, 0, 0, 0.7);
    }
</style>
