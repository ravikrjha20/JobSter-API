require("dotenv").config();
const jobs= require("./models/Job");
const Users = require("./MOCK_DATA.json");
const connectDB = require("./db/connect");
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await jobs.deleteMany({})
    await jobs.create(Users);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log("failure");
    process.exit(1);
  }
};
start();
