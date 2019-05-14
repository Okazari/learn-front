<template>
  <div>
    <Navbar :links="routes"/>
    <router-view/>
  </div>
</template>

<script>
import { routes } from "./router";
import { Navbar } from "./components";
export default {
  components: {
    Navbar
  },
  data: function() {
    return {
      routes
    };
  }
};
</script>


<style lang="scss">
body {
  margin: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
