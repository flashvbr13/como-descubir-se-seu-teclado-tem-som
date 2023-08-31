function start() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier   = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ah9wd1_e6/model.json', modelReady);
} 

function modelReady () {
    classifier.classify(gotResults)
}

function gotResults(error,results){
if(error){
    console.error(error)

}else{
    console.log(results)
    document.getElementById('resultadoNome').innerHTML="posso ouvir: "+results[0].label
    document.getElementById('resultadoPrecisao').innerHTML="posso ouvir: "+results[0].confidence.toFixed(2)
    palmas=document.getElementById("palmas")
    assovio=document.getElementById("assovio")
    teclado=document.getElementById("teclado")

    if(results[0].label=='palma')
     {
     palmas.style.filter= 'grayscale(0)'
     assovio.style.filter= 'grayscale(1)'
     teclado.style.filter= 'grayscale(1)'  
    }
    
    if(results[0].label=='assovio')
     {
     palmas.style.filter= 'grayscale(1)'
     assovio.style.filter= 'grayscale(0)'
     teclado.style.filter= 'grayscale(1)'  
    }
    
    if(results[0].label=='teclado')
     {
     palmas.style.filter= 'grayscale(1)'
     assovio.style.filter= 'grayscale(1)'
     teclado.style.filter= 'grayscale(0)'  
    }
}
}

