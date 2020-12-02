<template>
  <div class="container">
    Hello World
    <div @click="hitMe">
      Trigger
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageTest',

  computed: {
    ...mapGetters({
      testState: 'test/getTestState'
    })
  },

  methods: {
    hitMe () {
      this.$store.dispatch('test/toggleState')
    }
  }
}
</script>
