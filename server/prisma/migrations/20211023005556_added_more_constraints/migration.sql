/*
  Warnings:

  - You are about to alter the column `length` on the `boards` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Decimal(5,3)`.
  - You are about to alter the column `wheelbase` on the `boards` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Decimal(5,3)`.

*/
-- AlterTable
ALTER TABLE "boards" ALTER COLUMN "length" SET DATA TYPE DECIMAL(5,3),
ALTER COLUMN "wheelbase" SET DATA TYPE DECIMAL(5,3);
