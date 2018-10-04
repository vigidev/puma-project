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
              <!-- <router-link :to="'/about'" class="btn btn-outline-primary">About Us</router-link> -->
              <a href="#" v-scroll-to="'#section-about'" class="btn btn-outline-secondary">About</a>
              <a href="#" v-scroll-to="'#section-news'" class="btn btn-outline-success">News</a>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mb-3">
            <span class="scroll-btn">
              <a href="#" v-scroll-to="'#section-news'">
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
      <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#fff"
        :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab"
        :clickEffect="true" clickMode="push">
      </vue-particles>
    </div>

    <div id="section-about">
      <b-container class="mt-5">
        <b-row>
          <b-col>
            <h3>ABOUT</h3>
            <p v-if="about"><span v-html="about.content"></span></p>
          </b-col>
          <b-col>
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

            <b-carousel-slide img-src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-1.png"
            ></b-carousel-slide>

            <b-carousel-slide img-src="https://iqyoe.github.io/puma-web/assets/img/carousel-content-2.png"
            ></b-carousel-slide>

          </b-carousel>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="section-news" class="mt-5">
      <b-row id="news">
        <h2>Latest News</h2>
      </b-row>
      <b-container>
        <b-row class="mt-4" v-if="news.length>0">
          <b-col v-for="pernews of news" :key="pernews.uid">
            <router-link :href="event.url">
            <b-card :img-src="event.poster" :img-alt="event.poster" img-bottom tag="article">
              <h3>{{pernews.title}}</h3>
              <p class="card-text">
                {{pernews.content}}
              </p>
              <!-- <b-button href="#" variant="primary">Read More</b-button> -->
            </b-card>
            </router-link>
          </b-col>
        </b-row>
        <b-row class="mt-4" v-else>
          <b-col>No news found</b-col>
          <!-- <b-col v-for="item of items" :key="item.id" v-if="item.id>=ne && item.id<ne+3">
            <router-link :to="'/academic/article'">
            <b-card :img-src=item.src img-alt="Image" img-bottom tag="article">
              <h3>{{item.t}}</h3>
              <p class="card-text">
                {{item.pa}}
              </p>
              <b-button href="#" variant="primary">Read More</b-button>
            </b-card>
            </router-link>
          </b-col> -->
        </b-row>
      </b-container>
    </div>

    <div>
      <b-row class="mt-3">
        <h2>Featured Events</h2>
      </b-row>

      <b-container>
        <b-row class="mt-3" align-h="center" v-if="events.length>0">
          <b-col sm="12" md="4" v-for="event of events" :key="event.uid">
            <router-link :href="event.url">
              <b-card overlay :img-src="event.poster" img-alt="Image"></b-card>
            </router-link>
          </b-col>
        </b-row>
        <b-row class="mt-3" align-h="center" v-else>
          <b-col>No featured event found</b-col>
          <!-- <b-col sm="12" md="4">
            <router-link :to="'/academic/article'">
            <b-card overlay img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg" img-alt="Image"></b-card>
            </router-link>
          </b-col>
          <b-col sm="12" md="4">
            <b-card overlay img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg" img-alt="Image"></b-card>
          </b-col>
          <b-col sm="12" md="4">
            <b-card overlay img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg" img-alt="Image"></b-card>
          </b-col>
          <b-col sm="12" md="4">
            <b-card overlay img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg" img-alt="Image"></b-card>
          </b-col>
          <b-col sm="12" md="4">
            <b-card overlay img-src="https://iqyoe.github.io/puma-web/assets/img/news2.jpg" img-alt="Image"></b-card>
          </b-col> -->
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        about: {
          uid: '',
          content: ''
        },
        news: [],
        pernews: {
          uid: '',
          title: '',
          desc: ''
        },
        events: [],
        event: {
          uid: '',
          title: '',
          url: ''
        },
        slide: 0,
        ne: 1,
        items: [{
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
    created () {
      this.fetchAbout()
      this.fetchNews()
      this.fetchEvents()
    },
    methods: {
      fetchAbout () {
        const url = 'https://api.pucomputing.org/api/about/2'
        fetch(url
        // {
        //   headers: new Headers({
        //     'Authorization': 'Bearer' +
        //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3B1bWEtYmFja2VuZFwvcHVibGljXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwNzY2NDYzLCJleHAiOjE1MzA3NzAwNjMsIm5iZiI6MTUzMDc2NjQ2MywianRpIjoiWHlSU2p3SUx0WFo5SHNoSCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.x14hrlPcG7O9KWkM1c0N46us9ZJBbicUBpKZyZVqoCU'
        //   })
        // }
        ).then(res => res.json())
        .then(res => {
          console.log(res.data)
          this.about.uid = res.data.uid
          this.about.content = res.data.content
        })
        .catch(err => console.log(err))
      },
      fetchNews () {
        const url = 'https://api.pucomputing.org/api/news/3'
        fetch(url
        // {
        //   headers: new Headers({
        //     'Authorization': 'Bearer' +
        //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3B1bWEtYmFja2VuZFwvcHVibGljXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwNzY2NDYzLCJleHAiOjE1MzA3NzAwNjMsIm5iZiI6MTUzMDc2NjQ2MywianRpIjoiWHlSU2p3SUx0WFo5SHNoSCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.x14hrlPcG7O9KWkM1c0N46us9ZJBbicUBpKZyZVqoCU'
        //   })
        // }
        ).then(res => res.json())
        .then(res => {
          console.log(res.data)
          this.news = res.data
        })
        .catch(err => console.log(err))
      },
      fetchEvents () {
        const url = 'https://api.pucomputing.org/api/featured_events/5'
        fetch(url
        // {
        //   headers: new Headers({
        //     'Authorization': 'Bearer' +
        //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3B1bWEtYmFja2VuZFwvcHVibGljXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMwNzY2NDYzLCJleHAiOjE1MzA3NzAwNjMsIm5iZiI6MTUzMDc2NjQ2MywianRpIjoiWHlSU2p3SUx0WFo5SHNoSCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.x14hrlPcG7O9KWkM1c0N46us9ZJBbicUBpKZyZVqoCU'
        //   })
        // }
        ).then(res => res.json())
        .then(res => {
          console.log(res.data)
          this.events = res.data
        })
        .catch(err => console.log(err))
      },
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
  h2 {
    background-color: #ced4da;
    padding: 0.5em;
    margin: 1em auto;
    font-weight: bold;
    text-transform: uppercase;
  }

  #about {
    position: relative;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
    width: 100%;
  }

  #overlay {
    background-color: rgba(0, 0, 0, 0.7);
    min-height: 95vh;
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: #fff;
    text-align: center;
    z-index: 999;
  }

  #particles-js {
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

  .scroll-btn>* {
    font-size: 13px;
    font-weight: normal;
    color: #7f8c8d;
    color: #ffffff;
    letter-spacing: 2px;
  }

  .scroll-btn>*:hover,
  .scroll-btn>*:focus,
  .scroll-btn>*.active {
    color: #ffffff;
  }

  .scroll-btn>*:hover,
  .scroll-btn>*:focus,
  .scroll-btn>*:active,
  .scroll-btn>*.active {
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

  .scroll-btn .mouse>* {
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
