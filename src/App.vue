<template>
	<ion-app>
		<ion-router-outlet />
	</ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
	components: {
		IonApp,
		IonRouterOutlet,
	},
});
</script>

<style>
body {
	background-color: #fff;
	color: #000;
}
</style>
