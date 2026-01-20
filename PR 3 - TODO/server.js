const express = require('express');
const app = express();
app.use(express.urlencoded());
app.use(express.static('public'));
app.set("view engine", "ejs");

let tasks = [
    {
        id: 1, // other ids from ejs will be automated with Date.timestamp
        task: 'Troy Baker',
        timeout: 2,
    },
];

tasks.forEach((task, index) => {
    setInterval(() => {
        task.timeout--;
        if (task.timeout <= 0) {
            // console.log(`Task "${task.task}" has expired.`);
            tasks = tasks.filter(t => t !== task);
            clearInterval(this);
        }
    }, task.timeout * 60000); // minute to ms
    // setInterval(() => {
    //     console.log(tasks);
    // }, 5000);
})
app.get('/', (req, res) => {
    res.render('index', { tasks });
})
app.post('/addtask', (req, res) => {
    // console.log(req.body)
    object = { ...req.body, id: Date.now() };
    tasks.push(object);
    res.redirect('/');
})
app.post('/updatetask', (req, res) => {

    const taskIndex = tasks.findIndex(t => {
        // console.log(t.id, req.body.id);
        return t.id == req.body.id
    });
    console.log(taskIndex);
    if (taskIndex != -1) {
        tasks[taskIndex] = req.body;
    }
    // console.log(req.body)
    // console.log(tasks);
    res.redirect('/');
})
app.get('/deletetask/:id', (req, res) => {
    // console.log(req.params)
    tasks = tasks.filter(task => task.id != req.params.id);
    res.redirect('/');
});
app.get('/updatetask/:id', (req, res) => {
    res.render('update', { taskId: req.params.id, task: tasks.find(t => t.id == req.params.id).task, timeout: tasks.find(t => t.id == req.params.id).timeout });
})

app.listen(8049, () => { console.log('Server started at port http://localhost:8049') })