<template>
  <div id="home">

    <div id="about">
      <div id="overlay">
        <b-container>
          <b-row align-h="center">
            <b-img fluid src="https://iqyoe.github.io/puma-web/assets/img/horizontal-logo-comp-lengkap-white.png" alt="Logo-comp" />
          </b-row>
          <b-row class="mb-3">
            <b-col align-self="center">
              <router-link :to="'/about'" class="btn btn-outline-primary">About Us</router-link>
              <a href="#" v-scroll-to="'#news'" class="btn btn-outline-success">News Updates</a>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mb-3">
            <span class="scroll-btn">
              <a href="#" v-scroll-to="'#news'">
                <span class="mouse">
                  <span>
                  </span>
                </span>
              </a>
              <p>scroll me</p>
            </span>
          </b-row>
        </b-container>
      </div>
      <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
      
    <b-container>

    <div class="mt-5">   
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
    </div>

          <b-row id="news" class="mt-3">
              <h2>NEWS RELEASE</h2>
          </b-row>

          <b-row class="mt-3">
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
          
        <b-row class="mt-3">
          <h2>Events</h2>
        </b-row>

          <b-row class="mt-3" align-h="center">
            <b-col sm="12" md="4">
              <b-card overlay
                      img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                      img-alt="Image"
              ></b-card>
            </b-col>
            <b-col sm="12" md="4">
              <b-card overlay
                      img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                      img-alt="Image"
              ></b-card>
            </b-col>
            <b-col sm="12" md="4">
              <b-card overlay
                      img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                      img-alt="Image"
              ></b-card>
            </b-col>
            <b-col sm="12" md="4">
              <b-card overlay
                      img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                      img-alt="Image"
              ></b-card>
            </b-col>
            <b-col sm="12" md="4">
              <b-card overlay
                      img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                      img-alt="Image"
              ></b-card>
            </b-col>
          </b-row>
      </b-container>

      <!-- <b-container style="margin-top:3em;">
        <b-row>
          <b-col>
            <b-card overlay
                    img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                    img-alt="Image"
            >
              <p class="card-text" style="color:#fff">
                Events and Activities
              </p>          
            </b-card>
          </b-col>
          <b-col>
            <b-card overlay
                    img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg"
                    img-alt="Image"
            >
              <p class="card-text" style="color:#fff">
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
              <p class="card-text" style="color:#fff;">
                Events and Activities
              </p>          
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div> -->
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
#about{
  position: relative;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  width: 100%;
}
#overlay{
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 95vh;
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: #fff;
  text-align: center;
  z-index: 999;
}
#particles-js{
  background-image: url("https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  min-height: 95vh;
  width: 100%;
  height: 80vh;
}
@-webkit-keyframes ani-mouse {
	0% {
	opacity: 1;
	top: 29%;
	}
	15% {
	opacity: 1;
	top: 50%;
	}
	50% {
	opacity: 0;
	top: 50%;
	}
	100% {
	opacity: 0;
	top: 29%;
	}
}
@-moz-keyframes ani-mouse {
	0% {
	opacity: 1;
	top: 29%;
	}
	15% {
	opacity: 1;
	top: 50%;
	}
	50% {
	opacity: 0;
	top: 50%;
	}
	100% {
	opacity: 0;
	top: 29%;
	}
}
@keyframes ani-mouse {
	0% {
	opacity: 1;
	top: 29%;
	}
	15% {
	opacity: 1;
	top: 50%;
	}
	50% {
	opacity: 0;
	top: 50%;
	}
	100% {
	opacity: 0;
	top: 29%;
	}
}
 .scroll-btn {
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	text-align: center;
}
.scroll-btn > * {
	font-size: 13px;
	font-weight: normal;
	color: #7f8c8d;
	color: #ffffff;
	letter-spacing: 2px;
}
.scroll-btn > *:hover,
.scroll-btn > *:focus,
.scroll-btn > *.active {
	color: #ffffff;
}
.scroll-btn > *:hover,
.scroll-btn > *:focus,
.scroll-btn > *:active,
.scroll-btn > *.active {
	opacity: 0.8;
	filter: alpha(opacity=80);
}
.scroll-btn .mouse {
	position: relative;
	display: block;
	width: 35px;
	height: 55px;
	margin: 0 auto 20px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	border: 3px solid white;
	border-radius: 23px;
}
.scroll-btn .mouse > * {
	position: absolute;
	display: block;
	top: 29%;
	left: 50%;
	width: 8px;
	height: 8px;
	margin: -4px 0 0 -4px;
	background: white;
	border-radius: 50%;
	-webkit-animation: ani-mouse 2.5s linear infinite;
	-moz-animation: ani-mouse 2.5s linear infinite;
	animation: ani-mouse 2.5s linear infinite;
}
</style>

