<template lang="pug">
  main
    header
      h1 {{ $t('greeting', {name: 'Stephen'}) }}
      h2.small {{ $t('subHeaders.findWorker') }}
    section.workers-search
      h3 {{ $t('Nearby Social Workers') }}
        span {{ `(${filteredWorkers.length})` }}
      input(v-model="search"
            placeholder="Search by name"
            type="text")
      p.sorting(@click="sortingChange") {{ $t('sortWorkers') }}
        span {{ this.sortBy }}
      section.results
        worker(v-for="(worker, workerIndex) in filteredWorkers"
              :key="`worker-${workerIndex}`"
              :worker="worker")
</template>

<script>
import Card from '@/components/ui/Card.vue';
import Test from '@/components/Test.vue';
import Worker from '@/components/Worker.vue';
import VButton from '@/components/ui/Button.vue';

export default {
  components: { Card, Test, Worker, VButton },
  layout: 'default',
  middleware: ['test-workers'],
  data() {
    return {
      sortOptions: ['likes', 'patients', 'location'],
      sortBy: '',
      sortValue: 0,
      search: ''
    };
  },
  computed: {
    filteredWorkers () {
      const filteredArray = this.search.length > 2 ? this.workers.filter(worker => worker.firstName.includes(this.search)) : this.workers;
      // if (this.sortBy.length >= 1) {
      //   filteredArray.sort((a,b) => (a[this.sortBy] > b[this.sortBy]) ? -1 : 1);
      // }
      return filteredArray;
    },
    workers () {
       return this.$store.getters[`workers/get`];
    }
  },
  created () {
    this.sortBy = this.sortOptions[this.sortValue];
  },
  methods: {
    sortingChange () {
      this.sortValue >= this.sortOptions.length -1 ? this.sortValue = 0 : this.sortValue++;
      this.sortBy = this.sortOptions[this.sortValue];
      this.$store.commit('workers/sort', this.sortBy);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 5rem;
}
h2.small {
  font-size: 1rem;
}

h3 {
  span {
    color: $primary-purple;
    margin-left: .4rem;
  }
}

section.workers-search {
  display: flex;
  flex-direction: column;

  input {
    background-color: $white;
    border: 1px solid $primary-purple;
    border-radius: 50vh;
    color: $primary-font-color;
    margin: .4rem 0;
    padding: 1rem;
  }

  p {
    span {
      color: $primary-purple;
      margin-left: .4rem;
    }
  }

  p.sorting {
    margin-top: 1rem;
  }

  section.results {
    margin-top: .5rem;
  }
}
</style>