<template>
	<div>
		<v-btn
			@click="verifyDelete(idNode)"
			rounded small
			color="error"
			elevation="0"
			class="px-4">
			Eliminar
		</v-btn>

		<v-dialog v-model="dialog" width="500">
			<v-card>
				<v-card-title class="text-h5 lighten-2">
					Eliminar nodo
				</v-card-title>

				<div v-if="hasChild">
					<v-card-text>
						<p>No puede eliminarse, tiene hijos</p>
						<v-card-actions>
							<v-btn color="primary" text @click="dialog = false">
								Cerrar
							</v-btn>
						</v-card-actions>
					</v-card-text>
				</div>
				<div v-else>
					<v-card-text>
						<p>¿Está seguro que desea eliminar el nodo?</p>
						<v-card-actions>
							<v-btn color="primary" text @click="dialog = false">
								Cerrar
							</v-btn>
							<v-btn color="secondary" text @click="deleteNode(idNode)">
								Eliminar
							</v-btn>
						</v-card-actions>
					</v-card-text>
				</div>
				<div>
					<alert-message v-if="msg.show" v-model="msg.show" :msgAlert="msg.text" class="mt-8"></alert-message>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>


<script>
	import AlertMessage from './AlertMessage'

	export default {
		name: 'DeleteNode',

		props: {
			idNode: null
		},
		components: {
			AlertMessage
		},

		data: () => ({
			nodes: null,
			dialog: false,
			hasChild: null,
			msg:{
				show: false,
				text: ''
			}
		}),
		methods: {
			//verify if can be removed
			verifyDelete(id){
				this.axios
				.get('https://api-graph.tests.grupoapok.com/api/nodes?parent='+id)
					.then(() => this.openMsg(true))
					.catch(() => this.openMsg(false))
			},
			//open modal
			openMsg(hasChild){
				this.hasChild = hasChild
				this.dialog = true
			},
			//delete node
			deleteNode(id) {
				this.axios
				.delete('https://api-graph.tests.grupoapok.com/api/node/'+id)
						.then(() => {
							this.msg.show = true
							this.msg.text = 'Se ha eliminado el nodo'
						})
						//.catch(() => console.log())
			}
		}
	}
</script>

<style>
	.theme--light.v-card.node{
		background-color: #f6f7f8;
	}
</style>
