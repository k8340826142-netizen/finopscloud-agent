import React, { useState } from "react";

function Agent() {
  const [cpuUsage, setCpuUsage] = useState("");
  const [memoryUsage, setMemoryUsage] = useState("");
  const [instanceId, setInstanceId] = useState("");
  const [cpuCutoff, setCpuCutoff] = useState("");
  const [memoryCutoff, setMemoryCutoff] = useState("");
  const [result, setResult] = useState(null);

  const runPrediction = () => {
    const url = `http://127.0.0.1:8000/predict?cpu_usage=${cpuUsage}&memory_usage=${memoryUsage}&instance_id=${instanceId}&cpu_cutoff=${cpuCutoff}&memory_cutoff=${memoryCutoff}`;

    fetch(url, {
      method: "POST",
      headers: { "accept": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div>
      <h2>FinOps Agent</h2>
      <input
        type="text"
        placeholder="CPU Usage"
        value={cpuUsage}
        onChange={(e) => setCpuUsage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Memory Usage"
        value={memoryUsage}
        onChange={(e) => setMemoryUsage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Instance ID"
        value={instanceId}
        onChange={(e) => setInstanceId(e.target.value)}
      />
      <input
        type="text"
        placeholder="CPU Cutoff"
        value={cpuCutoff}
        onChange={(e) => setCpuCutoff(e.target.value)}
      />
      <input
        type="text"
        placeholder="Memory Cutoff"
        value={memoryCutoff}
        onChange={(e) => setMemoryCutoff(e.target.value)}
      />
      <button onClick={runPrediction}>Run Prediction</button>

      {result && (
        <div>
          <h3>Prediction Result</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Agent;
