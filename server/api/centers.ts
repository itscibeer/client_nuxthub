export default defineEventHandler(async (event) => {
  // Set CORS headers
  setHeader(event, "Access-Control-Allow-Origin", "*");
  setHeader(event, "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  setHeader(event, "Access-Control-Allow-Headers", "Content-Type, Authorization");
  setHeader(event, "Content-Type", "application/json");

  // Handle preflight OPTIONS request
  if (getMethod(event) === "OPTIONS") {
    return "";
  }

  // Return test data
  return [
    {
      id: 1,
      user_id: 1,
      center_name: "Test Center 1",
      description: "Test Description 1",
      currency: 1,
      country_timezone: 1,
      is_active: 1,
      created_at: Date.now(),
      updated_at: Date.now()
    },
    {
      id: 2,
      user_id: 2,
      center_name: "Test Center 2",
      description: "Test Description 2",
      currency: 2,
      country_timezone: 2,
      is_active: 1,
      created_at: Date.now(),
      updated_at: Date.now()
    }
  ];
});