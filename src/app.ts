import createServer from "./config/server";

const server = createServer();
const PORT = process.env.PORT || 3000;



server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})

