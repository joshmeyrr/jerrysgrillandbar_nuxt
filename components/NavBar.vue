<template>
	<div>
		<div
			class="grid items-center justify-center h-48 grid-cols-1 text-white lg:grid-cols-3 wrapper-inner"
		>
			<div class="items-center hidden gap-4 lg:flex">
				<a
					href="https://www.facebook.com/jerrysgrillandbar1970/"
					class=""
					target="_blank"
				>
					<font-awesome-icon
						class="p-2 text-4xl border-2 rounded-full text-gold border-gold"
						:icon="['fab', 'facebook']"
					/>
				</a>
				<a href="tel:6185339197">618-533-9197</a>
			</div>
			<div class="flex justify-center">
				<img class="self-center inline w-auto h-24" src="../static/Jerrys.png" alt="" />
			</div>
			<div class="flex items-center justify-center gap-4 uppercase lg:justify-end">
				<NuxtLink class="text-white" to="/">Home</NuxtLink>
				<NuxtLink class="text-white" to="#about">About</NuxtLink>
				<NuxtLink class="text-white" to="#menu">menu</NuxtLink>
				<button class="flex items-center gap-1 btn btn--primary">
					<div class="whitespace-nowrap">Call ahead</div>
					<font-awesome-icon :icon="['fass', 'chevron-right']" />
				</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
