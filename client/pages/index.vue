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
    <canvas id="bar-chart-grouped" width="800" height="450"></canvas>
  </div>
</template>

<script>
//import Chart from 'chart';


/*let chart = new Chart(document.getElementById("bar-chart-grouped"), {
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
    }
});
*/
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
  }
}
</script>

<style>
  i {
    font-size:100px;
  }
</style>