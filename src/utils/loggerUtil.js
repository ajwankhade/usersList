export const logThis = (msg, value = {}) => {
	if (typeof (window.Storage) !== "undefined") {
		const key = (new Date()).getTime() + `_${msg}`;
		window.localStorage.setItem(key, JSON.stringify(value))
	}
}