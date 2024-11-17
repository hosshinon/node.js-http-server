// Node.jsを使ったHTTPサーバーの構築  
// node server.js
// ファイル変更時に自動で更新する場合
// npm install -g nodemon
// nodemon server.js  

// HTTPサーバーを構築するための標準モジュールをインポート
import http from "http";
// ファイルシステムを操作するための標準モジュールをインポート
import fs from "fs";

// index.htmlファイルを同期的に読み込む
const html = fs.readFileSync("./index.html");

// ポート番号を定義
const PORT = 8000;

// 新しいHTTPサーバーを作成
const server = http.createServer((req, res) => {
  // レスポンスヘッダーを設定（ステータスコード200、コンテンツタイプはHTML）
  res.writeHead(200, { "Content-Type": "text/html" });

  // レスポンスボディにHTMLの内容を書き込む
  res.write(html);

  // レスポンスを終了
  res.end();

  // GETリクエストの処理
  if (req.method === "GET") {
    // GETメソッドの処理をここに記述（今回は記載しない）
  }

  // POSTリクエストの処理
  if (req.method === "POST") {
    // POSTメソッドの処理をここに記述（今回は記載しない）
  }
});

// サーバーを指定したポートで起動
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});