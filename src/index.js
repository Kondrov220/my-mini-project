import { getPostApi } from "./api/getPostApi.js";
import makeList from "./tumplats/post.hbs";
import { backdropOpen } from "./modals/addModalOpen.js";
import { backdropEdit } from "./modals/editModal.js";
import { collectModalInfo } from "./modals/modalCloseAndColect.js";
import { deletePostApi } from "./api/deletePostApi.js";
import { updatePostApi } from "./api/updatePostApi.js";
import { collectModalInfoEdit } from "./modals/editModalCloseAndCollect.js"

getPostApi().then((data) => {
  console.log(data);
  document.querySelector(".list").innerHTML = makeList(data);

document.querySelector(".list").addEventListener("click", async (event) => {
  if (event.target.textContent === "Edit") {
    const postId = event.target.parentElement.id;
    backdropEdit(document.querySelector(".edit-backdrop"));
    collectModalInfoEdit(document.querySelector(".edit-form"), postId);
  }
});
});

const openModalButton = document.querySelector(".add-post");
backdropOpen(openModalButton);

collectModalInfo(document.querySelector(".form"));

// Операція видалення
document.querySelector(".list").addEventListener("click", async (event) => {
  console.log(event.target.textContent);
  if (event.target.textContent === "Delete") {
    const item = event.target.parentElement;
    console.log(item.id);
    await deletePostApi(item.id);
    await getPostApi().then((data) => {
      console.log(data);
      document.querySelector(".list").innerHTML = makeList(data);
    });
  }
});