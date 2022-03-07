-- CreateTable
CREATE TABLE "usuarios" (
    "Id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Numero" INTEGER NOT NULL,
    "Senha" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_Email_key" ON "usuarios"("Email");
