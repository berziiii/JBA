module.exports = {
  '(src)/**/*.{js,jsx,ts,tsx}': ['prettier --write', 'npm run lint:fix', 'git add'],
};
