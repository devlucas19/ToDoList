const Task = require('../models/task')


// FUNÇÕES DO CONTROLLER

const getAllTasks = async (req, res) => {

    try {
        const tasksList = await Task.find()
        return res.render('index', {tasksList, task: null, taskDelete:null})
    } catch (err) {
        res.status(500).send({error: err.message})
    }
};

const createTask = async (req, res) => {
    const task = req.body;

    if (!task) {
        return res.redirect('/')
    }

    try {
        await Task.create(task)
        console.log(task)
        return res.redirect('/')
    } catch(err) {
        res.status(500).send({error: err.message})
    }

};

const getById = async (req, res) => {
    
    try {
        const tasksList = await Task.find()
        if (req.params.method == "update") {
            const task = await Task.findOne({ _id: req.params.id })
            res.render('index', {task, taskDelete:null, tasksList})
        } else {
            const taskDelete = await Task.findOne({ _id: req.params.id })
            res.render('index', {task:true, taskDelete, tasksList})
            }
        } catch (err) {
        res.status(500).send({error: err.message})
        }
}
    
const updateTask = async(req, res) => {
    try {
        const task = req.body
        await Task.updateOne({ _id: req.params.id }, task)
        res.redirect('/')
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

const deleteOneTask = async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.params.id })
        res.redirect('/')
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateTask,
    deleteOneTask
};