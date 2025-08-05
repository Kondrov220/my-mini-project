export const updatePostApi = async (id, postData) => {
  try {
    return await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
  } catch (error) {
    console.log(error);
  }
};