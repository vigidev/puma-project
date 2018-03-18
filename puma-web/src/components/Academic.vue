<template>
  <b-container>
          <b-breadcrumb :items="breads"/>
      <b-row>
          <b-col>
              <b-card title="IT Information">
                  <b-list-group>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                  </b-list-group>
              </b-card>
          </b-col>
          <b-col>
              <b-card title="IS Information">
                  <b-list-group>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                  </b-list-group>
              </b-card>
          </b-col>
      </b-row>
      <div>
          <b-row>
              <h2>Academic News</h2>
          </b-row>
          <b-row>
              <b-card>
                  <div class="card-body">
                      <b-row>
                        <b-col style="padding-right:0;">
                            <img src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png" alt="" style="height:10em;">
                        </b-col>
                        <b-col cols="8" style="padding-left:0;">
                            <h3>News 1</h3>
                            <p>Lorem ipsum dolor sit amet, at quem dicant ceteros per, et per tota phaedrum, modo explicari mei cu. At eam iudicabit efficiantur comprehensam. Paulo laudem ne nec, cum eu nibh consul ullamcorper. Alii quando iriure at eam, probo offendit cu mei, tritani voluptua ex vis. Eam cu nisl option equidem.</p>
                        </b-col>
                      </b-row>
                  </div>
              </b-card>
          </b-row>
      </div>
  </b-container>
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
          text: 'Academic'
        }
      ]
    }
  },
  name: 'Academic'
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
