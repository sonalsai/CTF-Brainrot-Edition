export const generateTelemetry = (message) => {
  // ASCII to Binary String
  let binaryString = "";
  for (let i = 0; i < message.length; i++) {
    const bin = message.charCodeAt(i).toString(2).padStart(8, "0");
    binaryString += bin;
  }

  // Generate lines
  const lines = [];
  let bitIndex = 0;
  // Total lines needed
  const totalLines = binaryString.length * 60 + 100;

  for (let i = 1; i <= totalLines; i++) {
    const isTargetLine = i % 60 === 0;
    let sig = "0.0001";

    if (isTargetLine && bitIndex < binaryString.length) {
      const bit = binaryString[bitIndex];
      if (bit === "1") {
        sig = "0.0002";
      }
      bitIndex++;
    }

    // Timestamp format: TS=HH:MM:SS
    // Using i seconds
    const hours = Math.floor(i / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((i % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (i % 60).toString().padStart(2, "0");

    lines.push(`TS=${hours}:${minutes}:${seconds} | SIG=${sig}`);
  }

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "telemetry.log";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
