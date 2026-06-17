const display = document.getElementById("display");
const botoes = document.querySelectorAll("button");
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valor = botao.textContent;
    if (valor === "C") {
      display.value = "";
    } 
    
    else if (valor === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Erro";
      }
    } else {
      display.value += valor;
    }
  });
});
