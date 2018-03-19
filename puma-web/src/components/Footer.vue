<template>
  <div id="f">
      <b-container fluid>
          <b-row>
              <b-col sm="12" md="3">
                  <img src="https://iqyoe.github.io/puma-web/assets/img/horizontal-logo-comp-lengkap-white.png" alt="Logo Computing" style="max-width:20em;">
                  <h4>Address</h4>
                  <p>President University Campus <br> Jl. Ki Hajar Dewantara, Kota Jababeka, <br> Cikarang Baru, Bekasi 17550 - Indonesia</p>
              </b-col>
              <b-col sm="12" md="3">
                  <h4>Contact Us</h4>
                  <p style="font-weight:bold;margin-bottom:0;">Email</p>
                  <p>puma.computing@president.ac.id</p>
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
              <b-col sm="12" md="3">
                  <h4>Information</h4>
                  <ul>
                    <li class="inf"><router-link :to="'/'" class="" exact>Home</router-link></li>
                    <li class="inf"><router-link :to="'/event'" class="">Event</router-link></li>
                    <li class="inf"><router-link :to="'/academic'" class="">Academic</router-link></li>
                    <li class="inf"><router-link :to="'/about'" class="">About</router-link></li>
                    <li class="inf"><router-link :to="'/about'" class="">Computizen</router-link></li>
                    <li class="inf"><router-link :to="'/about'" class="">Contact Us</router-link></li>
                  </ul>
              </b-col>
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
    #f {
        background: #000411;
        margin-top: 3em;
        color: #fff;
    }
    h4 {
        font-weight: bold;
        margin-top: 1em;
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
