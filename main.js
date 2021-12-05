const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");
const modalClose2 = document.querySelector(".js-modal-close2");
const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu");
const headerHeight = header.clientHeight;
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems);

function showBuyTickets() {
  modal.classList.add("open");
}
function hideBuyTicket() {
  modal.classList.remove("open");
}
for (let buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
modalClose.addEventListener("click", hideBuyTicket);
modalClose2.addEventListener("click", hideBuyTicket);
modal.addEventListener("click", hideBuyTicket);
modalContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});
mobileMenu.onclick = function () {
  const isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};
for (let index = 0; index < menuItems.length; index++) {
  const menuItem = menuItems[index];

  menuItem.onclick = function (e) {
    const isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      e.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
