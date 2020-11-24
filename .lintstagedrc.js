module.exports = {
    "src/**/*.{js,ts}": ["prettier --write", "eslint --fix", "git add"],
    "**/*.{css,scss}": ["prettier --write", "git add"], // "stylelint --fix"
};