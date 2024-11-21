import sequelize from "../config/db.js";
import User from "./user.js";

// Sync all models
await sequelize
  .sync({ force: false })
  .then(() => console.log("Database & tables created!"))
  .catch((error) => console.log("Error syncing database:", error));

export { User };
