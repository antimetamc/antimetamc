const users = [
  { u: "admin", p: "1234", role: "leader" },
  { u: "recluta", p: "anti", role: "member" }
];

function login() {
  const u = document.getElementById("u").value;
  const p = document.getElementById("p").value;

  const found = users.find(x => x.u === u && x.p === p);

  if (found) {
    localStorage.setItem("amc_user", JSON.stringify(found));
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Accesso negato";
  }
}
