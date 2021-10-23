import express from "express";
const router = express.Router();

// CONTROLLERS
import {
  getProducts,
  getProductById,
  getGames,
  getGameById,
  getConsoles,
  getConsoleById,
  getAccessories,
  getAccessoryById,
  getMerchandises,
  getMerchandiseById,
  searchProducts,
} from "../controller/productControllers.js";

router.route("/search").post(searchProducts);

router.route("/games").get(getGames);
router.route("/games/:id").get(getGameById);

router.route("/consoles").get(getConsoles);
router.route("/consoles/:id").get(getConsoleById);

router.route("/accessories").get(getAccessories);
router.route("/accessories/:id").get(getAccessoryById);

router.route("/merchandises").get(getMerchandises);
router.route("/merchandises/:id").get(getMerchandiseById);

// router.route("/").get(getProducts);
// router.route("/:id").get(getProductById);

export default router;
