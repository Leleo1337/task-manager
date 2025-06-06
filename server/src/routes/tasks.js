import express from 'express'
import { createTask, deleteTask, filteredTasks, getAllTasks, getTask, getTaskBySearch, updateTask } from '../controllers/tasks.js'

const router = express.Router()

// api/v1/tasks
router.get('/', getAllTasks)
router.get('/search', getTaskBySearch)
router.get('/filter',filteredTasks)
router.get('/:id', getTask)
router.post('/', createTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router