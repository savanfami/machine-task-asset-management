import { Sequelize } from "sequelize";

const sequelize = new Sequelize("asset_management", "postgres", "savan@1239", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging:false
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