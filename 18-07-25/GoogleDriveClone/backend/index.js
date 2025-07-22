import express from 'express';
import fs from 'fs';
import cors from 'cors';



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// List files in current directory
app.get('/', (req, res) => {
  try {
    const allItems = fs.readdirSync('.');
    const filtered = allItems.filter(
      item => item !== 'node_modules' && item !== 'package.json' && item !== 'package-lock.json'
    );

    const result = filtered.map(item => {
      const stats = fs.statSync(item);
      return {
        name: item,
        isDirectory: stats.isDirectory(),
        modified: stats.mtime,
        size: stats.isDirectory() ? null : stats.size
      };
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Unable to list files");
  }
});


// Create a new file with content
app.post('/upload-file', (req, res) => {
  const { fileName, content } = req.body;

  if (!fileName || !content) {
    return res.status(400).send("fileName and content are required");
  }

  try {
    fs.writeFileSync(fileName, content);
    console.log(`File '${fileName}' created successfully.`);
    res.send("FILE CREATED");
  } catch (error) {
    console.error("Error writing file:", error);
    res.status(500).send("Error creating file");
  }
});

// Create a new directory
app.post('/upload-dir', (req, res) => {
  const { dirName } = req.body;

  if (!dirName) {
    return res.status(400).send("dirName is required");
  }

  try {
    fs.mkdirSync(dirName);
    console.log(`Directory '${dirName}' created successfully.`);
    res.send("FOLDER CREATED");
  } catch (error) {
    console.error("Error creating folder:", error);
    res.status(500).send("Error creating folder");
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
