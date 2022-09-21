<template>
	<create-node :nodeParent="this.idParent"/>
</template>

<script lang="ts">
	import Vue from 'vue'
	import CreateNode from '../components/CreateNode.vue'

	export default Vue.extend({
		name: 'CreateNodeView',
		components: {
			CreateNode
		},

		data: () => ({
			idParent: null
		}),
		created () {
			this.idParent = this.$route.params.id
		}
	})
</script>
