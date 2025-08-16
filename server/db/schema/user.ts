import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: text("id", { length: 32 })
    .primaryKey()
    .$defaultFn(() => createId()),
  email: text("email", { length: 100 }).notNull().unique(),
  password: text("password", { length: 100 }).notNull(),
  labels: text("labels", { length: 100 })
    .notNull()
    .default(sql`'Gamer'`),
  created_at: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
  updated_at: integer("updated_at", { mode: "timestamp" }).default(sql`null`),
  deleted_at: integer("deleted_at", { mode: "timestamp" }).default(sql`null`),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

// labels
