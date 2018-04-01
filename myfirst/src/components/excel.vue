<template>
  <cool-table :data="data" :settings="{}"></cool-table>
</template>

<script>
import CoolTable from 'vue-Handsontable'

export default {
  name: 'excel',
  components: {
    CoolTable
  },

  data () {
    return {
      data: [
        ['', 'Kia', 'Nissan', 'Toyota', 'Honda'],
        ['2008', 10, 11, 12, 13],
        ['2009', 20, 11, 14, 13],
        ['2010', 30, 15, 12, 13]
      ]
    }
  }
}
</script>
