import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"

import UserRolesController from './controllers/userroles-controller.js';

const CONNECTION_STRING = "mongodb://localhost:27017/banger-alert";

mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(express.json());
app.use(cors());

UserRolesController(app);

app.listen(4000);

// Basic endpoint
app.get('/', function (req, res) {
    res.json({
        status: "OK"
    });
});