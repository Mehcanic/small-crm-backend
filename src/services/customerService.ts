import prisma from "../config/database";
import CustomCustomer from '../models/Customer';


const getAllCustomers = async (): Promise<CustomCustomer[]> => {
  const customers = await prisma.customer.findMany();
  return customers.map((customer: CustomCustomer) => {
    return {
      customer_id: customer.customer_id,
      first_name: customer.first_name,
      last_name: customer.last_name,
      email: customer.email,
      phone: customer.phone,
      billing_address: customer.billing_address,
      shipping_address: customer.shipping_address,
    }});
};


// const getCustomerById = async (id: number): Promise<Customer[] | null> => {
//   return await prisma.customer.findUnique({
//     where: {
//       id: id
//     }
//   })
// }


// const createCustomer = async (newCustomerData: CustomCustomer): Promise<CustomCustomer> => {
//   const { customer_id, ...rest } = newCustomerData;
//   return await prisma.customer.create({
//     data: {
//       customer_id: customer_id,
//       ...rest
//     }
//   })
// }


// const updateCustomer = async (id: number, customerData: Partial<Customer>): Promise<Customer | null> => {
//   return await prisma.user.update({
//       where: { id: id },
//       data: customerData,
//   });
// };

// const deleteCustomer = async (id: number): Promise<Customer | null> => {
//     return await prisma.customer.delete({
//         where: { id: id },
//     });
// };

export default {
  getAllCustomers,
  // getCustomerById,
  // createCustomer,
  // updateCustomer,
  // deleteCustomer
}
