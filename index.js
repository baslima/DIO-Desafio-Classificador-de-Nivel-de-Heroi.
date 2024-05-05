let nomeDoPersonagem = "Goku"
let xpPersonagem = 30000

if(xpPersonagem === 1.000 ){
    console.log("O Herói " + nomeDoPersonagem + " está no Nível Ferro")
}else if(xpPersonagem >= 1.001 && xpPersonagem <= 2.000){
    console.log("O Herói " + nomeDoPersonagem + " está no Nível Bronze")
}else if(xpPersonagem >= 2.001 && xpPersonagem <= 5.000){
    console.log("O Herói " + nomeDoPersonagem + " está no Nível Prata")
}else if(xpPersonagem >= 5.001 && xpPersonagem <= 7.000){
    console.log("O Herói " + nomeDoPersonagem + " está no Nível Ouro")
}else if(xpPersonagem >= 7.001 && xpPersonagem <= 8.000){
    console.log("O Herói " + nomeDoPersonagem + " está no Nível Platina")
}else if(xpPersonagem >= 8.001 && xpPersonagem <= 10.000){
    console.log("O Herói " + nomeDoPersonagem + " está no Nível Imortal")
}else if(xpPersonagem >= 10.001){
    console.log("O Herói " + nomeDoPersonagem + " está no Nível Radiante")
} 