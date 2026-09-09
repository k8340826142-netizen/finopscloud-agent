import pandas as pd
from sklearn.tree import DecisionTreeClassifier

# Load dataset
data = pd.read_csv("vm_data_usage.csv")

# Features and labels
X = data[["cpu_usage", "memory_usage"]]
y = data["is_idle"]

# Train a simple Decision Tree
model = DecisionTreeClassifier()
model.fit(X, y)

# Test prediction
sample = [[15, 25]]  # Example: 15% CPU, 25% memory
prediction = model.predict(sample)
print("Prediction for sample VM:", "Idle" if prediction[0] == 1 else "Active")
vm_id,cpu_usage,memory_usage,is_idle
vm1,5,20,1
vm2,60,70,0
vm3,10,15,1
vm4,80,90,0
import pandas as pd
from sklearn.tree import DecisionTreeClassifier

# Load dataset
data = pd.read_csv("vm_data_usage.csv")

# Features and labels
X = data[["cpu_usage", "memory_usage"]]
y = data["is_idle"]

# Train a simple Decision Tree
model = DecisionTreeClassifier()
model.fit(X, y)

# Test prediction
sample = [[15, 25]]  # Example: 15% CPU, 25% memory
prediction = model.predict(sample)
print("Prediction for sample VM:", "Idle" if prediction[0] == 1 else "Active")