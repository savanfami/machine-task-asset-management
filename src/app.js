import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import employeeRoutes from './routes/employee.routes.js'
import assetCategoryRoutes from './routes/assetCategory.routes.js'
import sequelize from "./config/connection.js";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const PORT = process.env.PORT

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/employees',employeeRoutes)
app.use('/asset-category', assetCategoryRoutes);
app.get("/", (req, res) => {
 res.render("index");
}); 

const startServer = async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync();
    console.log("Database synchronized.");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

startServer();