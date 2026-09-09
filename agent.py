from fastapi import FastAPI
import pandas as pd
import boto3
from sklearn.tree import DecisionTreeClassifier

# Initialize FastAPI app
app = FastAPI(title="Idle VM AI Agent")

# Train your model (simplified example)
data = pd.read_csv("vm_data_usage.csv")
X = data[["cpu_usage", "memory_usage"]]
y = data["is_idle"]


model = DecisionTreeClassifier()
model.fit(X, y)

# Connect to LocalStack EC2
ec2 = boto3.client(
    "ec2",
    region_name="us-east-1",
    endpoint_url="http://localhost:4566"
)

@app.get("/")
def root():
    return {"message": "Idle VM AI Agent is running!"}

@app.post("/predict")
def predict_vm(cpu_usage: float, memory_usage: float, instance_id: str):
    print(cpu_usage, memory_usage)
    prediction = model.predict([[cpu_usage, memory_usage]])[0]
    if prediction == 1:  # Idle
        ec2.stop_instances(InstanceIds=[instance_id])
        return {"instance_id": instance_id, "status": "stopped"}
    else:
        return {"instance_id": instance_id, "status": "active"}
