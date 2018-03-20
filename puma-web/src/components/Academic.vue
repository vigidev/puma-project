<template>
  <div id="academic">
    <b-container class="mt-3">
      <b-breadcrumb :items="breads"/>
      
        <b-row>
          <h2>Academic</h2>
        </b-row>
        
        <b-row class="mb-3">
          <b-col class="mb-3">
              <b-card title="IT Information">
                  <b-list-group>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                  </b-list-group>
              </b-card>
          </b-col>
          <b-col class="mb-3">
              <b-card title="IS Information">
                  <b-list-group>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                      <b-list-group-item><a href="/">Downloadable Item</a></b-list-group-item>
                  </b-list-group>
              </b-card>
          </b-col>
        </b-row>
      
        <b-row>
            <h2>News</h2>
        </b-row>

        <b-row class="mb-3">
          <b-col sm="12">
            <b-card>
                <div class="card-body">
                    <b-row class="mb-3">
                      <b-col sm="4" class="mb-3">
                          <b-img fluid src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png" alt="cademic news" style="height:10em;" />
                      </b-col>
                      <b-col sm="8" class="mb-3">
                          <h3>Acad News 1</h3>
                          <p>Lorem ipsum dolor sit amet, at quem dicant ceteros per, et per tota phaedrum, modo explicari mei cu. At eam iudicabit efficiantur comprehensam. Paulo laudem ne nec, cum eu nibh consul ullamcorper. Alii quando iriure at eam, probo offendit cu mei, tritani voluptua ex vis. Eam cu nisl option equidem.</p>
                          <router-link :to="'/academic/article'" class="btn btn-primary">Read More</router-link>
                      </b-col>
                    </b-row>
                </div>
            </b-card>
          </b-col>
        </b-row>
          
        <b-row class="mb-3">
          <b-col sm="12">
            <b-card>
                <div class="card-body">
                    <b-row class="mb-3">
                      <b-col sm="4" class="mb-3">
                          <b-img fluid src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png" alt="cademic news" style="height:10em;" />
                      </b-col>
                      <b-col sm="8" class="mb-3">
                          <h3>Acad News 2</h3>
                          <p>Lorem ipsum dolor sit amet, at quem dicant ceteros per, et per tota phaedrum, modo explicari mei cu. At eam iudicabit efficiantur comprehensam. Paulo laudem ne nec, cum eu nibh consul ullamcorper. Alii quando iriure at eam, probo offendit cu mei, tritani voluptua ex vis. Eam cu nisl option equidem.</p>
                          <router-link :to="'/academic/article'" class="btn btn-primary">Read More</router-link>
                      </b-col>
                    </b-row>
                </div>
            </b-card>
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
        margin: 1.5em auto;
        font-size: 2.5em;
        padding-bottom: .2em;
        font-weight: bold;
        border-bottom: solid 5px;
        text-transform: uppercase;
    }
</style>
