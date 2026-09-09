import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import joblib

# Example dataset (replace with your CSV)
data = pd.DataFrame({
    "cpu_usage": [5, 50, 8, 70],
    "memory_usage": [10, 60, 15, 80],
    "status": ["idle", "running", "idle", "running"]
})

X = data[["cpu_usage", "memory_usage"]]
y = data["status"]

clf = DecisionTreeClassifier()
clf.fit(X, y)

joblib.dump(clf, "idle_vm_model.pkl")
print("Model saved as idle_vm_model.pkl")
