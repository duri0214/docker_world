#!/bin/bash

# 仮想環境のディレクトリを指定
VENV_DIR="./.venv"

# venvが存在しなければ作成
if [ ! -d "$VENV_DIR" ]; then
    python -m venv $VENV_DIR
    echo "仮想環境を作成しました: $VENV_DIR"
fi

# 仮想環境をアクティブにしてパッケージをインストール
source $VENV_DIR/bin/activate
pip install --upgrade pip
pip install -r ./requirements.txt

echo "仮想環境がセットアップされました。"
