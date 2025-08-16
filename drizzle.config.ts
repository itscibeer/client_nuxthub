import { defineConfig } from "drizzle-kit";
import { resolve } from "path";

export default defineConfig({
  schema: "./server/db/schema.ts", // แก้ตาม path ที่เก็บ schema จริง
  out: "./drizzle", // โฟลเดอร์เก็บ migration ที่สร้าง
  driver: "better-sqlite",
  dbCredentials: {
    url: resolve(__dirname, "./sqlite.db"), // ชี้ไปยังไฟล์ SQLite
  },
});
