import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

const app = express();

app.use(cors());
