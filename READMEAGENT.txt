🖥️ Idle VM AI Agent
📌 Overview
Idle VM AI Agent is a multi‑cloud automation tool built with FastAPI and Machine Learning. Its purpose is to detect idle virtual machines (VMs) across cloud providers and automatically shut them down to save costs.

Cloud VMs are expensive when left running without usage. This agent continuously monitors CPU and memory usage, predicts whether a VM is idle using a trained DecisionTree model, and stops idle instances safely.

🚀 Features
FastAPI service with REST endpoints (/status, /predict, /scan)

Machine Learning model (DecisionTree) trained on VM usage data

Multi‑cloud support: AWS, GCP, Azure, Oracle, IBM, DigitalOcean, Linode, Vultr

Background scheduler (apscheduler) to scan and shut down idle VMs automatically

LocalStack integration for safe AWS testing without real costs

Logging of all shutdown actions for auditing

⚙️ How It Works
Collect metrics (CPU, memory) from cloud monitoring services (CloudWatch, Stackdriver, Azure Monitor, OCI Monitoring).

Predict idle vs active using the ML model.

Stop idle instances using provider‑specific APIs.

Run automatically every 10 minutes via background scheduler.

Expose endpoints for manual checks and predictions.

🛠️ Tech Stack
Python (FastAPI, scikit‑learn, pandas, boto3, oci, azure SDKs, google‑cloud SDKs)

LocalStack for AWS simulation

Docker for local testing

APScheduler for automation

Joblib for ML model persistence

📂 Endpoints
GET /status/{provider} → List all instances for a cloud provider

POST /predict → Predict idle vs active for a given VM (manual input)

POST /scan/{provider} → Run idle detection + shutdown across all instances

🔒 Supported Providers
AWS (EC2 + CloudWatch)

Google Cloud (Compute Engine + Monitoring)

Microsoft Azure (VMs + Monitor)

Oracle Cloud Infrastructure (Compute + Monitoring)

IBM Cloud (VPC)

DigitalOcean, Linode, Vultr (via REST APIs)

💡 Use Cases
FinOps automation: reduce cloud bills by shutting down unused VMs.

Dev/Test environments: auto‑stop idle machines after hours.

Multi‑cloud management: one agent to control all providers.

⚠️ Notes
Test first in LocalStack or free tiers before connecting to real accounts.

Stopping instances saves compute costs but storage charges may still apply.

Termination deletes VMs permanently — this agent uses stop, not terminate.