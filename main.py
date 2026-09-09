import joblib
from fastapi import FastAPI
import boto3

app = FastAPI()

# Load the trained model (optional, if you want to use it later)
try:
    model = joblib.load("idle_vm_model.pkl")
except Exception:
    model = None

# Connect to Localstack EC2
ec2 = boto3.client(
    "ec2",
    region_name="us-east-1",
    aws_access_key_id="test",
    aws_secret_access_key="test",
    endpoint_url="http://localhost:4566"
)

@app.get("/")
def read_root():
    return {"message": "FastAPI is working!"}

@app.post("/predict")
def predict(cpu_usage: float,
            memory_usage: float,
            instance_id: str,
            cpu_cutoff: float = 20.0,       # default cutoff
            memory_cutoff: float = 30.0):   # default cutoff
    """
    Decide idle vs running based on usage vs cutoffs.
    """
    if cpu_usage < cpu_cutoff and memory_usage < memory_cutoff:
        ec2.stop_instances(InstanceIds=[instance_id])
        return {"instance_id": instance_id, "status": "stopped"}
    else:
        ec2.start_instances(InstanceIds=[instance_id])
        return {"instance_id": instance_id, "status": "running"}
