<template>
  <div id="footer">
      <b-container>
          <b-row>
              <b-col md="4">
                  <b-img fluid src="https://iqyoe.github.io/puma-web/assets/img/horizontal-logo-comp-lengkap-white.png" alt="Logo Computing" />
                  <h4>Address</h4>
                  <p>President University Campus <br> Jl. Ki Hajar Dewantara, Kota Jababeka, <br> Cikarang Baru, Bekasi 17550 - Indonesia</p>
              </b-col>
              <b-col>
                  <h4>Contact Us</h4>
                  <p style="margin-bottom:0;"><b>Email:</b> <a href="mailto:puma.computing@president.ac.id">puma.computing@president.ac.id</a></p>
                  <h4>Maps</h4>
                   <gmap-map
                        :center="center"
                        :zoom="17"
                        style="height: 25vh"
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
              <!-- <b-col cols="2">
                  <h4>Information</h4>
                  <ul>
                    <li class="inf"><router-link :to="'/'" class="" exact>Home</router-link></li>
                    <li class="inf"><router-link :to="'/event'" class="">Event</router-link></li>
                    <li class="inf"><router-link :to="'/academic'" class="">Academic</router-link></li>
                    <li class="inf"><router-link :to="'/about'" class="">About</router-link></li>
                    <li class="inf"><router-link :to="'/about'" class="">Computizen</router-link></li>
                    <li class="inf"><router-link :to="'/about'" class="">Contact Us</router-link></li>
                  </ul>
              </b-col> -->
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: {lat: -6.2849417, lng: 107.1705597},
      markers: [{
        position: {lat: -6.2849417, lng: 107.1705597}
      }]
    }
  }
}
</script>

<style scoped>
    #footer {
        background: #000411;
        margin-top: 3em;
        color: #fff;
    }
    h4 {
        font-weight: bold;
        margin-top: 1em;
        color: #fff;
    }
    ul{
        padding: 0;
    }
    li{
        list-style: none;
        text-decoration-style: none;
    }
    a{
        color: rgba(255, 255, 255, .5);
    }
    a:hover{
        color: rgba(255, 255, 255, .75);
        text-decoration: none;
    }
</style>
