const modalRef = document.querySelectorAll("[data-modal]");
const modalBlock = document.querySelector("[data-modal-block]");

modalRef.forEach((item) =>
  item.addEventListener("click", () => {
    modalBlock.classList.toggle("is-hidden");
  })
);
