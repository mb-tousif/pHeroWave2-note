import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDB from './Utilities/server';

dotenv.config();

const port = process.env.PORT || 2023;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

ConnectDB();

app.get("/", (req, res) => {
    res.send(
      "<h1 style='text-align: center; padding: 20px; color:#753a88'><span style='color: green'>🛢 </span>Server is successfully running 🚀</h1>"
    );
  });
  
//   app.use("/api/v1", userRouter);
  
  app.all("*", (req, res) => {
    res.send(
      "<h1 style='text-align: center; padding: 20px; color:red; margin-top: 4rem'>🚦 Requested Route Not Found 💥</h1>"
    );
  });
  
  app.listen(port, () => {
    console.log(`Server running on PORT: 🚀 ${port}`);
  });