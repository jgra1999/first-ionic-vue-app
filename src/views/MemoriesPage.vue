<template>
	<!-- Se recomienda envolver todo la pagina en etiqueta IonPage para garantizar buenas animacion y transiciones. -->
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title> All Memories </ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<ion-list>
				<ion-item> Jose </ion-item>
				<ion-item> Dani </ion-item>
				<ion-item> Ale </ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script>
//?Estos componentes de ionic son esenciales para todas las paginas que deseamos que el router cargue.
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/vue';

export default {
	components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem },
};
</script>
