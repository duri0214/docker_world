# プロジェクトセットアップ手順
このプロジェクトのリポジトリをセットアップし、必要な環境を構築する方法について説明します。

## セットアップ手順

### 1. 作業用リポジトリをクローンする
空の作業リポジトリをローカルにクローンします：

```shell
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_REPOSITORY_NAME>
```

---

### 2. ファイルのコピー
[litellmのdockerディレクトリ](https://github.com/BerriAI/litellm/tree/main/docker)にあるすべての内容をクローンした作業ディレクトリ内にコピーします。

```shell
# リンク先から必要ファイルをダウンロードし、現在のディレクトリにコピー
- docker/.env.example
- docker/Dockerfile.database
- docker/build_admin_ui.sh
- docker/entrypoint.sh
- docker/prod_entrypoint.sh
- pyproject.toml
- litellm
```

---

### 3. Dockerfileのリネーム
データベースを使用するために、`Dockerfile.database` を `Dockerfile` にリネームします：

```shell
cp .env.example .env
mv Dockerfile.database Dockerfile
```

---

### 4. .devcontainerディレクトリのコピー
プロジェクト兄弟階層に存在する `.devcontainer` ディレクトリを作業ディレクトリ内にコピーします：

```shell
cp -r ../.devcontainer .
```

---

### 5. PyCharmでDev Containerを起動
PyCharmを使用して、Dev Containerとしてプロジェクトを起動します。以下を参考にしてください：

- PyCharmのメインメニューから: **File > Open** を選択し、作業ディレクトリを選択します。
- 左下のツールバーから「Dev Containers」を選択し、コンテナを起動します。

> 詳細なセットアップ方法はPyCharmの公式ドキュメントをご参照ください。

### 6.
poetry run litellm
