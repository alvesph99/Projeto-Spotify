import { MongoClient } from "mongodb";

// string de conexão
const URI =
  "mongodb+srv://alvesph99:w4oDDaETK3jB5TSt@cluster0.pqh3p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

//instanciação pra criação de um banco de dados chamado spotifyAula

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
