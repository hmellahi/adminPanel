<template>
  <div id="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <!-- States Start -->
    <div class="states">
      <h1 class="subheading grey--text">States</h1>
      <v-layout row wrap>
        <v-flex xs12 md3 v-for="state in states" :key="state.name">
          <v-card :class="`${state.bc} white--text text-xs-center ma-3 pa-3`">
            <v-icon dark x-large>{{ state.icon }}</v-icon>
            <br>
            <v-card-text>
              <h2 class="subheading pa-1">{{ state.count }} <span class="wheight-bold">{{ state.name }}</span></h2>
            </v-card-text>
            <v-btn>ReadMore</v-btn>
          </v-card>
        </v-flex>

        <!--
          <v-card :class="`${state.bc} white--text text-xs-center ma-3 pa-3`">
            <v-layout row wrap>
              <v-flex xs6>
                <v-icon dark x-large>{{ state.icon }}</v-icon>
              </v-flex>
              <v-flex xs6>
                <h2 class="headline">{{ state.count }} <span class="font-weight-black">{{ state.name }}</span></h2>
              </v-flex>
            </v-layout>
            <v-btn>ReadMore</v-btn>
          </v-card>
        -->
      </v-layout>
    </div>
    <!-- States End -->
    <!-- Charts Start -->
    <!-- pie Browsers Chart element -->
    <v-layout row wrap>
      <v-flex xs4 md7 class="pr-2">
        <div class="shadow sellsChart pa-3">
          <h2 class="font-weight-grey title ma-3" dark>Sells per year (in millions)</h2>
          <canvas id="sells" height="400"></canvas>
        </div>
      </v-flex>
      <v-flex xs12 md5>
        <div class="shadow browsersUsageChart pa-2">
        <h2 class="font-weight-grey title ma-3" dark>Browser usage statistics</h2>
          <canvas id="browsers" height="400"></canvas>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Chart from 'chart.js';
// line chart data
const salesChart = {
  type: 'line',
  data: {
    labels: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
    datasets: [{ 
        data: [1000,1140,1060,1060,1074,800,700,900,783,1378],
        label: false,
        //borderColor: "#3e95cd",
        fill: true,
        backgroundColor:"#009688",
        spanGaps:false
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: false,
      text: 'Sells per year (in millions)'
    }
  }
};

const myPieChart = {
  type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: false,
        text: 'Predicted world population (millions) in 2050'
      }
  }
};

let myChart = {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "Europe",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    },
};

export default{
  data(){
    return {
      states:[
        {name : "Customers", icon:"people", count : "1000", bc : "purple"},
        {name : "Sells", icon:"people", count : "1000", bc : "teal"},
        {name : "Balance", icon:"attach_money", count : "1000", bc : "primary"},
        {name : "Products", icon:"move_to_inbox", count : "1000", bc : "secondary"}
      ],
    }
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId).getContext('2d');
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  },
  mounted() {
    this.createChart("browsers", myPieChart);
    this.createChart('sells', salesChart);
  }
}
</script>

<style>
  i {
    font-size: 100px;
  }
</style>