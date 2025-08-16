// server/api/user/index.ts
import { db } from "~/server/db/client";
import { users } from "~/server/db/schema/user";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  if (event.req.method === "POST") {
    const body = await readBody(event);
    const inserted = await db.insert(users).values({
      labels: body.labels,
      password: body.password,
      email: body.email,
    });
    return inserted;
  }

  const allUsers = await db.select().from(users);
  return allUsers;
});
