import { updatePostApi } from "../api/updatePostApi";
import { getPostApi } from "../api/getPostApi";
import makeList from "../tumplats/post.hbs";

export const collectModalInfoEdit = (form, postId) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target.elements.nameCollectEdit.value;
    const description = e.target.elements.discriptionCollectEdit.value;
    const photo = e.target.elements.photoCollectEdit.value;
    const PostBlock = {
      title: name,
      content: description,
      image: photo,
    };
    await updatePostApi(postId, PostBlock);
    document.querySelector(`.edit-backdrop`).style.visibility = "hidden";
    document.querySelector(`.edit-backdrop`).style.display = "none";
    await getPostApi().then((data) => {
      console.log(data);
      document.querySelector(".list").innerHTML = makeList(data);
    });
    e.target.elements.nameCollectEdit.value = "";
    e.target.elements.discriptionCollectEdit.value = "";
    e.target.elements.photoCollectEdit.value = "";
    console.log(PostBlock);
  });
};