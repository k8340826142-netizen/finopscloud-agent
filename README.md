# FinOps EC2 Automation

## 📌 Overview
This project demonstrates **cloud cost optimization (FinOps)** by automatically detecting idle EC2 instances and shutting them down.  
It uses **Localstack** to simulate AWS services locally, so you can test without incurring real AWS costs.

## 🚀 Features
- Detects EC2 instance states (`running`, `stopped`, `terminated`)
- Identifies idle instances and stops/terminates them
- Works with **Localstack** for free local testing
- Can be extended to real AWS (with proper credentials)

## 🛠️ Tech Stack
- **Python** (boto3 for AWS API calls)
- **Localstack** (AWS simulation)
- **VS Code** (development environment)
- **AWS CLI** (for launching fake instances)

## ⚙️ Setup
1. Install dependencies:
   ```bash
   pip install boto3 localstack awscli
where should i pastethis
