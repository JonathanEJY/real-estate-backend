const express = require("express");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const { type, rooms } = req.query;

  const filters = {};
  if (type) filters.houseType = type;
  if (rooms) filters.beds = { gte: Number(rooms) };

  const houses = await prisma.rental.findMany({
    where: filters,
  });

  res.send(houses);
});

module.exports = router;
