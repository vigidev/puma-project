<template>
  <div>
      <b-container>
          <b-row><h2>Contact Us !</h2></b-row>
          <b-row>
              <b-col>
                  <h4>Address</h4>
                  <p>President University Campus <br> Jl. Ki Hajar Dewantara, Kota Jababeka, <br> Cikarang Baru, Bekasi 17550 - Indonesia</p>
                  <h4>Email</h4>
                  <p>puma.computing@president.ac.id</p>
              </b-col>
              <b-col>
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
              <h2>Tell Us !</h2>
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

<style>
h2{
    margin: 1.5em auto;
    font-size: 2.5em;
    padding-bottom: .2em;
    font-weight: bold;
    border-bottom: solid 5px;
    text-transform: uppercase;
}
</style>
