import express from 'express';

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  updateUserActivity,
} from '../controllers/userController.js';

const userRouter = express.Router();

import { verifyUser, verifyAdmin } from '../middleware/authMiddleware.js';

userRouter.get('/', verifyUser, verifyAdmin, getUsers);

userRouter.post('/login', authUser);

userRouter.post('/signup', registerUser);

userRouter.put('/userActivity', verifyUser, updateUserActivity);

userRouter
  .route('/data')
  .get(verifyUser, getUserProfile)
  .put(verifyUser, updateUserProfile);

userRouter
  .route('/:id')
  .delete(verifyUser, verifyAdmin, deleteUser)
  .get(verifyUser, verifyAdmin, getUserById)
  .put(verifyUser, verifyAdmin, updateUser);

export default userRouter;
