/** @type {import("stylelint").Config} */
export default {
	plugins: ['stylelint-order'],
	extends: [
		'stylelint-config-standard',
		'stylelint-config-css-modules',
		'stylelint-config-recess-order',
	],
};
