export default defineEventHandler(() => {
  return {
    message: "Centers API is working!",
    centers: [
      {
        id: 1,
        name: "Test Center 1"
      },
      {
        id: 2,
        name: "Test Center 2"
      }
    ]
  }
})