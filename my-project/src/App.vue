<template>
  <v-ons-page>
    <v-ons-tabbar position="auto" :visible="true" :tabs="tabs" :index.sync="tabIndex" :pagestack="pageStack">
    </v-ons-tabbar>
  </v-ons-page>

</template>

<script>
  import test1 from './components/test1'

  import component1 from './components/component1'
  import component2 from './components/component2'
  import component3 from './components/component3'

  export default {
    name: 'index',
    data() {
      return {
        tabIndex: 0,
        tabs: [
          {
            icon: 'fa-home',
            label: '１',
            page: component1,
          },
          {
            icon: 'fa-user',
            label: '２',
            page: component2,
          },
          {
            icon: 'fa-cog',
            label: '３',
            page: component3,
          }
        ],
        pageStack: [test1]
      }
    },
    methods: {
    },
    components: { component1, component2, component3 },
  }
</script>