-- CreateTable
CREATE TABLE "HabitWeekDays" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "habit_id" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "day_habit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "day_id" TEXT NOT NULL,
    "habit_it" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HabitWeekDays_habit_id_key" ON "HabitWeekDays"("habit_id");

-- CreateIndex
CREATE UNIQUE INDEX "days_date_key" ON "days"("date");

-- CreateIndex
CREATE UNIQUE INDEX "day_habit_day_id_habit_it_key" ON "day_habit"("day_id", "habit_it");
