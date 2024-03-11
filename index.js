const copyText = "https://tchongas.github.io/OBSoverlay/heads/heads.html";
const copyBtn = document.getElementById("copyBtn");

function copyURL() {
    navigator.clipboard.writeText(copyText)
    copyBtn.innerHTML = "Copied!"
  }