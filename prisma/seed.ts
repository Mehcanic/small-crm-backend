import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed data here
  const newUser = await prisma.user.create({
    data: {
      user_id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@doe.com',
      phone: '1234567890',
      password: 'password',
      industry: 'Software',
      created_at: new Date(),
    },
  }); 
  console.log(newUser)

  const newCustomer = await prisma.customer.create({
    data: {
      customer_id: 1,
      user_id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@doe.com',
      phone: '1234567890',
      billing_address: '123 Main St, New York, NY 10030',
      shipping_address: '123 Main St, New York, NY 10030',
    },
  });
  console.log(newCustomer);

  const newProperty = await prisma.property.create({
    data: {
      property_id: 1,
      customer_id: 1,
      user_id: 1,
      property_type: 'Car',
      property_details: 'Tesla',
      created_at: new Date(),
    },
  });
  console.log(newProperty);

  const newPropertyCustomField = await prisma.propertyCustomField.create({
    data: {
      field_id: 1,
      property_id: 1,
      field_name: 'Color',
      field_value: 'Red',
      created_at: new Date(),
    },
  });
  console.log(newPropertyCustomField);

  const newOrder = await prisma.order.create({
    data: {
      job_id: 1,
      customer_id: 1,
      user_id: 1,
      job_name: 'Car Repair',
      description: 'Fix the car engine',
      status: 'In Progress',
      start_date: new Date(),
      estimated_end_date: new Date(),
      created_at: new Date(),
    },
  });
  console.log(newOrder);

  const newOrderCustomField = await prisma.orderCustomField.create({
    data: {
      field_id: 1,
      job_id: 1,
      field_name: 'Parts Required',
      field_value: 'Engine Oil, Filters',
      created_at: new Date(),
    },
  });
  console.log(newOrderCustomField);

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
