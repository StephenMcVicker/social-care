<template lang="pug">
  main
    section.header
    h1 {{ fullName }}
    card
      pre {{ worker }}
    v-button(@btn-click="changeRoute") {{ $t('goBack') }}
</template>

<script>
import Card from '@/components/ui/Card.vue';
import VButton from '@/components/ui/Button.vue';

export default {
  components: { Card, VButton },
  middleware: ['test-workers'],
  computed: {
    worker () {
      return this.$store.getters[`workers/get`].filter(worker => worker.id === this.routeID);
    },
    routeID () {
      return this.$route.params.id ? parseInt(this.$route.params.id) : 0;
    },
    fullName () {
      return this.$store.getters['worker/getFullName'];
    }
  },
  created () {
    this.$store.commit('ui/setHideMenu', true);
    this.$store.commit('ui/setHideNav', true);
  },
  beforeDestroy () {
    this.$store.commit('ui/setHideMenu', false);
    this.$store.commit('ui/setHideNav', false);
  },
  methods: {
    changeRoute() {
      this.$router.back();
    }
  }
}
</script>