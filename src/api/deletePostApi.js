export const deletePostApi = async (id) => {
  try {
  return await fetch(`https://68925892447ff4f11fc00228.mockapi.io/api/post/mini/${id}`, {
    method: "DELETE",
  });
  } catch (error) {
console.log(error)
  }
};