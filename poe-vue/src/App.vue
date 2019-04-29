<template>
  <div>
    <Navbar :links="links"/>
    <router-view></router-view>
  </div>
</template>

<script>
import { Navbar } from "./components";
import { routes } from "./router";

export default {
  components: {
    Navbar
  },
  data: function() {
    return {
      links: routes
    };
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
