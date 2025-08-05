export const getPostApi = async () => {
  try {
   return await fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  } catch (error) {
    console.log(error)
  }
}