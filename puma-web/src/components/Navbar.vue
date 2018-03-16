<template>
  <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link :to="'/'">Home</router-link></b-nav-item>
            <b-nav-item><router-link :to="'/Evac'">Event</router-link></b-nav-item>
            <b-nav-item><router-link :to="'/Academic'">Academic</router-link></b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item-dropdown text="Login"   >
                <div id="navLogin">
                <b-nav-form>
                    <b-form-input
                    type="text"
                    placeholder="Username"></b-form-input>
                    <b-form-input
                    type="Password"
                    placeholder="Password"></b-form-input>
                    <b-button variant="primary">Login</b-button>
                </b-nav-form>                    
                </div>
            </b-nav-item-dropdown>
        </b-navbar-nav>

    </b-collapse>
    </b-navbar>
</template>

<script>
export default {
}
</script>

<style>
.navbar{
    background: #000411 !important;
}
</style>
