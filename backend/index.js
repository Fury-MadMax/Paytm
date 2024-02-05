import express from "express";
import router from "./routes/index";
import cors from "cors";

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);
app.listen(PORT);



