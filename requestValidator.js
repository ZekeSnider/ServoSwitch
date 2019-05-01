class RequestValidator {
	static validateState(state) {
		if (state === "ON" || state === "OFF") {
			return true;
		} else {
			return false;
		}
	}
}

module.exports = RequestValidator;