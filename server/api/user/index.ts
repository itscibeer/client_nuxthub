// server/api/user/index.ts
import { defineEventHandler, readBody, setHeaders } from "h3";
import { users } from "~/server/db/schema/user";
import { useDB } from "~/server/utils/db";

export default defineEventHandler(async (event) => {
  // Set CORS headers
  setHeaders(event, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  // Handle preflight OPTIONS request
  if (event.node.req.method === "OPTIONS") {
    return null;
  }

  const db = useDB();

  if (event.node.req.method === "POST") {
    const body = await readBody(event);
    return db.insert(users).values({
      email: body.email,
      password: body.password,
      labels: body.labels || "Gamer",
    });
  }

  return db.select().from(users);
});
// server/api/user/index.ts
// import { db } from "~/server/db/client";
// import { users } from "~/server/db/schema/user";
// import { defineEventHandler, readBody } from "h3";

// export default defineEventHandler(async (event) => {
//   if (event.req.method === "POST") {
//     const body = await readBody(event);
//     const inserted = await db.insert(users).values({
//       labels: body.labels,
//       password: body.password,
//       email: body.email,
//     });
//     return inserted;
//   }

//   const allUsers = await db.select().from(users);
//   return allUsers;
// });
