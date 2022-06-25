/**
 * @param {string} string
 */
export function url(string) {
	return string.toLowerCase().replaceAll(/ /g, "-");
}
