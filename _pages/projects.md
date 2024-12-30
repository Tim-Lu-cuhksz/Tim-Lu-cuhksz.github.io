---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
redirect_from:
  - /projects
---

{% include base_path %}
## Self-Trained Decision Transformer

_ECE750-T40 Course Project_

* Collect offline reinforcement learning data from the racetrack-v0 environment based on [HighwayEnv](https://github.com/Farama-Foundation/HighwayEnv) using a pre-trained Proximal Policy Optimization (PPO) model

* Propose a framework that trains a Decision Transformer (DT) using a dataset with part of its data collected by the DT itself to address the issue when data is scarce

* Our experimental evaluation suggests that the proposed framework achieves better performance than the original DT in racetrack-v0

Codes are available [here](https://github.com/Tim-Lu-cuhksz/STDT). 

[Download report here](http://tim-lu-cuhksz.github.io/files/ECE_750_T40_Final_Report.pdf).


## Comparative Anime Recommendation System Exploration with DualTaste Recommender

_EIE3280 Course Project, Supervised by Professor Jianwei Huang_

* Perform meticulous data pre processing techniques (Adaboost algorithm combined with Support Vector Regressor) on the dataset to fill in the unknown fields

* Verify the performance of two collaborative filtering methods: Alternating Least Squares (ALS) and Neural Collaborative Filtering (NCF)

* Propose a novel content based method (DualTaste Anime Recommender DTAR ), in which the
user’s specific preference and the general trends (calculated via Bayesian rating) are taken into consideration. We devise a special weight parameter to aggregate the two components together

* Adaboost.SVR is applied to address the cold start problem and attains relatively good performance

* By applying Borda count voting method, we combine the results of the three algorithms (ALS, NCF, DTAR) into a hybrid answer


[Download report here](http://tim-lu-cuhksz.github.io/files/EIE3280.pdf).

## Self-Supervised Federated Learning on Non-iid Data
_Final Year Project, Supervised by Professor Xiaoying Tang_

* Apply contrastive self supervised learning technique including SimCLR , BYOL, and SimSiam to perform image classification task on CIFAR 10 and CIFAR 100 in a federated learning setting with Dirichlet sampling
* Conduct experiments on personalized self-supervised federated learning method by introducing an additional l-2 loss function to each client with a regularizer to minimize the distance between the global model and local model

[Download report here](http://tim-lu-cuhksz.github.io/files/FYP.pdf).

## Database Management System Implementation
* Collaboratively implemented a miniature relational database management system (DBMS) that stores tables of data, where a table consists of some number of labeled columns of information
* Our system uses very restricted dialect of Structured Query Language (SQL) and accepts a sequence of commands from the standard input in the terminal for data insertion and extraction. The functionalities we support include create, load, insert, select from multiple tables with conditions, order by columns, case insensitivity, syntax and syntactic errors recognition, etc.

Please find our codes in our [Github Repo](https://github.com/CSC3170-2022Fall/project-microhard).

## Simplified Virtual Memory and File System (C/C++)

* Implemented a virtual memory system including an inverted page table and least recently used (LRU) page replacement algorithm. CPU physical memory and disk storage were simulated by CUDA GPU shared memory and global memory repectively
* Built a file system via contiguous allocation including a volume control block, a single-root directory, and a file control block
* Contructed a device (n-th prime number calculator) under /dev with file operations (e.g., ioctl that changes device configurations) implemented in kernel module

Please find my codes in my [Github Repo](https://github.com/Tim-Lu-cuhksz/Operating-Systems).

## MIPS Assembler and 5-Pipelined CPU
* Built up a 5 pipelined CPU that interprets machine code, performs arithmetic operations, and stores and loads data in Verilog in the main memory. The CPU mainly consists of an arithmetic logic unit (ALU), a control unit and a main memory
* Devised a virtual MIPS instruction set architecture (ISA) assembler and simulator which “translate” assembly language into machine codes and execute them in C

Please find my codes in my [Github Repo](https://github.com/Tim-Lu-cuhksz/mips-assembler).