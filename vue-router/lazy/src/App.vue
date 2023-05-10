<template>
	<suspense>
		<div>
			<div class="link">
				<router-link :to="{ name: 'home' }">home</router-link>
				<router-link :to="{ name: 'about' }">about</router-link>
				<router-link :to="{ name: 'article' }">article</router-link>
			</div>
			<div class="router-views">
				<router-view #default="{ Component, route }">
					<component :is="Component" />
				</router-view>
			</div>
		</div>
	</suspense>
</template>

<script setup></script>

<style lang="scss" scoped>
	// 普通的动画
	// .fade-enter-from {
	// 	transform: translateX(-100%);
	// 	opacity: 0;
	// }
	// .fade-enter-active {
	// 	transition: all 1s ease;
	// }
	// .fade-enter-to {
	// 	transform: translateX(0);
	// 	opacity: 1;
	// }
	// .fade-leave-from {
	// 	transform: translateX(0);
	// }
	// .fade-leave-active{
	// 	transition: all 1s ease;
	// }
	// .fade-leave-to {
	// 	transform: translateX(-100%);
	// }
	.link {
		a {
			display: inline-block;
			background-color: #c08eaf;
			margin-right: 20px;
			// font-size: 18px;
			color: #fff;
			// display: flex;
			text-align: center;
			padding: 10px;
			// justify-content: center;
			// align-items: center;
			// justify-content: center;
		}
	}
	.router-views {
		margin-top: 30px;
	}
</style>
