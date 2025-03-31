const app = new Vue({
	el: "#app",
	data() {
		return {
			iOrWe: "[I/We]",
			typeOfDev: "",
			webName: "",
			siteURL: "",
			email: "",
			phone: "",
			phoneIn: "",
			myOrOur: "[my/our]",
			meOrUs: "[me/us]",
			areOrAm: "[are/am]",
			usOrMe: "[us/me]",
			devName: "",
			companyName: "",
			companyAdd: "",
			companyAddIn: "",
			devOrCompanyName: "[Developer/Company name]",
			effectiveFromDate: new Date().toISOString().slice(0, 10),
			thirdPartyServices: thirdPartyServicesJsonArray,
			personalData: personalDataJsonArray,
			personalDataCollectionMethods: dataCollectionMethodsJsonArray,
			personalDataUsage: personalDataUsageJsonArray,
			showPersonalDropdown: false,
			showPrivacyModal: false,
			showDisclaimerModal: false,
			hasThirdPartyServicesSelected: true,
			contentRenderType: 1,
			wizardStep: 1,
			totalWizardSteps: 7,
			isRequired: false,
		};
	},
	filters: {
		capitalize(value) {
			if (!value) return "";
			return value.toString().charAt(0).toUpperCase() + value.slice(1);
		},
	},
	methods: {
		preview(id) {
			this.contentRenderType = 1;
		},
		nextStep() {
			if (this.wizardStep <= this.totalWizardSteps) {
				if (this.wizardStep === 1) {
					if (
						this.webName.length === 0 ||
						this.webName === "" ||
						this.webName === null ||
						this.webName === "Please provide the name website!"
					) {
						this.webName = "Please provide the name of website!";
						return;
					}

					if (
						this.siteURL.length === 0 ||
						this.siteURL === "" ||
						this.siteURL === null ||
						this.siteURL === "Please provide your website URL!"
					) {
						this.siteURL = "Please provide your website URL!";
						return;
					}

					if (this.typeOfDev.length === 0) {
						this.isRequired = true;
						return;
					}
				} else if (this.wizardStep === 2) {
					if (
						this.email.length === 0 ||
						this.email === "" ||
						this.email === null
					) {
						this.email = "Please provide the contact email!";
						return;
					}

					if (!new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(this.email)) {
						this.email = "Please provide a valid email!";
						return;
					}
				}

				this.wizardStep += 1;
			}
		},
		prevStep() {
			if (this.wizardStep >= 1) {
				this.wizardStep -= 1;
			}
		},
		checkForThirdPartyServicesEnabled() {
			const listOfEnabledThirdPartyServices = [];
			for (const item of this.thirdPartyServices) {
				if (item[item.model] === true) {
					listOfEnabledThirdPartyServices.push(true);
				}
			}

			return listOfEnabledThirdPartyServices.length > 0;
		},
		checkForPersonalDataEnabled() {
			const listOfEnabledPersonalData = [];
			for (const item of this.personalData) {
				if (item[item.model] === true) {
					listOfEnabledPersonalData.push(true);
				}
			}

			return listOfEnabledPersonalData.length > 0;
		},
		checkForPersonalDataCollectionMethodsEnabled() {
			const listOfEnabledPersonalDataCollectionMethods = [];
			for (const item of this.personalDataCollectionMethods) {
				if (item[item.model] === true) {
					listOfEnabledPersonalDataCollectionMethods.push(true);
				}
			}

			return listOfEnabledPersonalDataCollectionMethods.length > 0;
		},
		checkForPersonalDataUsageEnabled() {
			const listOfEnabledPersonalDataUsage = [];
			for (const item of this.personalDataUsage) {
				if (item[item.model] === true) {
					listOfEnabledPersonalDataUsage.push(true);
				}
			}

			return listOfEnabledPersonalDataUsage.length > 0;
		},
		toggleState(item) {
			const state = item.model;

			// console.log('Item:', item.name, item.model, item[state])
			// For reactive update of the json
			// Toggle the state
			Vue.set(thirdPartyServicesJsonArray, item.model, !item[state]);
			Vue.set(personalDataJsonArray, item.model, !item[state]);
			Vue.set(dataCollectionMethodsJsonArray, item.model, !item[state]);
			Vue.set(personalDataUsageJsonArray, item.model, !item[state]);
		},
		getHtml(id, target) {
			const content = getContent(id);
			const title = getTitle(id);
			const rawHTML = getRawHTML(content, title);
			this.contentRenderType = 2;
			loadInTextView(target, rawHTML);
		},
		getMarkdown(id, target) {
			const content = getContent(id);
			const title = getTitle(id);
			const rawHTML = getRawHTML(content, title);
			const markdown = convertHtmlToMd(rawHTML);
			this.contentRenderType = 2;
			loadInTextView(target, markdown);
		},
		generate() {
			if (this.typeOfDev === "Individual") {
				this.devOrCompanyName = this.devName;
				this.iOrWe = "I";
				this.myOrOur = "my";
				this.meOrUs = "me";
				this.areOrAm = "am";
				this.usOrMe = "me";
			} else if (this.typeOfDev === "Company") {
				this.devOrCompanyName = this.companyName;
				this.iOrWe = "we";
				this.myOrOur = "our";
				this.meOrUs = "us";
				this.areOrAm = "are";
				this.usOrMe = "us";
			}

			if (this.companyAdd === "") {
				this.companyAddIn = "";
			} else {
				this.companyAddIn = `Write to us at: ${this.companyAdd}`;
			}

			if (this.phone === "") {
				this.phoneIn = "";
			} else {
				this.phoneIn = `Call ${this.usOrMe} at: ${this.phone}`;
			}
		},
		togglePrivacyModalVisibility() {
			this.generate();
			this.hasThirdPartyServicesSelected =
				this.checkForThirdPartyServicesEnabled();
			this.hasPersonalDataSelected = this.checkForPersonalDataEnabled();
			this.hasPersonalDataCollectionMethodSelected = this.checkForPersonalDataCollectionMethodsEnabled();
			this.hasPersonalDataUsage = this.checkForPersonalDataUsageEnabled();
			this.contentRenderType = 1;
			this.showPrivacyModal = !this.showPrivacyModal;
		},
		toggleDisclaimerModalVisibility() {
			this.showDisclaimerModal = !this.showDisclaimerModal;
		},
	},
});
