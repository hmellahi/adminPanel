<template>
	<div id="dashboard">
		<h1 class="subheading grey--text">{{ $t('dashboard') }}</h1>
		<!-- States Start -->
		<div class="states">
			<h1 class="subheading grey--text">States</h1>
			<v-layout row wrap>
				<v-flex xs12 md3 v-for="state in states" :key="state.name">
					<v-card :class="`${state.bc} shadow white--text text-xs-center ma-1 pa-3`">
						<v-icon style="font-size:120px;" dark x-large>{{ state.icon }}</v-icon>
						<br>
						<v-card-text>
							<h2 class="subheading pa-1">{{ state.count }} <span class="wheight-bold">{{ state.name }}</span></h2>
						</v-card-text>
						<v-btn>Read More</v-btn>
					</v-card>
				</v-flex>
			</v-layout>
		</div>
		<!-- States End -->
		<!-- Charts Start -->
		<div> 
			<canvas id="myChart" width="800" height="450"></canvas>
		</div>
	</div>
</template>

<script>
import Chart from 'chart';
import { mapMutations } from 'vuex'

export default{
	// computed: {
	//    // Get States from Store
	//    states () {
	//       return this.$store.state.states.states;
	//    }
    // },
	mounted(){
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		        datasets: [{
		            label: '# of Votes',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
		});
		console.log(document.getElementById('myChart'));
	}
}
</script>

<style>
	i {
		font-size:120px;
	}
</style>