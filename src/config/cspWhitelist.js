const srcList = [
	"'self'"
];

const unsafeList = ["'unsafe-inline'", "'unsafe-eval'"];

module.exports = {
	defaultSrc: srcList,
	scriptSrc: srcList.concat(unsafeList),
	styleSrc: srcList.concat(unsafeList),
	frameSrc: ["'none'"],
};
