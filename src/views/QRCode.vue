<template>
	<div class="about">
        	<b-navbar type="dark" variant="dark">
			<b-navbar-nav class="ml-auto" right>
				<b-nav-form>
					<b-button size="sm" @click="logout" class="my-2 my-sm-0">logout</b-button>
				</b-nav-form>
			</b-navbar-nav>
		</b-navbar>
		<!-- <h1>QR Code</h1> -->

		<div class="mt-2">
			<b-avatar src="https://placekitten.com/600/600" size="10rem"></b-avatar>
		</div>
		<b-row class="justify-content-center ">
			<b-col class="text-center">
				<b-img
					width="500"
					src="https://firebasestorage.googleapis.com/v0/b/regional-qr-code-health-system.appspot.com/o/a.png?alt=media&token=033d99e4-91e5-41d2-8784-a2eb44c79b98"
					alt=""
					class="my-5"
				></b-img>
			</b-col>
		</b-row>
	</div>
</template>
<script>
// import mixin from '@/mixins/Mixins.js'

export default {
	name: "qrCode",
	components: {},
	// mixins:[mixin]
};
</script>
