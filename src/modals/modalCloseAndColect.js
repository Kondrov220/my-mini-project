import { postPostApi } from "../api/postPostApi";
import { getPostApi } from "../api/getPostApi";
import makeList from "../tumplats/post.hbs";

export const collectModalInfo = (form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target.elements.nameCollect.value;
    const description = e.target.elements.discriptionCollect.value;
    const photo = e.target.elements.photoCollect.value;
    const PostBlock = {
      title: name,
      content: description,
      image: photo,
    };
    await postPostApi(PostBlock);
    document.querySelector(".hero-backdrop").style.visibility = "hidden";
    document.querySelector(".hero-backdrop").style.display = "none";
    await getPostApi().then((data) => {
      document.querySelector(".list").innerHTML = makeList(data);
    });
    e.target.elements.nameCollect.value = "";
    e.target.elements.discriptionCollect.value = "";
    e.target.elements.photoCollect.value = "";
    console.log(PostBlock);
  });
};