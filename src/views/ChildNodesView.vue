<template>
	<child-nodes :nodeParent="this.idParent" />
</template>

<script lang="ts">
	import Vue from 'vue'
	import ChildNodes from '../components/ChildNodes.vue'

	export default Vue.extend({
		name: 'ChildNoteView',
		components: {
			ChildNodes
		},

		data: () => ({
			idParent: null
		}),
		created () {
			this.idParent = this.$route.params.id
		}
	})
</script>
