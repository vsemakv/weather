<template lang="pug">
.chart
    client-only
        line-chart(:chart-data="chartData"
        :options="chartOptions"
        )
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            weather: "weather/getWeather",
        }),
    },
    data() {
      return {
        chartData: {
        labels: [
          "9:00",
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00'
        ],
        datasets: [
          {
            label: "K",
            backgroundColor: '#f87979',
            data: [267, 267, 268, 270, 272, 270, 268]
          }
        ]
      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
          legend: {
              labels: {
                boxWidth: 0
              }
            } 
          }
      }
      };
    }
}
</script>

<style lang="scss" scoped>
  
</style>

