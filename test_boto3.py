import boto3

# Connect to Localstack EC2
ec2 = boto3.client(
    "ec2",
    endpoint_url="http://localhost:4566",
    aws_access_key_id="test",
    aws_secret_access_key="test",
    region_name="us-east-1"
)

# List all instances
response = ec2.describe_instances()

for reservation in response["Reservations"]:
    for instance in reservation["Instances"]:
        instance_id = instance["InstanceId"]
        state = instance["State"]["Name"]
        print(f"{instance_id} is {state}")

        # Example idle rule: if running, mark as idle and stop
        if state == "running":
            print(f"{instance_id} is idle → stopping...")
            ec2.stop_instances(InstanceIds=[instance_id])
