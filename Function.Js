document.addEventListener("DOMContentLoaded", () => {
  window.toggleShotMenu = () => {
    const shotMenu = document.getElementById("shotMenu")

    if (shotMenu.classList.contains("hidden")) {
      shotMenu.classList.remove("hidden")
      shotMenu.classList.add("fade-in")
    } else {
      shotMenu.classList.add("hidden")
      shotMenu.classList.remove("fade-in")
    }
  }
})
