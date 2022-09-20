<template>
	<v-row class="text-center">
		<v-col cols=12>
			<h3 class="headline font-weight-black mb-10">CREAR <span class="txt-light">NODO</span></h3>
		</v-col>
		<v-col cols=12>
			<v-row justify="center">
				<v-col xs="12" sm="12" md="4">
					<v-form>
						<v-text-field v-model="newNode.name" label="Nombre" required></v-text-field>
						<v-select
							v-model="newNode.parent"
							:items="nodes"
							item-text="title"
							item-value="id"
							label="Nodo padre"
						></v-select>
						<v-btn color="success" class="mr-4" @click="validate">
							Validate
						</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		name: 'CreateNode',

		data: () => ({
			nodes: null,
			newNode: {
				name: '',
				parent: ''
			}
		}),
		methods: {
			validate () {
				console.log(this.newNode)
				this.axios
					.post('https://api-graph.tests.grupoapok.com/api/node', this.newNode)
					.then((response) => {console.log(response)});
			}
		},
		//get all parents nodes
		mounted () {
			this.axios
				.get('https://api-graph.tests.grupoapok.com/api/nodes')
				.then((response) => {this.nodes = response.data})
				.catch(this.nodes = null)
		},
	}
</script>

