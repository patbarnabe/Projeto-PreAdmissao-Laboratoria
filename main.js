const name = prompt("Olá, bem vindo! 🐶📺  \nQual o seu nome?")

const iniciar = prompt("Coloque o número correspondente a sua resposta. \nQuer iniciar o teste? \n1. Sim\n2. Não")

if (iniciar == "1") {

    const provas = prompt("Coloque a letra correspondente um tipo de prova: \n- Prova A: Pets  \n- Prova B: Filmes")

        if(provas == "A") {

            const perguntaUm = prompt("Digite a alternativa correta: \Cachorros podem comer frutas cítricas? \n1. Sim \n2. Não \n3. Talvez")
            const perguntaDois = prompt("Digite a alternativa correta: \Gatos podem viver até quantos anos? \n1. 10 anos \n2. 20 anos \n3. 15 anos")
            const perguntaTres = prompt("Digite a alternativa correta: \Cachorros de porte grande podem até quantos quilos? \n1. 30kg \n2. 45kg \n3. 25kg")

            document.querySelector('.nome').innerText = `Olá, ${name}!`

                switch (perguntaUm) {
                    case '1':
                        document.querySelector('.resultadoErrado1').innerText = "Resposta 1"
                        break;
                    case '2':
                    document.querySelector('.resultadoCerto1').innerText = "Resposta 1"
                        break;
                    case '3':
                        document.querySelector('.resultadoErrado1').innerText = "Resposta 1"
                        break;    
                }

                switch (perguntaDois) {
                    case '1':
                        document.querySelector('.resultadoErrado2').innerText = "Resposta 2"
                        break;
                    case '2':
                        document.querySelector('.resultadoCerto2').innerText = "Resposta 2"
                        break;
                    case '3':
                        document.querySelector('.resultadoErrado2').innerText = "Resposta 2"
                        break;
                }

                switch (perguntaTres) {
                    case '1':
                        document.querySelector('.resultadoErrado3').innerText = "Resposta 3"
                        break;
                    case '2':
                        document.querySelector('.resultadoCerto3').innerText = "Resposta 3"
                        break;
                    case '3':
                        document.querySelector('.resultadoErrado3').innerText = "Resposta 3"
                        break;
                }

        } else {

            const perguntaUm = prompt("Digite a alternativa correta: \Quantos filmes tem a franquia Star Wars? \n1. 11 \n2. 151 \n3. 10")
            const perguntaDois = prompt("Digite a alternativa correta: \Qual o cineasta brasileiro que ganhou mais dinheiro fazendo filmes no Brasi'? \n1. Glauber Rocha \n2. Amácio Mazaroppi \n3. Sabrina Fidalgo")
            const perguntaTres = prompt("Digite a alternativa correta: \Quando foi construido o primeiro cinema no Brasil? \n1. 1850 \n2. 1896 \n3. 1910")

            document.querySelector('.nome').innerText = `Olá, ${name}!`

                switch (perguntaUm) {
                    case '1':
                        document.querySelector('.resultadoErrado1').innerText = "Resposta 1"
                        break;
                    case '2':
                    document.querySelector('.resultadoCerto1').innerText = "Resposta 1"
                        break;
                    case '3':
                        document.querySelector('.resultadoErrado1').innerText = "Resposta 1"
                        break;    
                }

                switch (perguntaDois) {
                    case '1':
                        document.querySelector('.resultadoErrado2').innerText = "Resposta 2"
                        break;
                    case '2':
                        document.querySelector('.resultadoCerto2').innerText = "Resposta 2"
                        break;
                    case '3':
                        document.querySelector('.resultadoErrado2').innerText = "Resposta 2"
                        break;
                }

                switch (perguntaTres) {
                    case '1':
                        document.querySelector('.resultadoErrado3').innerText = "Resposta 3"
                        break;
                    case '2':
                        document.querySelector('.resultadoCerto3').innerText = "Resposta 3"
                        break;
                    case '3':
                        document.querySelector('.resultadoErrado3').innerText = "Resposta 3"
                        break;
                }
        }
            
} else {
    confirm("Obrigada por participar! 🐶📺")
}
