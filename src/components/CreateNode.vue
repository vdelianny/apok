<template>
	<v-row class="text-center">
		<v-col cols=12>
			<h3 class="headline font-weight-black mb-10">CREAR <span class="txt-light">NODO</span></h3>
		</v-col>
		<v-col cols=12>
			<v-row justify="center">
				<v-col xs="12" sm="12" md="4">
					<v-form>
						<v-text-field v-model="name" label="Nombre" required></v-text-field>
						<!-- <v-select
							v-model="newNode.parent"
							:items="nodes"
							item-text="title"
							item-value="id"
							label="Nodo padre"
						></v-select> -->
						<v-btn color="success" class="mr-4" @click="create">
							Crear nodo
						</v-btn>
					</v-form>
				</v-col>
			</v-row>
		</v-col>
		<v-col cols=12>
			<alert-message v-if="msg.show" v-model="msg.show" :msgAlert="msg.text" class="mt-8"></alert-message>
		</v-col>
	</v-row>
</template>

<script>
	import AlertMessage from './AlertMessage'

	export default {
		name: 'CreateNode',
		props: {
			nodeParent: null
		},

		components: {
			AlertMessage
		},
		data: () => ({
			name: '',
			msg:{
				show: false,
				text: ''
			}
		}),
		methods: {
			create () {
				this.axios
					.post('https://api-graph.tests.grupoapok.com/api/node', {title:this.name, parent:this.nodeParent})
					.then(() => {
						this.msg.show = true
						this.msg.text = 'Se ha creado un nuevo nodo'
					});
			}
		}
	}
</script>

