const express = require('express')
const router = express.Router()
const TaskController = require('../controller/TaskController')

//SETANDO ROTAS DO CONTROLLER
router.get('/', TaskController.getAllTasks)
router.post('/create', TaskController.createTask)
router.get('/getById/:id/:method', TaskController.getById)
router.post('/updateOne/:id', TaskController.updateTask)
router.get('/deleteOne/:id', TaskController.deleteOneTask )


module.exports = router