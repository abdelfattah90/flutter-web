const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Flutter web build directory
app.use(express.static(path.join(__dirname, 'build/web')));

// Serve index.html for all other routes to support Single Page Application (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/web/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
