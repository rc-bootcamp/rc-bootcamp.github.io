---
date: '2025-11-04T12:00:00+09:00'
draft: false
title: 'RC bootcamp'
toc: true
tocopen: false
UseHugoToc: false
---

{{< banner "/images/banner_light.webp" "/images/banner_dark.webp" >}}

{{< gallery >}}

## 概要
**RC bootcamp** はリザバー計算 (reservoir computing; RC) の初学者向けに開発された教材です。
特にRCの分野で登場する概念や手法を､初心者でも素早く習得するのみならず、RCの最先端の研究のトピックにも触れられるように、様々な章が用意されています。
このプラットフォームは容易にローカライズできるように設計されております。
現在は英語版と日本語版を提供しています。
本ページは日本語版の紹介ページです｡
英語版は[こちら](https://rc-bootcamp.github.io/)を参照してください｡

{{< toc >}}

## Jupyter Notebookによる実践的な演習形式
各章は[Jupyter Notebook](https://jupyter.org/)を用いて開発されています。
また、ただサンプルコードを実行するだけでなく、重要な箇所を実際に実装しながら、内容を理解し、かつ実践的な実装能力を身につけられるように設計されています。
具体的には、以下の形式で問題が提示され､コードを実装しながら理解を深めていきます｡
例えば、「数値を6倍にする」関数を実装する問題の場合、以下のコードの形で実装箇所が`...`に置き換えられた状態で提示されます｡

```py
def solution(val):
    val = ...  # TODO Multiply `val` by 6.
    return val
```
問題としては、この例のように右辺のみを実装する形式と、式全体を実装する形式の2種類があります｡
実装した関数は、`test_func`関数を用いてテストできます。
```py
test_func(solution, "**_**")  # 番号は各問題に対応
```
どうしても解けない場合は、解答を表示する`show_solution`関数が用意されているので、適宜活用してください｡
```py
show_solution("**_**")  # 番号は各問題に対応
```

また、RC bootcampは[Google Colaboratory (Colab)](https://colab.google/)上での実行とローカル([`uv`](https://docs.astral.sh/uv/)と[`VSCode`](https://code.visualstudio.com/)を用いた方法を推奨)での実行の両方に対応しています｡
一部の章はColab上で動作せず、ローカルでの実行が必要となります。
ローカルでの実行方法については、後述の[「ローカル環境の構築」](#ローカル環境の構築)セクションを参照してください｡

## 各章の内容
問題編と解答編の2種類が用意されています｡
問題編は上記の通り穴埋め箇所が`...`で示されていますが、解答編は全て実装済みの状態で提供されています｡
もし手っ取り早く結果のみを確認したい場合は、解答編を参照してください。
ただし、実装の理解を深めるために最初は問題編から取り組むことをお勧めします｡

### I. Python / NumPy基礎
第1章と第2章では、RCの前に[**Python**](https://www.python.org/)および[**NumPy**](https://numpy.org/)の基礎を学びます｡
このRC bootcampでは全体を通してPythonが用いられています。
第1章ではPythonを用い、コンピュータ科学やプログラミングに関する基本 (構文やアルゴリズムなど) から紹介されています。
またNumPyはPythonにおける数値計算ライブラリであり、効率的な数値計算を行う上で不可欠です｡
第2章ではNumPyの基本的な使い方や便利なテクニックについて学びます｡
なお、これらの章は主にコンピュータ科学やプログラミングに不慣れな方向けの内容となっており、既にPythonやNumPyにある程度習熟している場合は、飛ばしても構いません｡

| | |問題|解答|
|---|---|:---:|:---:|
| 01 | Python basics | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/01_python_basics.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/01_python_basics.ipynb) |
| 02 | NumPy basics | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/02_numpy_basics.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/02_numpy_basics.ipynb) |

### II. RCの基礎
第3章から第8章では、RCの基礎的な概念や手法について学びます｡
第3章では、 **エコーステートネットワーク (Echo State Network; ESN)** の実装を通して、RCの基本的な仕組みを理解します｡
第4章では、RCで頻繁に登場する **ハイパーパラメータの調整方法** について学びます｡
第5章では、**非線形力学系理論** に基づく重要な概念や解析手法を扱います。
そして力学系的解析を用いたリザバーの評価を行います｡
第6章では、**記憶容量 (Memory Capacity; MC)** とよばれる指標の実装を通して、リザバーの記憶特性を評価する方法を学びます｡
第7章では、**情報処理容量 (Information Processing Capacity; IPC)** とよばれる指標を学習します。
IPCはMCを拡張した指標で、リザバーの情報処理能力をより包括的に評価できます｡
この章は研究室で開発されPyPIで公開されている[**`ipc-module`**](https://rc-bootcamp.github.io/ipc-module/) ([PyPIリンク](https://pypi.org/project/ipc-module/))の説明を兼ねており、実際に`ipc-module`を用いてIPCを計算する方法を学びます｡
第8章では、**閉ループ制御 (closed-loop control)** とよばれる、出力がリザバーの入力にフィードバックされる閉ループ系におけるRCの応用について学びます｡

なお第7章は、後半部分に計算負荷の高い処理を含んでおり、GPU環境でないと非常に時間がかかる場合があります。
ColabではGPUランタイムを一部無償で利用できるため、Colab上で実行する場合は、GPUランタイムを選択してください (右上の「ランタイムのタイプを変更」から変更可能)。

| | |問題|解答|
|---|---|:---:|:---:|
| 03 | ESN basics | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/03_esn_basics.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/03_esn_basics.ipynb) |
| 04 | ESN fine tuning | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/04_esn_fine_tuning.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/04_esn_fine_tuning.ipynb) |
| 05 | ESN dynamics | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/05_esn_dynamics.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/05_esn_dynamics.ipynb) |
| 06 | memory capacity | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/06_memory_capacity.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/06_memory_capacity.ipynb) |
| 07 | information processing capacity | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/07_information_processing_capacity.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/07_information_processing_capacity.ipynb) |
| 08 | closed loop control | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/08_closed_loop_control.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/08_closed_loop_control.ipynb) |

### III. より発展的な内容
残りの章はRC研究における発展的なトピックを扱います｡
第9章では、リザバー特にESNの内部結合を学習する方法を学びます｡
特に高次元カオス軌道を自在に操る **生得的学習 (innate training)** を実装します。
第10章では、力学系分野における分岐 (bifurcation) 現象を活用して、少数データから背後の教師力学系の構造を学習する、**分岐埋め込み (bifurcation embedding)** を実装します。
第11章では、近年長期記憶を実現するリカレントニューラルネットワークとして注目されている**状態空間モデル (State Space Model; SSM)** を実装します｡

なお第9章は以下に示されるGoogle Colaboratory (Colab) 上では一部動作しません。
後述の[「ローカル環境の構築」](#ローカル環境の構築)に関する説明を参考に、ローカル環境で実行してください｡
また第11章は第7章同様に、GPUを用いないと時間がかかる処理を含んでいます。
Colab上で実行する場合は、GPUランタイムを選択してください (右上の「ランタイムのタイプを変更」から変更可能)。

| | |問題|解答|
|---|---|:---:|:---:|
| 09 | internal optimization | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/09_internal_optimization.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/09_internal_optimization.ipynb) |
| 10 | bifurcation embedding | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/10_bifurcation_embedding.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/10_bifurcation_embedding.ipynb) |
| 11 | state space model | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja/11_state_space_model.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/ja_sol/11_state_space_model.ipynb) |

## ローカル環境の構築
RC bootcampはローカル環境でも実行可能です。
特に今後研究や開発でRCを活用したい場合は、ローカル環境、特に[`uv`](https://docs.astral.sh/uv/)と[`VSCode`](https://code.visualstudio.com/)を用いた環境の構築をお勧めします｡
以下のリンクよりzipファイルをダウンロードし、`README`に従って環境を構築してください｡
- [GitHubよりzipファイルのダウンロード(問題)](https://github.com/rc-bootcamp/rc-bootcamp/archive/refs/heads/ja.zip)
- [GitHubよりzipファイルのダウンロード(解答)](https://github.com/rc-bootcamp/rc-bootcamp/archive/refs/heads/ja_sol.zip)

`README`は[公式のリポジトリ内](https://github.com/rc-bootcamp/rc-bootcamp/blob/ja/README.md)からも参照可能です｡

## ライセンス
RC bootcampは[MITライセンス](https://opensource.org/licenses/MIT)の下で提供されています｡
自由に利用、改変、再配布が可能です｡
ただし、著作権表示および本許諾表示をソフトウェアの全てのコピーまたは重要な部分に含める必要があります｡

## 貢献
RC bootcampへの貢献を歓迎します。

### 不具合の報告
不具合や誤字脱字、改善の提案などがありましたら、[GitHub Issuesページ](https://github.com/rc-bootcamp/rc-bootcamp/issues)で報告してください。

### コードへの貢献
より大幅な改変や新機能の追加(例えば新しい章やローカライズなど)を行いたい場合は、ぜひコードへの貢献をお願いします。
その場合リポジトリをフォークして変更を加え、GitHubでプルリクエストを出してください。
貢献前に[developer README](https://github.com/rc-bootcamp/rc-bootcamp/blob/main/README.md)と[contribution guidelines](https://github.com/rc-bootcamp/rc-bootcamp/blob/main/CONTRIBUTING.md)を読み、既存のコードスタイルに従ってください。
開発者がレビューして、承認・却下、または変更の依頼を行います。

### 引用
RC bootcampを引用する場合は、以下の情報を参照してください。

```bibtex
@article{inoue2026reservoir,
  title   = {Reservoir Computing Bootcamp---{{From Python}}/{{NumPy}} Tutorial for the Complete Beginners to Cutting-Edge Research Topics of Reservoir Computing},
  author  = {Inoue, Katsuma and Kubota, Tomoyuki and Hoan Tran, Quoc and Akashi, Nozomi and Terajima, Ryo and Kabayama, Tempei and Guan, JingChuan and Nakajima, Kohei},
  year    = 2026,
  month   = feb,
  journal = {Chaos: An Interdisciplinary Journal of Nonlinear Science},
  volume  = {36},
  number  = {2},
  pages   = {023109},
  issn    = {1054-1500},
  doi     = {10.1063/5.0283386}
}
```

## お問い合わせ
RC bootcampに関する質問やフィードバックは、メールアドレス `k-inoue[at]isi.imi.i.u-tokyo.ac.jp` までご連絡ください｡
