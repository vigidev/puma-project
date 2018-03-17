<template>
  <div id="car">

    <b-carousel id="carousel1"
                style=""
                controls
                indicators
                background="#ababab"
                :interval="3000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First"
                        text="Lorem ipsum dolor sit amet, vim graeci delicatissimi in, usu ei percipitur delicatissimi, at everti insolens pri. Ut veniam conceptam."
                        img-src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide caption="Title"
                        text="Lorem ipsum dolor sit amet, vim graeci delicatissimi in, usu ei percipitur delicatissimi, at everti insolens pri. Ut veniam conceptam."
                        img-src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png"
      ></b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
    </p>
    
    <b-container style="margin-top:3em;">
        <b-row class="title">
            <h2>NEWS RELEASE</h2>
        </b-row>
        <b-row>
            <b-col v-for="item of items" :key="item.id" v-if="item.id>=ne && item.id<ne+4">
                <b-card title="News"
                        :img-src=item.src
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 30rem;"
                        class="mb-2">
                    <p class="card-text">
                    {{item.pa}}
                    </p>
                    <b-button href="#" variant="primary">Read More</b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>

    <b-container style="margin-top:3em;">
      <b-row>
        <h2>Computing Events</h2>
      </b-row>
        <b-row>
          <b-col>
            <b-card overlay
                    img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                    img-alt="Image"
            ></b-card>
          </b-col>
          <b-col>
            <b-card overlay
                    img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                    img-alt="Image"
            ></b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card overlay
                    img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                    img-alt="Image"
            ></b-card>
          </b-col>
          <b-col>
            <b-card overlay
                    img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                    img-alt="Image"
            ></b-card>
          </b-col>
          <b-col>
            <b-card overlay
                    img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                    img-alt="Image"
            ></b-card>
          </b-col>
        </b-row>
    </b-container>

    <b-container style="margin-top:3em;">
      <b-row>
        <b-col>
          <b-card overlay
                  img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                  img-alt="Image"
          >
            <p class="card-text">
              Events and Activities
            </p>          
          </b-card>
        </b-col>
        <b-col>
          <b-card overlay
                  img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                  img-alt="Image"
          >
            <p class="card-text">
              Academics
            </p>          
          </b-card>
        </b-col>
        <b-col>
          <b-card overlay
                  img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                  img-alt="Image"
                  style=""
          >
            <p class="card-text">
              Events and Activities
            </p>          
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
      slide: 0,
      ne: 1,
      items:
      [
        {
          id: 1,
          src: 'https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png',
          t: 'News 1',
          pa: 'Lorem ipsum dolor sit amet, vim graeci delicatissimi in, usu ei percipitur delicatissimi, at everti insolens pri. Ut veniam conceptam.'
        },
        {
          id: 2,
          src: 'https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png',
          t: 'News 2',
          pa: 'Lorem ipsum dolor sit amet, vim graeci delicatissimi in, usu ei percipitur delicatissimi, at everti insolens pri. Ut veniam conceptam.'
        },
        {
          id: 3,
          src: 'https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png',
          t: 'News 3',
          pa: 'Lorem ipsum dolor sit amet, vim graeci delicatissimi in, usu ei percipitur delicatissimi, at everti insolens pri. Ut veniam conceptam.'
        },
        {
          id: 4,
          src: 'https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png',
          t: 'News 4',
          pa: 'Lorem ipsum dolor sit amet, vim graeci delicatissimi in, usu ei percipitur delicatissimi, at everti insolens pri. Ut veniam conceptam.'
        },
        {
          id: 5,
          src: 'https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png',
          t: 'News 5',
          pa: 'Lorem ipsum dolor sit amet, vim graeci delicatissimi in, usu ei percipitur delicatissimi, at everti insolens pri. Ut veniam conceptam.'
        }
      ]
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  name: 'Home'
}
</script>

<style scoped>
h2{
    margin: 1em auto;
    padding-bottom: .2em;
    font-weight: bold;
    border-bottom: solid 5px;
    text-transform: uppercase;
}
#car{
  text-shadow: 1px 1px 2px #333;
  margin: 5em 5em;
}
</style>

