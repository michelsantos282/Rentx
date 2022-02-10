import express from "express";

const app = express();

app.get("/", (request, response) => response.json({ message: "Olá Mundo" }));

app.listen(3333, () => console.log("Server is Running"));
