-- CreateTable
CREATE TABLE "student" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teacher" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discipline" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "workload" INTEGER NOT NULL,

    CONSTRAINT "discipline_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_cpf_key" ON "student"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_cpf_key" ON "teacher"("cpf");
