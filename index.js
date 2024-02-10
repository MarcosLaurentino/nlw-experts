const perguntas = [
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro no console.",
        "Imprimir dados no console.",
        "Iniciar uma função assíncrona.",
      ],
      correta: 1
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "variable x = 10;",
        "let x = 10;",
        "const x = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Uma linguagem de programação.",
        "Uma estrutura de dados para armazenar informações.",
        "Uma representação hierárquica dos elementos HTML da página.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Não há diferença, são sinônimos.",
        "Variáveis 'let' podem ser reatribuídas, enquanto 'const' não pode.",
        "Variáveis 'const' são usadas apenas para números constantes.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      respostas: [
        "Um tipo de erro de sintaxe.",
        "Uma função passada como argumento para outra função.",
        "Um operador matemático.",
      ],
      correta: 1
    },
    {
      pergunta: "Como realizar um loop 'for' em JavaScript?",
      respostas: [
        "loop (let i = 0; i < 10; i++)",
        "for (i = 0; i < 10; i++)",
        "for (let i = 0; i < 10; i++)",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica de otimização de código.",
        "O comportamento de mover declarações para o topo do escopo antes da execução.",
        "Um tipo de estrutura de dados.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma Promise em JavaScript?",
      respostas: [
        "Uma declaração de variável.",
        "Um tipo de função assíncrona.",
        "Um objeto que representa a conclusão ou falha de uma operação assíncrona.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos.",
        "Concatenação de strings.",
        "Verificação de igualdade em valores, independentemente dos tipos.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'closure' em JavaScript?",
      respostas: [
        "Uma forma de estilizar o código.",
        "Um tipo de estrutura de controle de fluxo.",
        "O encapsulamento de uma função junto com seu ambiente léxico.",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      dt.querySelector("span").textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // true (resposta)
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
      
      quizItem.querySelector("dl").appendChild(dt)
  
      
    }
    
    quizItem.querySelector("dl dt").remove()
    
      // coloca a pergunta na tela 
    quiz.appendChild(quizItem)
    
  }