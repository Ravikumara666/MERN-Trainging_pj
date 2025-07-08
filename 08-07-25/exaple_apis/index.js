
import express from 'express';
import router from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRoute from './routes/comments.route.js';

const app = express();

app.use("/ravi",commentRoute)
app.use("/ravi",postRouter)
app.use("/ravi",router)
app.get("/ravi", (req, res) => {
  res.send("This is Working");
});
app.listen(3000, () => {
  console.log("Server is Connected and listening on port 3000");
  
});
