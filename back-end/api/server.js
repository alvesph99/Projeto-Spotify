import express, { request, response } from "express";
import { db } from "./connect.js";
import cors from "cors";
//traz uma aplicação/função pra um variável

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

//Precisa de async pra usar await
app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

//GET request -> puxa do MongoDb a collection de songs e entrega como array
app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
