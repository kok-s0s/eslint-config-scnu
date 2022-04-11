# ESlint

目前适用于 React + TypeScript 的项目

## 如何安转？

```bash
npm i eslint-config-scnu -D
```

## 如何使用？

在 package.json 文件中加入以下内容即可

```json
{
  ...
  "eslintConfig": {
    "extends": ["scnu"]
  },
  ...
}
```

加入指令

```json
{
  ...
  "scripts": {
    ...
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
    ...
  },
  ...
}
```

创建 `.eslintignore` 文件，其作用和 `.gitignore` 作用差不多，ESlint 会根据 `.eslintignore` 来检查要忽略的文件。

编辑 `.vscode/settings.json` 文件，加入以下内容

```json
{
  ...
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  ...
}
```

---

## 项目现状

根据目前需求和 [ESLint 官方文档](https://eslint.bootcss.com/docs/rules/)制定的规则。

题外话：目前选用的规则是作者个人选择的，有着一定的主观性，团队使用时，若有其它看法，可以发 issue 一起讨论是否有什么规则无用，或是有什么规则需要添加的。

## 项目展望

该包目前只适用与 React + TypeScript 的绝大数情况。不过搜索探索到一位[老哥-antfu](https://github.com/antfu)的[做法](https://github.com/antfu/eslint-config)，他先创建出一个 basic 包，基于这个包扩展出 ts、react、vue 等等包，再来一个大包全包含，这样他以后不管做什么项目都只用引用那个包即可，方便得很，它的包是一个很大的“树”。

[@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config)

团队可以学习他的做法，不过先根据实际项目搭建，积累 vue、ts、svelte 等情况下的规则确定，再抽离这些项目相通的地方，弄出 basic 包，再构建出类似的大包。
