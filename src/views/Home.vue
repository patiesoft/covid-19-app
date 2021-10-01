<template>
	<div class="home">
		<div>
			<b-navbar type="dark" variant="dark">
				<b-navbar-nav class="ml-auto" right>
					<b-nav-form>
						<b-button size="sm" v-b-modal.modal-1 class="my-2 my-sm-0">login</b-button>
						<b-modal id="modal-1" title="Login" @ok="login">
							<b-form-input type="email" class="my-2" v-model="phoneNumber" placeholder="Email"></b-form-input>
							<b-form-input type="password" class="my-4" v-model="OTP" placeholder="password"></b-form-input>
						</b-modal>
					</b-nav-form>
				</b-navbar-nav>
			</b-navbar>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	components: {},
	data() {
		return {
			email: "",
			password: "",
			hasSentSMS: false,
			OTP: "",
		};
	},
	methods: {
		
		login() {
			console.log("clicked")
		},
	},
};
</script>
