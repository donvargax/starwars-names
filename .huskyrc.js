module.exports = {
	"hooks": {
		"pre-commit": "npm run test:single && npm run check-coverage",
	},
};
