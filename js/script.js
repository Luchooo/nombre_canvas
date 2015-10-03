$(function()
{



   var ScreenShot = {
                        canvas      : $("#canvas")[0],
                        width       : 760,
                        height      : 500
                };




    var canvas = $('#canvas');
    var context = canvas[0].getContext('2d');
 

//Letra L
    context.beginPath();
    context.moveTo(70, 50);
    context.lineTo(70, 300);
    context.lineTo(230, 300);
    context.lineTo(230, 260);
    context.lineTo(110, 260);
    context.lineTo(110, 50);
    context.lineTo(70, 50);
    context.lineWidth = 3;
    context.strokeStyle = randomColor();
    context.stroke();
    context.fillStyle = randomColor();
    context.fill();
//___________________________________________________



//Letra U
  context.beginPath();
    context.moveTo(270, 50);
    context.lineTo(270, 300);
    context.lineTo(430, 300);
    context.lineTo(430, 50);
    context.lineTo(390, 50);
    context.lineTo(390, 260);
    context.lineTo(310, 260);
    context.lineTo(310, 50);
    context.lineTo(270, 50);
    context.lineWidth = 3;
    context.strokeStyle = randomColor();
    context.stroke();
    context.fillStyle = randomColor();
    context.fill();
//_________________________________________________

//Letra I
  context.beginPath();
    context.moveTo(480, 50);
    context.lineTo(480, 90);
    context.lineTo(520, 90);
    context.lineTo(520, 260);
    context.lineTo(480, 260);
    context.lineTo(480, 260);
    context.lineTo(480, 300);
    context.lineTo(600, 300);
    context.lineTo(600, 260);
    context.lineTo(560, 260);
    context.lineTo(560, 90);
    context.lineTo(600, 90);
    context.lineTo(600, 50);
    context.lineTo(480, 50);

    context.lineWidth = 3;
    context.strokeStyle = randomColor();
    context.stroke();
    context.fillStyle = randomColor();
    context.fill();
//_________________________________________________


//Letra S
  context.beginPath();
    context.moveTo(660, 50);
    context.lineTo(830, 50);
    context.lineTo(830, 90);
    context.lineTo(700, 90);

    context.lineTo(700, 150);
    context.lineTo(830, 150);
    context.lineTo(830, 300);
    context.lineTo(660, 300);
    context.lineTo(660, 260);
    context.lineTo(790, 260);
    context.lineTo(790, 200);
    context.lineTo(660, 200);
    context.lineTo(660, 50);

    context.lineWidth = 3;
    context.strokeStyle = randomColor();
    context.stroke();
    context.fillStyle = randomColor();
    context.fill();
//_________________________________________________


 function randomColor()
  {
      // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
      return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
      (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
    }; 


 $("#guardar").click(function(event) {
        this.download =  "señal_digital.png";
        this.href = ScreenShot.canvas.toDataURL();
    });









});
