// 1. 使用 querySelectorAll 获取页面上所有的 table
const tables = document.querySelectorAll(".table");

// 2. 遍历每一个表格执行修改逻辑
tables.forEach((table) => {
  // --- 表格整体样式 ---
  // 强制表格宽度为“按内容自适应”，防止被父容器拉伸
  table.style.width = "auto";
  // 确保它是表格显示模式且左右居中
  table.style.display = "table";
  table.style.marginLeft = "auto";
  table.style.marginRight = "auto";

  // --- 处理标题 (caption) ---
  const caption = table.querySelector("caption");
  if (caption) {
    caption.style.textAlign = "center";
    caption.style.captionSide = "top"; // 确保在上方
    caption.style.width = "100%"; // 强制 caption 占据表格全宽并居中
  }

  // --- 处理单元格内容居中 ---
  const cells = table.querySelectorAll("th, td");
  cells.forEach((cell) => {
    cell.style.textAlign = "center";
    cell.style.verticalAlign = "middle"; // 建议同时开启垂直居中
  });
});
