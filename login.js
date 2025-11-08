document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // ⚠️ Dans une vraie app, la vérification doit se faire côté serveur (PHP, Node.js, etc.)
  // Exemple basique :
  const validUser = "admin";
  const validPasswordHash = btoa("motdepasse123"); // hash de base64 (exemple simple)

  if (username === validUser && btoa(password) === validPasswordHash) {
    sessionStorage.setItem("auth", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("message").textContent = "Identifiants incorrects.";
    document.getElementById("message").style.color = "red";
  }
});
