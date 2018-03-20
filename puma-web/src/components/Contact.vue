<template>
  <div id="contact">
      <b-container class="mt-3">
      <b-breadcrumb :items="breads" />

          <b-row>
            <h2>Contact</h2>
          </b-row>

          <b-row class="mb-3">
              <b-col cols="4">
                  <h4>Address</h4>
                  <p>President University Campus <br> Jl. Ki Hajar Dewantara, Kota Jababeka, <br> Cikarang Baru, Bekasi 17550 - Indonesia</p>
                  <h4>Email</h4>
                  <p>puma.computing@president.ac.id</p>
                  <h4>Social Media</h4>
                  <a href="" class="sm"><font-awesome-icon :icon="['fab', 'youtube']"></font-awesome-icon></a>
                  <a href="" class="sm"><font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon></a>
                  <a href="" class="sm"><font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon></a>
                  <a href="" class="sm"><font-awesome-icon :icon="['fab', 'line']"></font-awesome-icon></a>
                  <a href="" class="sm"><font-awesome-icon :icon="['fab', 'ask']"></font-awesome-icon></a>
              </b-col>
              <b-col cols="8">
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
          
              <b-row class="mb-3" align-h="center">
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
        margin: 1.5em auto;
        font-size: 2.5em;
        padding-bottom: .2em;
        font-weight: bold;
        border-bottom: solid 5px;
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
