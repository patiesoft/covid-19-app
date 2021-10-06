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
			<b-avatar :src="results.img_url" size="10rem"></b-avatar>
		</div>

		<b-row class="justify-content-center mt-5">
			<b-col class="text-center">
				<b-img :src="`https://api.qrserver.com/v1/create-qr-code/?data=${text}`" :key="text" fluid alt="Responsive image"></b-img>
			</b-col>
		</b-row>
	</div>
</template>
<script>
// import axios from 'axios'

export default {
	name: "qrCode",
	components: {},
	// mixins:[mixin]
	data() {
		return {
			text: "testodasf",
			value: "https://example.com",
			size: 300,
			results: "",
		};
	},
	methods: {
		logout() {
			console.log("logout");
			this.$router.push({ name: "home" });
		},
	},
	mounted() {
		console.log(this.$store.getters.getResults);
		this.results = this.$store.getters.getResults;
		let results = this.$store.getters.getResults;

		// this.text = JSON.stringify(this.$store.getters.getResults)
		this.text = `Name:${results.name}, \n Surname:${results.surname},\n ID:${results.nationalID} ,\n Date of Birth:${results.DOB} ,\n Test Center:${results.testCenter},\n Test Date: ${results.testDate},\n Result:${results.result},\n Vaccination Date:${results.vaccination.date},\n Vaccine Type:${results.vaccination.type},\n NO.of Doses:${results.vaccination.numberOfDoces} `;
	},
};
</script>
