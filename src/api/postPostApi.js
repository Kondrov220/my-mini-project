export const postPostApi = async (post) => {
  const options = {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    return await fetch("https://68925892447ff4f11fc00228.mockapi.io/api/post/mini", options).then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};