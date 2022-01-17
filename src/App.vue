<template>
  <div>
    <!-- <div ref="actionA" @focus="setA">A : {{ a }}</div>
    <div ref="actionB" @focus="setB">B :{{ b }}</div> -->
    <Navigator />
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("setAvatar");
    this.$refs.actionA.focus();
  },

  methods: {
    setA() {
      this.a = 5;
    },
    setB() {
      this.b = 6;
    },
  },
  data: () => {
    return { a: 0, b: 1 };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  font-family: "Prompt", sans-serif;
}
</style>


