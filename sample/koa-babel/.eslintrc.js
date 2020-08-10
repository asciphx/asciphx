module.exports = {
    "env": {
        "esnext": true,
        "typescript":true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins":["@babel"],
    "rules": {
      "new-cap": "error",
      "no-invalid-this": "error",
      "no-unused-expressions": "error",
      "object-curly-spacing": "error",
      "semi": "error",
    }
};
