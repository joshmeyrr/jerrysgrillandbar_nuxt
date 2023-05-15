<template>
	<div>
		<!-- Section 1 -->
		<div class="relative flex items-center bg-green hero">
			<div class="z-10 text-white wrapper-inner">
				<hr class="max-w-sm" />
				<h1 class="flex flex-col mt-8 ml-8 uppercase">
					<span>WHERE we combine</span>
					<span class="mt-4">comfort and tradition</span>
				</h1>
				<div class="flex justify-between gap-4 mt-8 ml-8">
					<p>ESTABLISHED 1970 | WAMAC, ILLINOIS</p>
					<!-- <div class="h-[2px] bg-white w-64"></div> -->
					<hr class="mt-3 w-96" />
					<p class="max-w-sm">
						Jerry's Grill and Bar is more than a restaurant, it is a home to many memories.
						Past, and present.
					</p>
				</div>
				<div class="flex justify-center mt-16">
					<button>
						<font-awesome-icon
							class="px-3 py-2 text-4xl border-2 rounded-full text-gold border-gold"
							:icon="['fass', 'arrow-down']"
						/>
					</button>
				</div>
			</div>
		</div>
		<!-- Section 2 -->
		<div class="flex gap-12 py-24 wrapper-inner--skinny">
			<div class="p-4 border-4 rounded-sm border-green">
				<img
					class="object-cover h-auto max-w-sm rounded-sm"
					src="../static/jerrys-chicken.jpg"
					alt=""
				/>
			</div>
			<div>
				<div class="flex items-center gap-2">
					<span class="text-xs uppercase">Our Roots</span>
					<hr class="w-32 border-green" />
				</div>
				<h2 class="mt-4 text-4xl uppercase">It began with jerry and marylin</h2>
				<p class="mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis eum
					eaque inventore minus dolorum voluptatibus numquam repellat voluptate, assumenda
					commodi error quibusdam eius at!
				</p>
				<p class="mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis eum
					eaque inventore minus dolorum voluptatibus numquam repellat voluptate, assumenda
					commodi error quibusdam eius at!
				</p>
				<button class="mt-4 btn btn--primary">from the beginning</button>
				<h3 class="mt-8 text-6xl opacity-40 font-cursive -rotate-6">Jerry + Marylin</h3>
			</div>
		</div>
		<!-- Section 3 -->
		<div class="pt-16 pb-24">
			<div>
				<div class="flex items-center justify-center gap-4">
					<hr class="w-32 border-green" />
					<span class="text-xs uppercase">signatures</span>
					<hr class="w-32 border-green" />
				</div>
				<h2 class="text-4xl text-center uppercase">from the kitchen</h2>
			</div>
			<div class="py-16 mt-24 rounded-sm bg-green">
				<div class="flex justify-center gap-8 -mt-32">
					<div>
						<img
							class="object-cover h-auto max-w-sm rounded-sm"
							src="../static/jerrys-chicken.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							class="object-cover h-auto max-w-sm rounded-sm"
							src="../static/jerrys-chicken.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							class="object-cover h-auto max-w-sm rounded-sm"
							src="../static/jerrys-chicken.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="css">
.hero {
	height: calc(100vh - 192px);
	background-image: url('../static/jerrys-pie-3.jpg');
	background-repeat: no-repeat;
	background-size: cover;
}

/* .hero-overlay {
	position: relative;
	height: 100%;
	width: 100%;
} */

.hero::after {
	content: '';
	background-color: rgb(0 0 0 / 0.85);
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 1;
}
</style>
