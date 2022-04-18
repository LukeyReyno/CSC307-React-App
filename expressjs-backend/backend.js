const express = require('express');
const cors = require('cors');
const userServices = require('./models/user-services');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/users', (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    if (job != undefined && name != undefined){
        let result = findUserByNameAndJob(job, name);
        result = {users_list: result};
        res.send(result);
    }
    else if (job != undefined){
        let result = findUserByJob(job);
        result = {users_list: result};
        res.send(result);
    }
    else if (name != undefined){
        let result = findUserByName(name);
        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    userToAdd.id = idGen().toString();
    addUser(userToAdd);
    res.status(201).send(userToAdd);
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    let result_array = deleteUser(id);
    if (result_array === undefined || result_array.length == 0)
        res.status(404).send('Resource not found.\n');
    else {
        res.status(204).end();
    }
});

function deleteUser(id) {
    const index = users['users_list'].findIndex((user) => user['id'] === id);
    if (index == -1)
        return undefined;
    return users['users_list'].splice(index, 1);
}
