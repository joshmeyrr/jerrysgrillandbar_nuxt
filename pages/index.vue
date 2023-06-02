<template>
	<div>
		<!-- Section 1 -->
		<div class="relative flex items-center justify-center bg-green hero">
			<div class="z-10 text-white wrapper-inner">
				<hr class="ml-8 w-60 md:ml-0 md:max-w-sm" />
				<h1 class="flex flex-col mt-8 ml-8 uppercase">
					<span>WHERE we combine</span>
					<span class="mt-0 md:mt-4">comfort and tradition</span>
				</h1>
				<div class="flex flex-col justify-between gap-4 mt-8 ml-8 md:flex-row">
					<p class="whitespace-nowrap">ESTABLISHED 1970 | WAMAC, ILLINOIS</p>
					<!-- <div class="h-[2px] bg-white w-64"></div> -->
					<hr class="w-40 mt-0 md:mt-3 md:w-96" />
					<p class="max-w-sm">
						Jerry's Grill and Bar is more than a restaurant, it is a home to many memories.
						Past, and present.
					</p>
				</div>
				<div class="flex justify-center mt-16">
					<a href="#about">
						<font-awesome-icon
							class="px-3 py-2 text-4xl border-2 rounded-full text-gold border-gold"
							:icon="['fass', 'arrow-down']"
						/>
					</a>
				</div>
			</div>
		</div>
		<!-- Section 2 -->
		<div
			id="about"
			class="flex flex-col items-center gap-20 py-24 lg:items-start lg:flex-row wrapper-inner--skinny"
		>
			<div class="relative px-8 lg:px-0">
				<div class="inline-block p-4 bg-white border-4 rounded-sm border-green">
					<img
						class="object-cover h-auto max-w-[18rem] lg:max-w-xs rounded-sm"
						src="../static/jerrys-chicken.jpg"
						alt=""
					/>
				</div>

				<!-- <div
					class="absolute top-[-15%] right-[5%] lg:right-[-8%] h-auto max-w-xs z-[-1] rotate-[65deg]"
				>
					<img src="../static/accenddarkleaf.png" alt="" />
				</div>
				<div
					class="absolute bottom-[-10%] left-[-15%] lg:left-[-35%] h-auto max-w-xs z-[-1] rotate-[-15deg]"
				>
					<img src="../static/accentdarkherb.png" alt="" />
				</div> -->
			</div>
			<div class="max-w-xl px-8 lg:px-0">
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
				<!-- <button class="flex items-center gap-1 mt-4 btn btn--primary">
					<span>from the beginning</span
					><font-awesome-icon :icon="['fass', 'chevron-right']" />
				</button> -->
				<h3 class="mt-8 text-6xl opacity-40 font-cursive -rotate-6">Jerry + Marylin</h3>
			</div>
		</div>
		<!-- Section 3 -->
		<div class="pt-16 pb-16">
			<div>
				<div class="flex items-center justify-center gap-4">
					<hr class="w-32 border-green" />
					<span class="text-xs uppercase">signatures</span>
					<hr class="w-32 border-green" />
				</div>
				<h2 class="text-4xl text-center uppercase">from the kitchen</h2>
			</div>
			<div class="relative pt-16 pb-16 mt-24 rounded-sm bg-green">
				<!-- <div
					class="absolute top-[-15%] right-[-8%] h-auto max-w-xs z-[1] rotate-[15deg] hidden md:block"
				>
					<img src="../static/accentlight.png" alt="" />
				</div>
				<div
					class="absolute bottom-[-25%] left-[-8%] h-auto max-w-xs z-[1] rotate-[-15deg] hidden md:block"
				>
					<img src="../static/accentlight.png" alt="" />
				</div> -->
				<div
					class="relative z-10 flex flex-wrap justify-center gap-8 -mt-32 text-white"
				>
					<div class="flex flex-col bg-green">
						<img
							class="object-cover h-auto max-w-xs max-h-[20rem] rounded-sm"
							src="../static/jerrys-cake-2.jpg"
							alt=""
						/>
						<p class="max-w-xs px-2 py-4 text-center">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit?
						</p>
					</div>
					<div class="flex flex-col">
						<img
							class="object-cover h-auto max-w-xs max-h-[20rem] rounded-sm"
							src="../static/jerrysdrink.jpeg"
							alt=""
						/>
						<p class="max-w-xs px-2 py-4 text-center">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit?
						</p>
					</div>
					<div class="flex flex-col">
						<img
							class="object-cover h-auto max-w-xs max-h-[20rem] rounded-sm"
							src="../static/jerrysfried.jpeg"
							alt=""
						/>
						<p class="max-w-xs px-2 py-4 text-center">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit?
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Section 4 -->
		<div
			id="menu"
			class="relative z-10 flex flex-wrap justify-center gap-4 pb-24 wrapper-inner"
		>
			<div class="inline-block max-w-xl p-4 border-4 rounded-sm border-green">
				<img src="../static/jerrysmenu1.jpeg" alt="" />
			</div>
			<div class="inline-block max-w-xl p-4 border-4 rounded-sm border-green">
				<img src="../static/jerrysmenu2.jpeg" alt="" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			options: {
				sedan: {},
				suv: {},
				large: {},
			},
		};
	},
};
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
