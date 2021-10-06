import Vue from "vue";
import Vuex from "vuex";
import { userCollection, auth, db } from "../plugins/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: null,
		userToken: null,
		results: null,
	},
	mutations: {
		ADD_USER_DOCUMENTSNAPSHOT: (state, user) => {
			state.user = user;
		},
		ADD_RESULTS: (state, results) => {
			state.results = results;
		},
	},
	actions: {
		setUserDocumentSnapshot({ commit }, userId) {
			return new Promise((resolve, reject) => {
				try {
					const query = userCollection.where("userId", "==", userId);
					const unsubscribeUser = query.onSnapshot((snapShot) => {
						try {
							snapShot.forEach(
								(doc) => {
									if (doc.exists) {
										commit("ADD_USER_DOCUMENTSNAPSHOT", doc);
										resolve("success");
									} else {
										reject(new Error("Cannot set a User that does not exist!"));
									}
								},
								(Error) => {
									commit("ADD_ERROR", Error);
									reject(Error);
								}
							);
							commit("SET_USER_UNSUBSCRIBE_USER", unsubscribeUser);
						} catch (Error) {
							return Error;
						}
					});
				} catch (Error) {
					return Error;
				}
			});
		},
		signUpAction: ({ commit }, payload) => {
			return new Promise((resolve, reject) => {
				userCollection
					.add({
						userId: payload.userId,
						nationalId: payload.nationalId,
						name: payload.name,
						surname: payload.surname,
						gender: payload.gender,
						nationality: payload.nationality,
						// covidStatus: payload.covidStatus,
						testDate: payload.testDate,
						imageUrl: payload.imageUrl,
						phoneNumber: payload.phoneNumber,
					})
					.then(() => {
						return auth.currentUser.updateProfile({
							displayName: payload.name + " " + payload.surname,
						});
					})
					.then(() => {
						resolve();
					})
					.catch((Error) => {
						commit("ADD_ERROR", Error);
						reject(Error);
					});
			});
		},

		signOutAction({ commit }) {
			return new Promise((resolve, reject) => {
				auth
					.signOut()
					.then(() => {
						resolve("Logout Successful");
					})
					.catch((error) => {
						commit("ADD_ERROR", error);
						reject(error);
					});
			});
		},

		signInAction({ commit }, payload) {
			return new Promise((resolve, reject) => {
				auth
					.signInWithEmailAndPassword(payload.email, payload.password)
					.then((userObj) => {
						commit("ADD_USER_DOCUMENTSNAPSHOT", userObj);
						db.collection("users")
							.doc(userObj.user.uid)
							.get()
							.then((doc) => {
								console.log(doc.data());
								commit("ADD_RESULTS", doc.data());
                resolve(userObj);
							})
							.catch((error) => {
								commit("ADD_ERROR", error);
								reject(error);
							});

					})
					.catch((error) => {
						commit("ADD_ERROR", error);
						reject(error);
					});
			});
		},
		authAction({ commit, dispatch, state }) {
			auth.onAuthStateChanged((authObject) => {
				try {
					if (authObject) {
						commit("SET_AUTH_OBJECT", authObject);
						return dispatch("setUserDocumentSnapshot", authObject.uid);
					} else {
						// router.push({ name: "home" });
						commit("SET_AUTH_OBJECT", null);
						state.user = null;
					}
				} catch (Error) {
					return Error;
				}
			});
		},
	},
	getters: {
		getResults: (state) => {
			return state.results;
		},
	},
	modules: {},
});
