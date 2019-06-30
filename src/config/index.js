const common = {
    httpTimeout:3000,
	ToastDuration:2000,
	API_BASE_URL:JSON.stringify("http://rest.sltl.top/interface/request-api"),
	APP_ID:JSON.stringify("wx3049c9cd7653289a"),
    REDIRECT_URL:JSON.stringify("http://frontend.sltl.top"),
};

module.exports = {

	// 开发环境变量
	dev: {
		env: {
			TYPE: JSON.stringify('dev'),
			...common
		}
	},

	// 生产环境变量
	build: {
		env: {
			TYPE: JSON.stringify('prod'),
			...common
		}
	}
};