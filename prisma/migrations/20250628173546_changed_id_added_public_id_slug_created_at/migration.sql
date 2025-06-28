/*
  Warnings:

  - The primary key for the `Rental` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Rental` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The required column `public_id` was added to the `Rental` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `slug` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "public_id" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Rental_pkey" PRIMARY KEY ("id");
