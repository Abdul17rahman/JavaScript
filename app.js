// alert("hello");

function showPage(page) {
  const pages = document.querySelectorAll("div");

  pages.forEach((page) => {
    page.style.display = "none";
  });

  document.querySelector(`#${page}`).style.display = "block";
  document.querySelector(`#${page}`).style.animationPlayState = "pause";
}

window.onload = function () {
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", function () {
      showPage(this.dataset.page);
    });
  });
};
