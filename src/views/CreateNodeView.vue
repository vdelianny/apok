<template>
	<create-node />
</template>

<script lang="ts">
	import Vue from 'vue'
	import CreateNode from '../components/CreateNode.vue'

	export default Vue.extend({
		name: 'CreateNodeView',
		components: {
			CreateNode
		},
	})
</script>
