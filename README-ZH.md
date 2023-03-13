# 👨‍💻 @sj-distributor/eslint-plugin-react

[![Npm Version](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/@sj-distributor/eslint-plugin-react)
[![MIT License](https://img.shields.io/npm/l/react-native-tab-view.svg?style=flat-square)](https://www.npmjs.com/package/@sj-distributor/eslint-plugin-react)
[![downloads](https://img.shields.io/npm/dm/eslint-config-standard.svg)](https://www.npmjs.com/package/@sj-distributor/eslint-plugin-react)
[![Ci](https://github.com/sj-distributor/eslint-plugin-react/actions/workflows/ci.yml/badge.svg)](https://github.com/sj-distributor/eslint-plugin-react/actions/workflows/ci.yml)

用于 react 的 ESLint 预置

## 安装

你首先需要安装 [ESLint](https://eslint.org/) 和约定的第三方插件包:

```sh
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort eslint-plugin-unicorn prettier typescript
```

接下来，安装 `@sj-distributor/eslint-plugin-react`:

```sh
yarn add @sj-distributor/eslint-plugin-react
```

## 使用

Add `eslint-plugin-react` to the extends section of your `.eslintrc` configuration file:

```json
{
  "extends": ["plugin:@sj-distributor/react/recommended"]
}
```

## 使用了哪些规则？

- [eslint](https://eslint.org/)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort#readme)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint#readme)
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint#readme)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#readme)
