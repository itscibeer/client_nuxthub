import * as schema from "~/server/db/schema";
import { drizzle } from "drizzle-orm/d1";

export function useDB() {
  try {
    // Try NuxtHub first
    const { hubDatabase } = require("#hub");
    return drizzle(hubDatabase(), { schema });
  } catch (e) {
    // Fallback to direct D1 binding
    if (process.env.DB) {
      return drizzle(process.env.DB as any, { schema });
    }
    
    throw new Error(
      'Database not available. Make sure D1 binding is configured or NuxtHub is set up.'
    );
  }
}
