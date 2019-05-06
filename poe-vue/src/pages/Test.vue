<template>
  <div v-if="player">
    Joueur :
    <div>Name : {{player.name}}</div>
    <div>Nickname : {{player.nickname}}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      player: {
        name: "Toto",
        nickname: "O+O"
      }
    };
  }
};
</script>