<script setup>
	import { ref, watch } from "vue";
	import { useRoute } from "vue-router";
	const lists = await fetch(`http://127.0.0.1:3003/article`).then((r) =>
		r.json()
	);
	const route = useRoute();
	const article = ref({});

	watch(
		() => route.query,
		async (query) => {
			article.value = await fetch(
				`http://127.0.0.1:3003/article/${query.id ?? 1}`
			).then((r) => r.json());
		},
		{ immediate: true }
	);
</script>

<template>
	<div class="page">
		<div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.content }}</p>
        </div>
		<div class="lists">
			<router-link
				:to="{ name: 'article', query: { id: article.id } }"
				v-for="article in lists"
				:key="article.id"
				>{{ article.title }}</router-link
			>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.page {
        display: flex;
		.lists {
            min-width: 300px;
            margin-left: 20px;
			a {
                font-size: 0.9rem;
				display: block;
				background-color: rgb(34, 162, 73);
				color: #fff;
				margin-bottom: 10px;
				padding: 5px;
			}
		}
	}
</style>
