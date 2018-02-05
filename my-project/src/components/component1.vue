<template>
  <v-ons-page>
    コンポーネント1aaaaaaaa
    <v-ons-navigator swipeable :page-stack="pageStack" @push-page="pageStack.push($event)">
    </v-ons-navigator>
  </v-ons-page>
</template>

<script>
  import test1 from './test1'

  export default {
    data() {
      return {
        pageStack: [test1]
      }
    }
  }
</script>