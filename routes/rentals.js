const express = require("express");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const houses = await prisma.rental.findMany();
  res.send(houses);
});

module.exports = router;
