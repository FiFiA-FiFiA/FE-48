let btns = document.querySelectorAll("[btn]");

for (const btn of btns) {
  btn.addEventListener('click', function() {
    if (btn.style.backgroundColor == "#f0f0f0") {
      btn.style.backgroundColor = "#74f";
      btn.style.color = "#fff";
    } else {
      btn.style.backgroundColor = "#f0f0f0";
      btn.style.color = "#000";
    }
  });
}