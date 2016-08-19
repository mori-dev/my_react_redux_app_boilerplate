# React / Redux アプリの自分用の雛形

React / Redux アプリの自分用の雛形です。

## ライブラリ

- React
- redux
- flow
- Webpack
- ESLint
- material-ui

他、package.json を参照して下さい。

## ローカル環境ごとの定数の設定

.env.sample を参考に .env を作成し、webpack.config.js 以下のような感じで設定して下さい。

```
new webpack.DefinePlugin({
    'process.env': {
        'HOGE': JSON.stringify(process.env.HOGE),
    },
}),
```

## 作者

- <https://github.com/mori-dev>

https://github.com/ktrysmt/react-minimal-boilerplate をフォークしました。

## ライセンス

MIT License
