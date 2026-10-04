# 福島ブルーベリーファーム ホームページ（プロトタイプ）

埼玉県嵐山町の農園「福島ブルーベリーファーム」の仮ホームページです。
サーバーもデータベースも使わない、静的なページです。

園の主な名前は **福島ブルーベリーファーム** です。
「ブルーミム」は、呼び名として使われることがある、という扱いです。Instagram の表示名は「埼玉嵐山🫐福島ブルーベリーファーム」、ユーザーネームは `@fukushimabbf` です。

## 見方

### コマンドひとつ（おすすめ）

このフォルダで、次を実行します。

```bash
python3 -m http.server 8080
```

ブラウザで <http://localhost:8080> を開きます。止めるときは、その画面で Ctrl+C です。

### ファイルを直接開く

`index.html` をブラウザにドラッグしても表示できます。

文字は、ネットにつながっているとき [Google Fonts](https://fonts.google.com/) の Zen Maru Gothic（見出し）と Noto Sans JP（本文）を使います。オフラインのときは、端末にあるゴシック体で表示されます。

## 文章を直す

`index.html` を開いて、表示されている日本語をそのまま書き換えてください。

| コーナー | 場所 |
| --- | --- |
| 先頭の大きな案内 | `id="top"` |
| 園について | `id="about"` |
| ブルーベリーの品種 | `id="varieties"` |
| 季節のたより | `id="calendar"` |
| ブルーベリー狩り | `id="picking"` |
| 販売している場所 | `id="buy"` |
| お知らせ | `id="news"` |
| アクセス | `id="access"` |
| LINE / Instagram | `id="contact"` |
| フッター | `footer` |

品種のカードは掲載枠の見本です。名前が分かったら、カードを複製して中の文字を差し替えてください。

## 色とフォントを直す

`css/styles.css` の先頭、`:root { ... }` だけが色と書体の置き場です。
デザイナーからパレット、フォント、CSS 変数が届いたら、このブロックを差し替えてください。イラストの色も、同じ変数を見ています。

主な変数:

| 変数 | 役割 |
| --- | --- |
| `--font-display` | 見出し |
| `--font-body` | 本文 |
| `--color-blueberry` `--color-blueberry-deep` `--color-blueberry-bright` `--color-blueberry-soft` | 紫 |
| `--color-leaf` `--color-leaf-deep` `--color-leaf-mid` `--color-leaf-soft` | 緑 |
| `--color-chestnut` `--color-chestnut-deep` `--color-chestnut-bright` `--color-chestnut-soft` | 茶 |
| `--color-bg` | ページの背景 |
| `--color-surface` | カードの地 |
| `--color-ink` `--color-ink-muted` | 文字 |
| `--color-warm` | やわらかい黄 |
| `--color-line-brand` `--color-line-brand-deep` | LINE ボタン（農園の配色とは別） |

ブラウザのタブの色（`index.html` の `theme-color`）は CSS 変数では変わらないので、紫を変えたときはそこも合わせてください。

## 画像を直す

いま写真は使っていません。絵は `index.html` の中の `<svg>` です。

写真を載せるときは:

1. 画像を `assets/` に置く（例: `assets/hero.jpg`）。大きすぎないファイルにしてください。
2. 差し替えたい `<svg>` を、次のように `<img>` に変える。

```html
<img src="assets/hero.jpg" alt="農園の丘の写真" width="640" height="540">
```

`alt` には、その写真が何かを日本語で書いてください。

タブの小さい絵は `assets/favicon.svg` です。コーナーで繰り返す小さな絵は、`index.html` 冒頭の SVG スプライト（`symbol`）です。

スマホのメニュー開閉は `js/main.js` です。JavaScript が動かなくても、フッターから各コーナーへ移動できます。

## まだ入れていないこと

次の印は、事実が未確定です。それらしい数字や住所を作って埋めないでください。

- `※準備中` … まだ掲載していない
- `【要確認】` … そうかもしれないが、未確認

未確定なのは、番地、営業時間、狩りの料金と期間、予約の有無、駐車場、電話番号、地図、最寄り駅（東武東上線 武蔵嵐山駅は目安）、品種ごとの名前と写真、テーマソングを聴ける場所、各販売店の住所と品ぞろえです。
