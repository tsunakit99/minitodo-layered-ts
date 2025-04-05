# MiniTodo App (Layered Architecture + MUI)

MiniTodo は、Next.js App Router をベースに、レイヤードアーキテクチャを採用した学習用 Todo アプリです。  
技術スタックの選定からディレクトリ設計、実装、UIまでモダンな構成で構築されています。

---

## ✨ 技術スタック

- **Frontend**
  - Next.js 14 (App Router)
  - React + SWR
  - MUI (Material UI)

- **Backend**
  - Layered Architecture (Controller / Service / Repository / Infra)
  - Prisma ORM
  - PostgreSQL

- **Dev Tooling**
  - TypeScript
  - Docker (DB/開発環境)
  - Prisma Studio（DB GUI）

---

## 🧱 ディレクトリ構成（一部）

├── README.md                    # プロジェクト概要（今回まとめたドキュメント）
│
├── app/                         # Next.js App Router のルートディレクトリ
│   ├── api/                     # APIルート（tasks用APIがここに含まれる）
│   ├── layout.tsx              # 全体レイアウトの共通設定（ThemeProviderなど）
│   ├── globals.css             # グローバルCSS（最低限使用）
│   ├── providers.tsx           # MUIのThemeProviderなどクライアント側プロバイダ
│   └── tasks/                  # タスク管理UIのプレゼンテーション & コンテナ層
│       ├── components/         # TaskForm, TaskList, Dialogなどコンポーネント
│       └── page.tsx            # `/tasks` ページ（フォーム + 一覧）
│
├── backend/                    # サーバー側レイヤードアーキテクチャの実装群
│   ├── controller/             # APIハンドラ（Next.jsのroute.tsで使う）
│   ├── service/                # ビジネスロジック（createTask, updateTaskなど）
│   ├── repository/             # 抽象的なRepositoryインターフェース
│   ├── infra/                  # Prismaなどの具象Repository実装
│   └── model/                  # 型定義 or ドメインモデル（必要に応じて）
│
├── prisma/                     # Prisma用のスキーマとマイグレーション
│   ├── schema.prisma           # Task モデル定義
│   └── migrations/             # マイグレーション履歴
│
├── docker/                     # Docker関連の設定
│   └── dev.Dockerfile          # 開発用のDockerfile（Next.jsアプリ）
├── docker-compose.yml          # PostgreSQLコンテナ構成と共有ボリューム定義
│
├── public/                     # 静的ファイル（使っていなければそのままでもOK）
│   └── *.svg                   # 初期Next.jsのサンプル画像たち
│
├── tsconfig.json               # TypeScript 設定（paths なども定義可能）
├── next.config.ts              # Next.js のビルド & 実行設定
├── package.json                # 依存パッケージ & スクリプト定義
├── eslint.config.mjs           # Lint設定（推奨: TypeScript + Next.js向け）
├── next-env.d.ts               # 自動生成される型宣言（編集不要）
└── node_modules/               # npmインストールされた依存ライブラリ
