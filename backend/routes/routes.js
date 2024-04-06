import express from 'express';
import { getAllUsers, getUser, createUser, updateUser } from '../controllers/UserController.js';

const router = express.Router()

router.get('/', getAllUsers)
//router.get('/:id', getUser)
router.get('/:name', getUser)
router.post('/', createUser) 
router.put('/:name', updateUser)

export default router