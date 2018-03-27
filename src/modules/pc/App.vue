<template>
  <main>

    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'app',
  computed: {
  },
  components: {
  }
};
</script>

<style lang="scss">
@import '~styles/main';

.el-textarea__inner {
  resize: none;
}

ul {
  list-style: none;
}

</style>
