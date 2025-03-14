'user strict'

async function pesquisarFotos(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url) // Fetch é uma ferramenta que faz requisição web e retorna uma resposta do servidor
    const data = await response.json()
    

    return data.message
}

function criarImagem(link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link
    galeria.appendChild(novaImg)
    
    
}


async function preencherFotos(){
    const raca = document.getElementById('raca').value
    const fotos = await pesquisarFotos(raca)
    const galeria = document.getElementById('galeria')
    galeria.replaceChildren('')
    
    fotos.forEach(criarImagem)
}

document.getElementById('pesquisar').addEventListener('click', preencherFotos)