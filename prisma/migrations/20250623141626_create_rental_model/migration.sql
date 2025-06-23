-- CreateEnum
CREATE TYPE "HouseType" AS ENUM ('apartment', 'condominium', 'townhouse', 'multifamily');

-- CreateTable
CREATE TABLE "Rental" (
    "id" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "beds" INTEGER NOT NULL,
    "bath" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "isNew" BOOLEAN,
    "isPopular" BOOLEAN,
    "houseType" "HouseType" NOT NULL,
    "houseImage" TEXT,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("id")
);
