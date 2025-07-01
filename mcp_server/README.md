# mcp server

## ネットワークを作成する

```console
docker network create dev_network
```

## mcp-server 設定

- `mcp_server` フォルダを開く
- `devcontainer` で開く
- `F5` で Web サーバを起動

## トラブルシューティング（devcontainer が起動しない場合）

Windows 環境では、事前に `ssh-agent` を起動していないと `devcontainer` が正しく起動できないことがあります。  
以下の手順で回避できます：

1. `ssh-agent` を起動しておく（起動方法は [公式ドキュメント](https://www.jetbrains.com/help/idea/using-ssh-keys.html#Troubleshooting) を参照） 
2. モノレポのルートディレクトリ（`mcp_client` と `mcp_server` を含むディレクトリ）を PyCharm で開く  
3. それぞれの `devcontainer.json` に表示されるガターアイコンからコンテナを起動する  

この問題は VS Code では発生しないため、PyCharm 特有の問題です。
