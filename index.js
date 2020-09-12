import express from 'express';
import { validateCpf } from './cpfValidator.js';

const server = express();

server.use(express.json());

server.get("/validate", (req, res) => {
  return res.json(validateCpf(req.body.cpf));
})

server.listen(4040);