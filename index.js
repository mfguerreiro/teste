import express from "express";

const app = express();

app.use(express.json());

app.use("/teste", () => {
    console.log('rota teste 2');
});

export { app };
