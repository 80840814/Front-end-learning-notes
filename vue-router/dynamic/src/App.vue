<template>
	<suspense>
		<div>
			<div class="router-views">
				<router-view #default="{ Component }">
					<div class="link">
						<span
							v-for="route of $router.getRoutes()"
							:key="route.name">
							<router-link
								:to="{ name: route.name }"
								v-if="route.meta?.isMenu && route.meta?.title">
								{{ route.meta.title }}
							</router-link>
						</span>
					</div>
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
