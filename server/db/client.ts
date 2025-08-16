// server/db/client.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { users } from "./schema/user";

// ใช้ไฟล์ SQLite local (จำลอง D1 สำหรับ local dev)
const sqlite = new Database("sqlite.db"); // หรือ ':memory:' สำหรับเทส

export const db = drizzle(sqlite, {
  schema: { users },
  logger: true,
});
