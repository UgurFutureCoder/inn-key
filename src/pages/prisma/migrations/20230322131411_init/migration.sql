-- CreateTable
CREATE TABLE "Company" (
    "inn" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "workers" INTEGER NOT NULL,
    "income" INTEGER NOT NULL,
    "consumption" INTEGER NOT NULL,
    "founder" TEXT NOT NULL,
    "about" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_inn_key" ON "Company"("inn");
