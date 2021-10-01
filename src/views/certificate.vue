<template>
	<div class="about">
		<b-navbar type="dark" variant="dark">
			<b-navbar-nav class="ml-auto" right>
				<b-nav-form>
					<b-button size="sm" @click="logout" class="my-2 my-sm-0">logout</b-button>
				</b-nav-form>
			</b-navbar-nav>
		</b-navbar>

		<h1>Certificate</h1>
		<div class="mb-2">
			
			<b-avatar src="https://placekitten.com/600/600" size="10rem"></b-avatar>
		</div>
		<b-container class="py-5 border">
			<b-row>
				<b-col class="text-right h5">Patient ID :</b-col>
				<b-col class="text-left h5">{{ details.patientId }}</b-col>
			</b-row>
			<b-row>
				<b-col class="text-right h5">Name :</b-col>
				<b-col class="text-left h5">{{ details.name }}</b-col>
			</b-row>
			<b-row>
				<b-col class="text-right h5">Surname :</b-col>
				<b-col class="text-left h5">{{ details.surname }}</b-col>
			</b-row>
			<b-row>
				<b-col class="text-right h5">Date of Birth :</b-col>
				<b-col class="text-left h5">{{ details.DOB }}</b-col>
			</b-row>
			<b-row>
				<b-col class="text-right h5">test Date :</b-col>
				<b-col class="text-left h5">{{ details.testDate }}</b-col>
			</b-row>
			<b-row>
				<b-col class="text-right h5">test Center :</b-col>
				<b-col class="text-left h5">{{ details.testCenter }}</b-col>
			</b-row>
			<b-row>
				<b-col class="text-right h5">Test Result :</b-col>
				<b-col class="text-left h5">{{ details.result }}</b-col>
			</b-row>
			<b-row class="mt-5 text-center justify-content-center">
				<b-button @click="generateQR" variant="outline-info">Generate QR-Code</b-button>
			</b-row>
		</b-container>
	</div>
</template>
<script>
export default {
	name: "Certificate",
	components: {},
	data() {
		return {
			email: "",
			password: "",
			hasSentSMS: false,
			OTP: "",
			details: {
				name: "Ndumiso",
                patientId:'355-T3D-8M0',
				surname: "Ndzuza",
				DOB: "13 June 2021",
				testDate: "13/08/2021",
				testCenter: "Mkhiwa Clinic",
				result: "Negative",
				vaccination: {
					numberOfDoces: 1,
					type: "Johnson and Johnson",
					date: "13 April 2021",
				},
			},
		};
	},
	methods: {
		logout() {
			this.$router.push({ name: "home" });
			console.log("clicked");
		},
        generateQR(){
			console.log("QR Code");
            this.$router.push({name:'qrcode'})
        }
	},
};
</script>
