const user = JSON.parse(localStorage.getItem("amc_user"));

if (!user) {
  window.location.href = "login.html";
}
