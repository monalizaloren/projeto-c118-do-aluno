

function setup() {
    //Utilize a variável canvas
    ??? = createCanvas(280, 280);
    ???.center();
    background("white");
    ???.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
  }
  
  function preload() {
  
    classifier = ml5.imageClassifier('DoodleNet');
  }
  
  
  //Nome da função que limpa a tela
  function ???() {
 //Defina a cor de fundo para branco 
    ???
  }
  
  function draw() {
  
    // Defina a largura para 13
    strokeWeight(???);
    // Defina a cor para preto, usando o código 0
    stroke(0);
    // Defina o código 'se o mouse for pressionado
??? {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
  
  function classifyCanvas() {
    classifier.classify(canvas, gotResult);
  }
  
  function gotResult(error, results) {
    
    
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;
  
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
  
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
  }
  
  
  