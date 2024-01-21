const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')
const imcFinal = document.querySelector('#imc')
const imagem = document.querySelector('#imagem')

botao.addEventListener('click',()=>{

    event.preventDefault()
   

        
        const imc = peso.value/(altura.value**2)




        imcFinal.value = imc.toFixed(2)

   
       if(imc < 18.5){
          resultado.innerHTML = `Sr(a) ${nome.value} a sua situação é de "Baixo Peso"`
          imagem.src = "imagens/magro.png"
       }else if(imc >= 18.5 && imc < 25){
        resultado.innerHTML = `Sr(a) ${nome.value} a sua situação é "Normal"`
        imagem.src = "imagens/musculo.png"
       }else if(imc >= 25 && imc < 30){
        resultado.innerHTML = `Sr(a) ${nome.value} a sua situação é de "Sobrepeso"`
        imagem.src = "imagens/obesidade.png"
       }else{
        resultado.innerHTML = `Sr(a) ${nome.value} a sua situação é de "Obesidade"`
        imagem.src = "imagens/morbida.png"
       }
   
})


/*Abaixo de 18,5 - Baixo Peso
Entre 18,5 a 24,99 - Normal
25 a 29,99 - Sobrepeso
Maior que 30 - Obesidade*/