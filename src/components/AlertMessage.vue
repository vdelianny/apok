<template>
	<div>
		<v-alert class="py-5" prominent color="blue-grey" dark dense>
			<span>{{msgAlert}}</span>
		</v-alert>
	</div>
</template>


<script>
	export default {
		name: 'AlertMessage',

		props: {
			msgAlert: String
		}
	}
</script>




