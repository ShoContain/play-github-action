FROM node:18.14-slim

# 雛形を生成するのに必要なパッケージのインストール
RUN npm install -g express-generator

# ディレクトリを移動する
WORKDIR /app

# ポート3000番を開放する
EXPOSE 3000