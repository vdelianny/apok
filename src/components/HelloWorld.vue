<template>
	<v-row class="text-center">
		<v-col cols=12>
			<h3 class="headline font-weight-black mb-10">NODOS <span class="txt-light">PADRE</span></h3>
		</v-col>
		<v-col cols=12>
			<v-row>
				<v-card
					v-for="(node, i) in nodes"
					:key="i"
					class="node mx-auto pa-5 mb-8">
					<a :href="'/#/new/'+node.id" class="transparent--text" style="position: absolute; top: 5px; right: 5px;">
						<v-icon color="green" right>mdi-plus</v-icon>
					</a>
					<div class="text-overline mb-4">
						{{node.title}}
					</div>
					<v-card-actions class="pa-0 pa-md-2">
						<a class="btn-light px-4 v-btn v-btn--rounded v-btn--text theme--light v-size--small mx-1 mx-md-2"
						:href="'/#/nodes/'+node.id">
							Ver nodos hijos
						</a>
						<delete-node class="mx-1 mx-md-2" :idNode="node.id"></delete-node>
					</v-card-actions>
				</v-card>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
	import DeleteNode from './DeleteNode.vue'

	export default {
		name: 'HelloWorld',
		components: {
			DeleteNode
		},
		data: () => ({
			nodes: null,
		}),
		//get all parents nodes
		mounted () {
			this.axios
				.get('https://api-graph.tests.grupoapok.com/api/nodes')
				.then((response) => {this.nodes = response.data})
				.catch(this.nodes = null)
		},
	}
</script>

<style>
	.theme--light.v-card.node{
		background-color: #f6f7f8;
	}
</style>
