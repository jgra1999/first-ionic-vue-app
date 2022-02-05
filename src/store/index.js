import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			memories: [
				{
					id: 'm1',
					image: '/img/mountain.jpg',
					title: 'A trip into the mountains',
					description: 'It was a really nice trip',
				},
				{
					id: 'm2',
					image: '/img/surf.jpg',
					title: 'Surfing the sea',
					description: 'Feeling the cool breeze',
				},
				{
					id: 'm3',
					image: '/img/h1.jpeg',
					title: 'Good dinner with daniela',
					description: 'Really tasty!',
				},
			],
		};
	},

	mutations: {
		addMemory(state, payload) {
			const newMemory = {
				id: new Date().toISOString(),
				title: payload.title,
				image: payload.image,
				description: payload.description,
			};

			state.memories.unshift(newMemory);
		},
	},

	actions: {
		addMemory(context, payload) {
			context.commit('addMemory', payload);
		},
	},

	getters: {
		memories(state) {
			return state.memories;
		},

		memory(state) {
			return (memoryId) => {
				return state.memories.find((memory) => memory.id === memoryId);
			};
		},
	},
});

export default store;
