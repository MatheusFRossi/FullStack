const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'shampu.jpeg'; 

const canvasRect = canvas.getBoundingClientRect();
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

const imgWidth = 50;
const imgHeight = 50;


canvas.addEventListener('mousemove', function(event) {
  const rect = canvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  

  mouseX = Math.min(Math.max(mouseX, imgWidth / 2), canvas.width - imgWidth / 2);
  mouseY = Math.min(Math.max(mouseY, imgHeight / 2), canvas.height - imgHeight / 2);
});

img.onload = function() {
  requestAnimationFrame(draw);
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const drawX = mouseX - imgWidth / 2;
  const drawY = mouseY - imgHeight / 2;
  
  ctx.drawImage(img, drawX, drawY, imgWidth, imgHeight);
  
  requestAnimationFrame(draw);
}


canvas.addEventListener('mouseleave', function() {

});
