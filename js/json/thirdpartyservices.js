const thirdPartyServicesJsonArray = [
	{
		name: "Google Analytics",
		model: "google",
		google: false,
		logo: "images/third_party_logos/google/analytics.svg",
		link: {
			privacy: "https://policies.google.com/privacy",
		},
	},
	{
		name: "Google Analytics for Firebase",
		model: "firebase",
		firebase: false,
		logo: "images/third_party_logos/google/firebase.svg",
		link: {
			privacy: "https://firebase.google.com/policies/analytics",
		},
	},
	{
		name: "Google Fonts",
		model: "google_fonts",
		mixpanel: false,
		logo: "images/third_party_logos/google/fonts.svg",
		link: {
			privacy: "https://policies.google.com/privacy",
		},
	},
	{
		name: "Google Maps",
		model: "google_maps",
		mixpanel: false,
		logo: "images/third_party_logos/google/maps.ico",
		link: {
			privacy: "https://policies.google.com/privacy",
		},
	},
	{
		name: "YouTube",
		model: "yt",
		yt: false,
		logo: "images/third_party_logos/yt.png",
		link: {
			privacy: "https://policies.google.com/privacy",
		},
	},
	{
		name: "X (Formerly Twitter)",
		model: "x",
		x: false,
		logo: "images/third_party_logos/x.png",
		link: {
			privacy: "https://twitter.com/privacy",
		},
	},
	{
		name: "Facebook",
		model: "facebook",
		facebook: false,
		logo: "images/third_party_logos/facebook.svg",
		link: {
			privacy: "https://www.facebook.com/about/privacy/",
		},
	},
	{
		name: "WhatsApp",
		model: "whatsapp",
		whatsapp: false,
		logo: "images/third_party_logos/whatsapp.svg",
		link: {
			privacy: "https://www.whatsapp.com/legal/privacy-policy/",
		},
	},
	{
		name: "Instagram",
		model: "insta",
		insta: false,
		logo: "images/third_party_logos/insta.svg",
		link: {
			privacy: "https://help.instagram.com/519522125107875",
		},
	},
	{
		name: "TikTok",
		model: "tiktok",
		insta: false,
		logo: "images/third_party_logos/tiktok.png",
		link: {
			privacy: "https://www.tiktok.com/legal/privacy-policy-row",
		},
	},
	{
		name: "Messenger",
		model: "msgr",
		msgr: false,
		logo: "images/third_party_logos/msgr.svg",
		link: {
			privacy: "https://www.messenger.com/privacy",
		},
	},
	{
		name: "Twitch",
		model: "twitch",
		twitch: false,
		logo: "images/third_party_logos/twitch.png",
		link: {
			privacy: "https://www.twitch.tv/p/legal/privacy-policy/",
		},
	},
	{
		name: "Reddit",
		model: "reddit",
		reddit: false,
		logo: "images/third_party_logos/reddit.png",
		link: {
			privacy: "https://www.reddit.com/policies/privacy-policy",
			tos: "https://www.redditinc.com/policies/previews-terms",
		},
	},
	{
		name: "Discord",
		model: "discord",
		discord: false,
		logo: "images/third_party_logos/discord.svg",
		link: {
			privacy: "https://discord.com/privacy",
			tos: "https://discord.com/terms",
		},
	},
	{
		name: "Microsoft Clarity",
		model: "clarity",
		clarity: false,
		logo: "images/third_party_logos/clarity.png",
		link: {
			privacy: "https://privacy.microsoft.com/en-gb/privacystatement",
		},
	},
	{
		name: "Matomo",
		model: "matomo",
		matomo: false,
		logo: "images/third_party_logos/matomo.png",
		link: {
			privacy: "https://matomo.org/privacy-policy/",
		},
	},
	{
		name: "Statcounter",
		model: "statcounter",
		statcounter: false,
		logo: "images/third_party_logos/statcounter.svg",
		link: {
			privacy: "https://statcounter.com/about/legal/",
		},
	},
	{
		name: "Fathom Analytics",
		model: "fathom",
		fathom: false,
		logo: "images/third_party_logos/fathom.ico",
		link: {
			privacy: "https://usefathom.com/privacy/",
		},
	},
	{
		name: "Yandex.Metrika",
		model: "yandex",
		yandex: false,
		logo: "images/third_party_logos/yandex.svg",
		link: {
			privacy: "https://yandex.com/legal/privacy/",
		},
	},
	{
		name: "Mixpanel",
		model: "mixpanel",
		mixpanel: false,
		logo: "images/third_party_logos/mixpanel.png",
		link: {
			privacy: "https://mixpanel.com/legal/privacy-policy/",
		},
	},
	{
		name: "Plausible Analytics",
		model: "plausible",
		plausible: false,
		logo: "images/third_party_logos/plausible.webp",
		link: {
			privacy: "https://plausible.io/privacy",
		},
	},
	{
		name: "Counter",
		model: "counter",
		counter: false,
		logo: "images/third_party_logos/counter.png",
		link: {
			privacy: "https://counter.dev/pages/privacy.html",
		},
	},
	{
		name: "Hubspot",
		model: "hubspot",
		hubspot: false,
		logo: "images/third_party_logos/hubspot.svg",
		link: {
			privacy: "https://legal.hubspot.com/privacy-policy",
		},
	},
	{
		name: "Disqus",
		model: "disqus",
		disqus: false,
		logo: "images/third_party_logos/disqus.svg",
		link: {
			privacy:
				"https://help.disqus.com/en/articles/1717103-disqus-privacy-policy",
		},
	},
	{
		name: "Bunny CDN",
		model: "bunny_cdn",
		bunny_cdn: false,
		logo: "images/third_party_logos/bunny_net.webp",
		link: {
			privacy: "https://bunny.net/privacy/",
		},
	},
	{
		name: "Bunny Fonts",
		model: "bunny_fonts",
		bunny_fonts: false,
		logo: "images/third_party_logos/bunny_net.webp",
		link: {
			privacy: "https://bunny.net/privacy/",
		},
	},
	{
		name: "jsDelivr",
		model: "jsdelivr",
		jsdelivr: false,
		logo: "images/third_party_logos/jsdelivr.ico",
		link: {
			privacy: "https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net",
		},
	},
	{
		name: "Cloudflare",
		model: "cloudflare",
		cloudflare: false,
		logo: "images/third_party_logos/cloudflare.svg",
		link: {
			privacy: "https://www.cloudflare.com/privacypolicy/",
		},
	},
];
