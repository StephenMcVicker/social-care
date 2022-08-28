<template lang="pug">
  main
    h1 {{ fullName }}
    pre {{ worker }}
    v-button(@btn-click="changeRoute") {{ $t('goBack') }}
</template>

<script>
import VButton from '@/components/ui/Button.vue';

export default {
  components: { VButton },
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
  methods: {
    changeRoute() {
      this.$router.back();
    }
  }
}
</script>