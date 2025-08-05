export const backdropOpen = (button) => {
button.addEventListener("click", () => {
document.querySelector(`.hero-backdrop`).style.visibility = "visible"
document.querySelector(`.hero-backdrop`).style.display = "flex"
})
}