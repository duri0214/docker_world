#!/bin/bash

# 共通変数
WORKDIR="/workspace"
VENV_DIR="$WORKDIR/.venv"

# 仮想環境の作成
if [ ! -d "$VENV_DIR" ]; then
    echo "仮想環境を作成中..."
    python -m venv $VENV_DIR
else
    echo "仮想環境は既に存在します。"
fi

# 仮想環境をアクティベート
source $VENV_DIR/bin/activate

# 仮想環境の確認
echo "現在のPython環境: $(which python)"

# 仮想環境が有効か確認
if [ "$VIRTUAL_ENV" != "" ]; then
    echo "仮想環境が有効です(\$VIRTUAL_ENV): $VIRTUAL_ENV"
else
    echo "仮想環境が有効ではありません。"
    exit 1
fi

# requirements.txt の内容をインストール
if [ -f "$WORKDIR/requirements.txt" ]; then
    echo "requirements.txt からパッケージをインストール中..."
    pip install --upgrade pip
    pip install --no-cache-dir -r $WORKDIR/requirements.txt
else
    echo "requirements.txt が見つかりませんでした。"
fi

echo "仮想環境のセットアップが完了しました。"
