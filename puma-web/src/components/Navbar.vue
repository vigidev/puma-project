<template>
<div id="navbar">
  <b-navbar class="navbar-dark" toggleable="md" type="dark" variant="dark" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-container>
        <b-row align-h="between">
        <b-col>
          <b-navbar-brand style="padding: 0 auto;margin: 0 auto" v-show="show">
            <b-img src="static/horizontal-full-white.png" height="30" class="d-inline-block align-top" alt="PUMA Computing" />
          </b-navbar-brand>
        </b-col>
        <b-navbar-nav>
            <li class="nav-item"><router-link :to="'/'" class="nav-link" exact>Home</router-link></li>
            <li class="nav-item"><router-link :to="'/event'" class="nav-link">Event</router-link></li>
            <li class="nav-item"><router-link :to="'/academic'" class="nav-link">Academic</router-link></li>
            <li class="nav-item"><router-link :to="'/about'" class="nav-link">About</router-link></li>
            <li class="nav-item" v-b-modal.comLogin><router-link :to="'/computizen'" class="nav-link">Computizen</router-link></li>
            <li class="nav-item"><router-link :to="'/contact'" class="nav-link">Contact</router-link></li>
        </b-navbar-nav>
        </b-row>
        </b-container>

    </b-collapse>
    </b-navbar>
    <b-navbar>
        <b-navbar-nav>
            <b-nav-item>No</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
    <b-navbar type="light" variant="light" sticky>
        <b-container>
          <b-row>
            <img src="https://iqyoe.github.io/puma-web/assets/img/horizontal-logo-comp-lengkap-hitam.png" alt="Header" style="height:10vh;z-index:999;">
          </b-row>
        </b-container>
    </b-navbar>
    <b-modal id="comLogin" title="Login">
      <p class="my-4">Welcome Computizen !</p>
    </b-modal>
</div>
</template>

<script>

export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 100) {
        this.show = true
      } else {
        this.show = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
.navbar-dark{
    background: #000411 !important;
    box-shadow: 0 1px 1px #ccc;
}
</style>
