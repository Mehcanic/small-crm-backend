import { Router } from 'express';

import customerController from '../controllers/customerController';

const router = Router();

router.get('/', customerController.getAllCustomers);

// router.post('/', customerController.createCustomer);


export default router;