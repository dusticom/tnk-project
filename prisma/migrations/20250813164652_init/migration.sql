/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cost` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `Sale` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Sale` table. All the data in the column will be lost.
  - Added the required column `productCost` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SaleId` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Sale` DROP FOREIGN KEY `Sale_productId_fkey`;

-- DropIndex
DROP INDEX `Sale_productId_fkey` ON `Sale`;

-- AlterTable
ALTER TABLE `Product` DROP PRIMARY KEY,
    DROP COLUMN `cost`,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    ADD COLUMN `productCost` DOUBLE NOT NULL,
    ADD COLUMN `productId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `productName` VARCHAR(191) NOT NULL,
    ADD COLUMN `productPrice` DOUBLE NOT NULL,
    ADD PRIMARY KEY (`productId`);

-- AlterTable
ALTER TABLE `Sale` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `SaleId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`SaleId`);

-- AddForeignKey
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;
