window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page-container").style.display = "flex";
  }, 1000);
};

document.getElementById("copy").addEventListener("change", (ev) => {
  navigator.clipboard.writeText(document.getElementById("codeplace").value);
});

function formateCode() {
  let code = document.getElementById("codeplace").value;
  let formatedCode = "";
  let lines = code.split("\n");
  lines.forEach((line) => {
    formatedCode += line.trim() + "\n";
  });
  document.getElementById("codeplace").value = formatedCode;
}
function runCode() {
  let code = document.getElementById("codeplace").value;
  fetch("https://leontm.me/api/projects/learnCode/runCode", {
    method: "POST",
    body: JSON.stringify({ code }),
  });
}
document.addEventListener("keydown", (ev) => {
  if (ev.ctrlKey && ev.key === "s") {
    ev.preventDefault();
    formateCode();
  } else if (ev.ctrlKey && ev.key === "r") {
    ev.preventDefault();
    runCode();
  }
});
