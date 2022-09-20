<template>
	<v-app>
		<v-main class="px-2">
			<v-container class="principal-main my-16 pa-10">
				<v-fab-transition>
					<v-btn @click="toNew" color="primary" dark absolute bottom right fab style="bottom: 0" class="mb-5">
						<v-icon>mdi-plus</v-icon>
					</v-btn>
				</v-fab-transition>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
	export default {
		name: 'App',

		components: {
			//HelloWorld,
		},
		methods: {
			toNew() {
				this.$router.push({ path: 'new' })
			}
		}
	};
</script>
<style type="text/css">
	.v-main{
		background-color: #f4f5f7;
	}
	.v-main .principal-main{
		background-color: #fff;
		border-radius: 1rem;
		box-shadow: 0px 8px 8px 0px rgb(0, 0, 0, 0.1);
		min-height: calc(95vh - 100px);
	}
	.txt-light{
		color: #53c1a0;
	}
	.btn-light{
		background-color: #53c1a0;
	}
</style>
