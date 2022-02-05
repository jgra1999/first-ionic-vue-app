<template>
	<form class="ion-padding" @submit.prevent="submitForm">
		<ion-list>
			<ion-item>
				<ion-label position="floating">Title</ion-label>
				<ion-input type="text" required v-model="enteredTitle"></ion-input>
			</ion-item>
			<ion-item>
				<ion-label position="floating">Image url</ion-label>
				<ion-input type="url" required v-model="enteredImage"></ion-input>
			</ion-item>
			<ion-item>
				<ion-label position="floating">Description</ion-label>
				<ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
			</ion-item>
		</ion-list>
		<ion-button size="large" expand="full" class="ion-margin-top" type="submit">Create memory</ion-button>
	</form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';

export default {
	emit: ['save-memory'],

	components: { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton },

	data() {
		return {
			enteredTitle: '',
			enteredImage: '',
			enteredDescription: '',
		};
	},

	methods: {
		submitForm() {
			const memoryData = {
				title: this.enteredTitle,
				image: this.enteredImage,
				description: this.enteredDescription,
			};
			this.$emit('save-memory', memoryData);
		},
	},
};
</script>
