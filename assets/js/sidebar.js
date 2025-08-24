const toggleMenu = () => {
  const menu = document.querySelector(".sidebar-mobile")
  const overlay = document.querySelector(".overlay")

  menu.classList.toggle("open")
  overlay.classList.toggle("show")
}

const closeMenu = () => {
  document.querySelector(".sidebar-mobile").classList.remove("open");
  document.querySelector(".overlay").classList.remove("show")
}


document.addEventListener("click", (event) => {
  const menu = document.querySelector(".sidebar-mobile")
  const hamburger = document.querySelector(".sidebar-menu")

  // メニューが表示されていない場合は何もしない
  if (menu.style.display !== "block") return

  // クリックされた要素がメニューまたはハンバーガーでなければ閉じる
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.style.display = "none"
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll('.sidebar-mobile a[href^="#"]');

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector(".sidebar-mobile")?.classList.remove("open");
      document.querySelector(".overlay")?.classList.remove("show");
    });
  });
});