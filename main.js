const display = document.getElementById("display"); //Adicionando o #display
const botoes = document.querySelectorAll("button"); //Selecionando todos os butões
botoes.forEach((botao) => {                         //Passa por cada item da lista...
  botao.addEventListener("click", () => {           //Quando o "click" acontecer faça tal função
    const valor = botao.textContent;                //Pega o texto dentro do elemento
    if (valor === "C") {
      display.value = "";
    } else if (valor === "=") {
      try {                                         //Tente executar esse código
        display.value = eval(display.value);            //Calcula o valor no display
      } catch {                                     //Caso não consiga executar
        display.value = "Erro";
      }
    } else {
      display.value += valor;                       //Se o botão não for "C" ou "=" adicione o valor
    }
  });
});
