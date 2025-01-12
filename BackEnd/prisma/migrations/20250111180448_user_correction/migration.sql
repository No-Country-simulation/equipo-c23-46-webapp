/*
  Warnings:

  - You are about to drop the column `apoderado` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `dni_apoderado` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone_apoderado` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "apoderado",
DROP COLUMN "dni_apoderado",
DROP COLUMN "phone_apoderado";
