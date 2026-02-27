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


## Overview
**RC bootcamp** is a hands-on resource for beginners in reservoir computing (RC).
It covers core concepts and practical methods of RC across a series of chapters.
The content helps newcomers gain practical skills quickly while covering current research topics.
The platform simplifies localization workflows and currently offers English and Japanese editions.
This page presents the English edition.

{{< toc >}}

## Practical exercises with Jupyter Notebooks
Each chapter is provided as a [Jupyter Notebook](https://jupyter.org/).
Exercises require you to implement core parts rather than just running example code.
This format helps you understand concepts and develop practical coding skills.
All exercises use a consistent format: fill in missing code to reinforce learning.
For example, a task asking you to implement a function that multiplies its input by six shows the missing code as `...`, as in the example below.

```py
def solution(val):
    val = ...  # TODO Multiply `val` by 6.
    return val
```
There are two exercise types: fill only the right-hand side of an expression or implement the full expression.
Validate your implementation using the `test_func` helper.

```py
test_func(solution, "**_**")  # Replace ** with the relevant exercise number.
```

If you cannot solve an exercise, use `show_solution` to reveal the answer.
```py
show_solution("**_**")  # Replace ** with the relevant exercise number.
```

RC bootcamp supports execution on Google Colaboratory (Colab) and on local machines.
For local use, we recommend [`uv`](https://docs.astral.sh/uv/) and [`VSCode`](https://code.visualstudio.com/).
Some chapters cannot run on Colab; see the [Setup for local environment](#setup-for-local-environment) section below for installation and execution instructions.

## Contents of each chapter
Each chapter has two editions: exercise notebooks with `...` placeholders and solution notebooks with complete implementations.
Use the solution edition to quickly check the results.
Use the exercise edition to deepen your understanding by implementing the missing code.

### I. Python / NumPy basics
Chapters 1 and 2 cover the [**Python**](https://www.python.org/) and [**NumPy**](https://numpy.org/) basics needed for RC.
Python is used throughout the bootcamp.
Chapter 1 introduces core programming and computer science concepts, including syntax and basic algorithms.
Chapter 2 covers NumPy, the main library for efficient array-based numerical computation in Python, and explains its common usage and techniques.
These chapters are for readers with limited programming experience.
Skip them if you are already comfortable with Python and NumPy.

| | |Exercise|Solution|
|---|---|:---:|:---:|
| 01 | Python basics | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/01_python_basics.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/01_python_basics.ipynb) |
| 02 | NumPy basics | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/02_numpy_basics.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/02_numpy_basics.ipynb) |

### II. Basics of RC
Chapters 3–8 cover the core concepts and practical methods of RC.
Chapter 3 walks you through implementing an **echo state network (ESN)** to explain the basic mechanism of RC.
Chapter 4 explains practical approaches to **hyperparameter tuning** commonly used in RC.
Chapter 5 introduces key concepts and analysis methods from **nonlinear dynamical-systems theory** and uses dynamical analysis to evaluate reservoirs.
Chapter 6 shows how to evaluate reservoir memory by implementing **memory capacity (MC)**.
Chapter 7 presents **information processing capacity (IPC)**, an extension of MC that provides a broader measure of reservoir information processing.
In this chapter, you will learn how to compute IPC using the [**`ipc-module`**](https://rc-bootcamp.github.io/ipc-module/) ([PyPI link](https://pypi.org/project/ipc-module/)), a Python library developed in our lab and published on PyPI.
Chapter 8 covers **closed‑loop control**, where the reservoir output is fed back into its input for control tasks.

Note: the latter part of Chapter 7 includes compute‑intensive steps that may run very slowly on CPUs.
In Colab, enable a GPU runtime (Change runtime type) to accelerate execution.
Colab offers limited free GPU time.

| | |Exercise|Solution|
|---|---|:---:|:---:|
| 03 | ESN basics | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/03_esn_basics.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/03_esn_basics.ipynb) |
| 04 | ESN fine tuning | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/04_esn_fine_tuning.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/04_esn_fine_tuning.ipynb) |
| 05 | ESN dynamics | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/05_esn_dynamics.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/05_esn_dynamics.ipynb) |
| 06 | memory capacity | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/06_memory_capacity.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/06_memory_capacity.ipynb) |
| 07 | information processing capacity | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/07_information_processing_capacity.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/07_information_processing_capacity.ipynb) |
| 08 | closed loop control | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/08_closed_loop_control.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/08_closed_loop_control.ipynb) |

### III. More advanced topics
The remaining chapters cover advanced research topics in RC.
Chapter 9 explains how to train internal reservoir connections, including ESNs, and implements **innate training** to control high‑dimensional chaotic trajectories.
Chapter 10 implements **bifurcation embedding**, which uses bifurcation phenomena to learn a teacher system's structure from limited data.
Chapter 11 implements a **state space model (SSM)**, a class of recurrent models known for long-term memory capabilities.

Note: Chapter 9 does not fully run on Colab.
Please follow [the local execution instructions below](#setup-for-local-environment) and run this chapter locally.

Also note that Chapter 11, like Chapter 7, contains computationally intensive steps that are slow without a GPU.
If you run it on Colab, enable a GPU runtime (change it via "Change runtime type" in the top-right) to speed up execution.

| | |Exercise|Solution|
|---|---|:---:|:---:|
| 09 | internal optimization | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/09_internal_optimization.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/09_internal_optimization.ipynb) |
| 10 | bifurcation embedding | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/10_bifurcation_embedding.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/10_bifurcation_embedding.ipynb) |
| 11 | state space model | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en/11_state_space_model.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/rc-bootcamp/rc-bootcamp/blob/en_sol/11_state_space_model.ipynb) |

## Setup for local environment
RC bootcamp can be run locally.
For research or development, we recommend setting up a local environment using [`uv`](https://docs.astral.sh/uv/) and [`VSCode`](https://code.visualstudio.com/).
Download the zip archive from the links below and follow the instructions to set up the environment.
- [Download zip archive from GitHub (exercise edition)](https://github.com/rc-bootcamp/rc-bootcamp/archive/refs/heads/en.zip)
- [Download zip archive from GitHub (solution edition)](https://github.com/rc-bootcamp/rc-bootcamp/archive/refs/heads/en_sol.zip)

The `README` is also available in the repository: https://github.com/rc-bootcamp/rc-bootcamp/blob/en/README.md

## License
RC bootcamp is released under the [MIT License](https://opensource.org/licenses/MIT).
You are free to use, modify, and redistribute the material.
Please include the copyright notice and this permission notice in all copies or substantial portions of the software.

## Contributing
We welcome contributions to improve RC bootcamp.

### Reporting issues
If you find issues, typos, or have suggestions for improvement, please report them on the [GitHub Issues page](https://github.com/rc-bootcamp/rc-bootcamp/issues).

### Contributing code
If you would like to make substantial changes or add new features (e.g., new chapters or localization), please consider contributing code.
Before contributing, read the [developer README](https://github.com/rc-bootcamp/rc-bootcamp/blob/main/README.md) and [contribution guidelines](https://github.com/rc-bootcamp/rc-bootcamp/blob/main/CONTRIBUTING.md) and follow the coding style in the existing codebase.
Maintainers will review PRs, provide feedback, and approve, decline, or request changes.

### Citation
If you use RC bootcamp in your research or publications, please cite the paper below.

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

## Contact
For questions or feedback about RC bootcamp, email `k-inoue[at]isi.imi.i.u-tokyo.ac.jp`.
