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
