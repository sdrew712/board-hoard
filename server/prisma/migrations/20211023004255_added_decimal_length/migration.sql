/*
  Warnings:

  - You are about to alter the column `width` on the `boards` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Decimal(5,3)`.

*/
-- AlterTable
ALTER TABLE "boards" ALTER COLUMN "width" SET DATA TYPE DECIMAL(5,3);
