/*
  Warnings:

  - You are about to drop the column `email` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `Usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Id]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Numero]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Email` to the `Usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Id` to the `Usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Numero` to the `Usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Senha` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Usuarios_email_key";

-- DropIndex
DROP INDEX "Usuarios_id_key";

-- DropIndex
DROP INDEX "Usuarios_numero_key";

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "numero",
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "Id" INTEGER NOT NULL,
ADD COLUMN     "Numero" INTEGER NOT NULL,
ADD COLUMN     "Senha" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Id_key" ON "Usuarios"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Email_key" ON "Usuarios"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Numero_key" ON "Usuarios"("Numero");
