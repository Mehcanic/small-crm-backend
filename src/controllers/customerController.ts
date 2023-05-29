import express from 'express';
import customerService from '../services/customerService';

// Get all users
const getAllCustomers = async (req: express.Request, res: express.Response) => {
    try {
        const customers = await customerService.getAllCustomers();
        res.json(customers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get user by ID
// const getUserById = async (req: express.Request, res: express.Response) => {
//     const userId = Number(req.params.id);

//     try {
//         const user = await userService.getUserById(userId);

//         if (!user) {
//             res.status(404).json({ error: 'User not found' });
//         } else {
//             res.json(user);
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// // Create a new user
// const createCustomer = async (req: express.Request, res: express.Response) => {
//     const userData = req.body;

//     try {
//         const newCustomer = await customerService.createCustomer(customerData);
//         res.status(201).json(newCustomer);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// // Update a user
// const updateUser = async (req: express.Request, res: express.Response) => {
//     const userId = Number(req.params.id);
//     const userData = req.body;

//     try {
//         const updatedUser = await userService.updateUser(userId, userData);

//         if (!updatedUser) {
//             res.status(404).json({ error: 'User not found' });
//         } else {
//             res.json(updatedUser);
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// // Delete a user
// const deleteUser = async (req: express.Request, res: express.Response) => {
//     const userId = Number(req.params.id);

//     try {
//         const deletedUser = await userService.deleteUser(userId);

//         if (!deletedUser) {
//             res.status(404).json({ error: 'User not found' });
//         } else {
//             res.json({ message: 'User deleted successfully' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };


export default {
  getAllCustomers,
  // getUserById,
//   createCustomer,
  // updateUser,
  // deleteUser,
};