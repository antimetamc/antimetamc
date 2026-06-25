document.addEventListener("mousemove", (e) => {
  document.body.style.filter = `hue-rotate(${e.clientX / 20}deg)`;
});
