const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

// === Funções genéricas ===
function limparCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhar_quadrado(x, y, tamanho, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, tamanho, tamanho);
}

function desenhar_linha(x1, y1, x2, y2, cor, largura = 1) {
  ctx.strokeStyle = cor;
  ctx.lineWidth = largura;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function desenhar_arco(x, y, raio, anguloInicial, anguloFinal, cor, preenchido = true) {
  if (preenchido) {
    ctx.fillStyle = cor;
    ctx.beginPath();
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    ctx.fill();
  } else {
    ctx.strokeStyle = cor;
    ctx.beginPath();
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    ctx.stroke();
  }
}

function escrever(texto, x, y) {
  ctx.fillStyle = "black";
  ctx.font = "16px Arial";
  ctx.textAlign = "center";
  ctx.fillText(texto, x, y);
}

// === Elementos Específicos ===
function desenhar_arvore(x, y) {
  // Tronco
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(x, y, 10, 30);
  // Copa
  desenhar_arco(x + 5, y, 15, 0, 2 * Math.PI, "green");
}

function desenhar_rio_S() {
  ctx.fillStyle = "dodgerblue";
  ctx.beginPath();
  ctx.moveTo(0, 180);
  ctx.bezierCurveTo(60, 200, 20, 260, 80, 280);
  ctx.bezierCurveTo(140, 300, 120, 220, 180, 240);
  ctx.bezierCurveTo(240, 260, 200, 300, 300, 300);
  ctx.lineTo(300, 300);
  ctx.lineTo(0, 300);
  ctx.closePath();
  ctx.fill();
}

function desenhar_casa() {
  // Corpo da casa
  desenhar_quadrado(120, 140, 60, "#8B4513");

  // Porta
  ctx.fillStyle = "#5C3317";
  ctx.fillRect(147, 170, 6, 30);

  // Janelas
  desenhar_quadrado(130, 150, 12, "deepskyblue"); // esquerda
  desenhar_quadrado(158, 150, 12, "deepskyblue"); // direita

  // Telhado
  ctx.fillStyle = "#f25c4d";
  ctx.beginPath();
  ctx.moveTo(110, 140);
  ctx.lineTo(150, 105);
  ctx.lineTo(190, 140);
  ctx.closePath();
  ctx.fill();
}

// === Cena 1 ===
function desenhar_figura1() {
  limparCanvas();


  // Quadrados
  desenhar_quadrado(0, 0, 50, "blue");
  desenhar_quadrado(250, 0, 50, "red");
  desenhar_quadrado(110, 150, 40, "red");
  desenhar_quadrado(0, 270, 30, "yellow");
  desenhar_quadrado(0, 240, 30, "yellow");
  desenhar_quadrado(30, 270, 30, "yellow");
  desenhar_quadrado(270, 270, 30, "black");
  desenhar_quadrado(270, 240, 30, "black");
  desenhar_quadrado(240, 270, 30, "black");
  desenhar_quadrado(0, 120, 30, "cyan");
  desenhar_quadrado(0, 150, 30, "cyan");
  desenhar_quadrado(270, 135, 30, "cyan");


  // Linhas
  desenhar_linha(150, 150, 150, 300, "green");
  desenhar_linha(0, 0, 150, 150, "blue");
  desenhar_linha(300, 0, 150, 150, "red");
  desenhar_linha(0, 150, 300, 150, "green");

  // Arcos
  desenhar_arco(150, 110, 15, 0, 2 * Math.PI, "cyan");
  desenhar_arco(150, 150, 60, Math.PI, 2 * Math.PI, "green", false);
  desenhar_arco(150, 150, 80, Math.PI, 2 * Math.PI, "green", false);
  desenhar_arco(150, 300, 45, 0, 2 * Math.PI, "cyan");
  desenhar_arco(150, 300, 45, 0, 2 * Math.PI, "green", false);

  // Círculos
  desenhar_arco(75, 225, 15, 0, 2 * Math.PI, "yellow");
  desenhar_arco(225, 225, 15, 0, 2 * Math.PI, "yellow");

  escrever("Canvas", 150, 60);
}

// === Cena 2 ===
function desenhar_figura2() {
  limparCanvas();

  // Céu
  ctx.fillStyle = "#a5ffe4";
  ctx.fillRect(0, 0, 300, 300);

  // Chão
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 180, 300, 120);

  // Casa (nova versão)
  desenhar_casa();

  // Sol
  desenhar_arco(240, 60, 30, 0, 2 * Math.PI, "yellow");

  // Árvores
  desenhar_arvore(60, 180);
  desenhar_arvore(230, 180);

  // Rio
  desenhar_rio_S();
}

// Exibe a primeira cena ao carregar
desenhar_figura1();
