module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // use 2 spaces to indent code
    'indent': ['error', 2],
    // avoid extraneous spaces
    'no-multi-spaces': ['error'],
    "react/prop-types": 0,
  }
}
