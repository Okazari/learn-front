<template>
  <div class="navbar">
    <div class="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
      >
    </div>
    <router-link
      class="navbar__link"
      v-for="link in links"
      :key="link.path"
      :to="link.path"
    >{{link.label}}</router-link>
  </div>
</template>

<script>
export default {
  props: ["links"]
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  background-color: lighten(darkred, 5);
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.logo {
  font-size: 1.5em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  text-decoration: none;
  min-width: 100px;

  & > img {
    width: 30px;
    height: 30px;
  }
}

.navbar__link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10px;
  color: white;
  text-decoration: none;
  min-width: 100px;
  transition: background-color 200ms;

  &:hover {
    background-color: lighten(darkred, 10);
  }
}
</style>
