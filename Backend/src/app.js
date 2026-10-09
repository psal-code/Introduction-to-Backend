import express from "express"; 

const app = express();  //Create an express app

app.use(express.json());

// routes import
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";

// routes declaration
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/post", postRoutes);

// example route: http://localhost:4000/api/v1/users/register

export default app;