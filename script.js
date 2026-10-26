
document.querySelectorAll("[data-reply]").forEach(button => {
  button.addEventListener("click", () => {
    const reply = document.querySelector("#reply");
    if (reply) reply.textContent = button.dataset.reply;
  });
});

const unlockButton = document.querySelector("#unlock");

if (unlockButton) {
  unlockButton.addEventListener("click", () => {
    const input = document.querySelector("#clue");
    const result = document.querySelector("#result");

    if (!input || !result) return;

    if (input.value.trim() === "白色山茶花") {
      result.textContent = "檔案已解鎖。『原來我早已把歸途，留給了你。』";

      const link = document.querySelector("#secret-link");
      if (link) link.hidden = false;
    } else {
      result.textContent = "線索不正確。再想想那朵象徵愛意的花吧。";
    }
  });
}
