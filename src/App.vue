<template>
	<v-app>
		<v-main class="px-2">
			<v-container class="principal-main my-16 pa-10 pt-5">
				<div class="translator mb-6">
					<Translator :countries="countries" />
				</div>
				<!-- <v-fab-transition>
					<v-btn @click="toNew" color="primary" dark absolute bottom right fab style="bottom: 0" class="mb-5">
						<v-icon>mdi-plus</v-icon>
					</v-btn>
				</v-fab-transition> -->
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
	import { Translator } from 'vue-google-translate'

	export default {
		name: 'App',

		components: {
			Translator
		},
		data: () => ({
			countries: [
				{
					code: 'en|es',
					title: 'Spanish',
				},
				{
					code: 'en|pt',
					title: 'Portuguese',
				},
				{
					code: 'en|en',
					title: 'English',
				}
			]
		}),
		methods: {
			toNew() {
				this.$router.push({ path: '/new' })
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
	body {
		top:  0 !important;
	}
	.skiptranslate {
		display: none !important;
	}
	.translator .language-item .language__text {
		display: none;
	}
	.translator .grid {
		display: flex!important;
		justify-content: flex-end!important;
	}
</style>
