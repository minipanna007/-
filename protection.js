// 全站圖片防護

// 禁止圖片右鍵
document.addEventListener("contextmenu", function(e) {
  if (e.target.closest("img, picture")) {
    e.preventDefault();
  }
});

// 禁止圖片拖曳
document.addEventListener("dragstart", function(e) {
  if (e.target.closest("img, picture")) {
    e.preventDefault();
  }
});

// 禁止圖片長按另存（部分瀏覽器）
document.addEventListener("touchstart", function(e) {
  if (e.target.closest("img, picture")) {
    e.target.style.webkitTouchCallout = "none";
  }
}, { passive: true });
