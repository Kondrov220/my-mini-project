export const updatePostApi = async (id, postData) => {
  try {
    return await fetch(`https://68925892447ff4f11fc00228.mockapi.io/api/post/mini/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
  } catch (error) {
    console.log(error);
  }
};