import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const name = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;
const sequelize = new Sequelize(name, "postgres", password, {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

export default sequelize;
