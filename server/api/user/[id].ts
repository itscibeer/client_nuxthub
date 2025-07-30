export default defineEventHandler((event) => {
  const id = event.context.params?.id;
  return { userId: id };
});
