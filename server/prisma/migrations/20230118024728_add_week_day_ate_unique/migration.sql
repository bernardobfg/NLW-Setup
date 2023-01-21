/*
  Warnings:

  - A unique constraint covering the columns `[habit_id,week_day]` on the table `habit_week_days` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "habit_week_days_habit_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "habit_week_days_habit_id_week_day_key" ON "habit_week_days"("habit_id", "week_day");
