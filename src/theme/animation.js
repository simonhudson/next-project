const defaults = `
    animation-duration: .5s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
`;

const slideInFromLeft = `
    @keyframes slide-in-from-left {
        0% {
            left: -100vw;
        }
        100% {
            left: 0;
        }
    }
`;

const slideOutToLeft = `
    @keyframes slide-in-from-left {
        0% {
            left: 0;
        }
        100% {
            left: -100vw;
        }
    }
`;

module.exports = {
	defaults,
	slideInFromLeft,
	slideOutToLeft,
};
