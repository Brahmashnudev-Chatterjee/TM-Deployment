import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "dist");

// Serve React static files
app.use(express.static(distPath));

// Send React's index.html for all other requests
app.use((req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});