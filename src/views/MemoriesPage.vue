<template>
	<base-layout pageTitle="All Memories">
		<template v-slot:actions>
			<ion-button router-link="/memories/add"> add </ion-button>
		</template>

		<memories-list :memories="memories" />
	</base-layout>
</template>

<script>
import MemoriesList from '../components/memories/MemoriesList.vue';

import { IonButton } from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
	components: { MemoriesList, IonButton },

	data() {
		return {};
	},

	computed: {
		memories() {
			return this.$store.getters.memories;
		},
	},
});
</script>

<style>
ion-button {
	--color: #fff;
}
</style>
