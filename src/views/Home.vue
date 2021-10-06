<template>
	<div class="home m-y p-0 green">
		<b-navbar type="dark" variant="dark">
			<b-navbar-nav class="ml-auto" right>
				<b-nav-form>
					<b-button size="sm" v-b-modal.modal-1 ok-disabled @click="modalShow = !modalShow" class="my-2 my-sm-0">login</b-button>
					<b-modal v-model="modalShow">
						<b-form-input type="email" class="my-2" v-model="email" placeholder="email"></b-form-input>
						<b-form-input type="password" class="my-4" v-model="password" placeholder="password"></b-form-input>

						<template #modal-footer="{ cancel }">
							<b-button size="md" class="px-5"  variant="success" @click="login"> Login </b-button>
							<b-button size="md" class="px-5" variant="danger" @click="cancel()"> Cancel </b-button>
						</template>
					</b-modal>
				</b-nav-form>
			</b-navbar-nav>
		</b-navbar>
		<b-img
		fluid-grow
			
			src="https://firebasestorage.googleapis.com/v0/b/regional-qr-code-health-system.appspot.com/o/COVID-19-702x336.jpg?alt=media&token=26a7f85a-590e-41e8-9c4c-487d1c7af4ca"
			alt=""
			class="m-0 background"
		></b-img>
	</div>
</template>

<script>
import { auth, firebase } from "@/plugins/firebase";
import { mapActions } from 'vuex'
export default {
	name: "Home",
	components: {},
	data() {
		return {
			email: "",
			phoneNumber: "",
			password: "",
			hasSentSMS: false,
			OTP: "",
			confirmationResult: "",
			modalShow: false,
			requestSend: false,
		};
	},
	computed: {
		phoneEntered() {
			return this.phoneNumber.length >= 8;
		},
	},
	methods: {
	...mapActions([
      'signInAction']),

		login() {
			this.signInAction({email:this.email,password:this.password}).then(()=>{
				this.$router.push({name:'certificate'})
			}).catch(error=>{
				console.error(error)
			})
		},
	},

};
</script>
<style scoped>
.home {
	height: 100vh;
	width: 100vw;
	/* background-image: image("@/assets/a.png");
	background-size: cover; */
	}
	.background{
		height: 100vh;
		/* width: 100vw; */

	}
</style>
