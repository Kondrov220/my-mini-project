export const getPostApi = async () => {
  try {
   return await fetch("https://68925892447ff4f11fc00228.mockapi.io/api/post/mini")
  .then((res) => res.json())
  } catch (error) {
    console.log(error)
  }
}