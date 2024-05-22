import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const port = process.env.PORT || 8000;
import {} from "dotenv/config";

const app = express();

//Body parser middleware

//Takes care of submitting raw JSON
app.use(express.json());
//Takes care of URL encoded data
app.use(express.urlencoded({ extended: false }));

//setup static folder
//app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server running on port ${port}`));
