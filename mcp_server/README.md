# docker_world

## ネットワークを作成する
```console
docker network create dev_network
```

## mcp-server 設定
- `mcp_server` フォルダを開く
- `devcontainer` で開く
- `F5` でWebサーバを起動
- `VSCode Cline` の設定画面を開く（`Get Started for free` でOK）
  - Server Name: `mcp-server`
  - Server URL: `http://localhost:8000/mcp`
  - `Add Server`
- `こんにちは　を逆にして` などをチャットに入力して処理結果が返ってくることを確認
