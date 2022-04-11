ESlint + Prettier

----------------------------------------------------------------

How to install?

```bash
npm i eslint-config-scnu -D
```

How to use?

Add the following to the package.json file.

```json
{
  ...
  "eslintConfig": {
    "extends": ["scnu"]
  },
  ...
}
```

Add related script

```json
{
  ...
  "scripts": {
    ...
    "lint": "eslint --ignore-path .gitignore .",
    "lint:fix": "eslint --ignore-path .gitignore --fix ."
    ...
  },
  ...
}
```
