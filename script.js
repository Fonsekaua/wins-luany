const clique = document.querySelector(".click")
const contador = document.querySelector(".contador")
let card = document.querySelector(".card")
const cards = [
    {
        name: "Demar",
        img: "./cards/demar.jpeg",
        message: "🎉 Parabéns, Luany! Sempre disse que você era diferenciada. Agora é foco e bola pra frente! 🐉 Você é um dragão e nunca deixe ninguém dizer o contrário. Tenho muito orgulho de você! 💙✨",
    },
    {
        name: "Emilly",
        img: "./cards/emilly.jpeg",
        message: "💖 É isso aí, Luany! Todo mundo viu o quanto você se esforçou e eu estou muito feliz por você! Agora bora marcar um vôlei pra comemorar essa conquista! 🏐🎊"
    },
    {
        name: "Luiza",
        img: "./cards/luiza.jpeg",
        message: "😂 Vou falar é nada, né amiga? Onde a minha best friends forever não iria passar? Era mais fácil o Silva ficar de fora do que você! 💅✨ E claro que meu ultra hiper mega strogonoficamente especial 'boa sorte' ajudou! 🍀💖"
    },
    {
        name: "Ryan",
        img: "./cards/ryan.jpeg",
        message: "🔮 É isso aí, minha peruana! Usei todos os conhecimentos secretos que meu tio cigano me ensinou pra garantir sua aprovação! 😂✨ O pagamento é lá na frente, viu? Só 10% do salário por mês. 💸😎"
    },
    {
        name: "Kazuma 🎮",
        img: "./cards/kazuma.jpeg",
        message: "Oi, Luany. Então... você passou, né? 😏 Eu já esperava. Quer dizer, alguém tão esforçada assim tinha que conseguir uma hora. Não vai se achar só por causa disso, tá? Mas... parabéns. Você realmente mereceu essa vitória. Agora só não vai esquecer da gente quando ficar famosa na WorldSkills. 🎮✨"
    },
    {
        name: "Aqua 💧",
        img: "./cards/aqua.jpeg",
        message: "KYAAAA!! 🎉💙 EU SABIA!! Tá vendo? Foi graças às minhas bênçãos divinas! 😇✨ Tá bom... talvez tenha sido principalmente pelo seu esforço... mas um pouquinho foi por minha causa também! Agora vamos comemorar bastante! 🍾🎊"
    },
    {
        name: "Megumin 💥",
        img: "./cards/megumin.jpeg",
        message: "Meu nome é Megumin! A arquimaga suprema, usuária da magia EXPLOSION! 💥✨ E posso afirmar que sua aprovação foi tão grandiosa quanto a minha explosão mais poderosa! Continue incendiando o mundo com seu talento! EXPLOSION!!! 💥🔥💥"
    },
    {
        name: "Darkness 🛡️",
        img: "./cards/darkness.jpeg",
        message: "Magnífico... enfrentar um desafio tão difícil e ainda sair vitoriosa... 🛡️✨ Que determinação admirável! Saber que você suportou toda essa pressão e venceu me enche de orgulho. Continue seguindo em frente, pois desafios ainda maiores esperam por você! ⚔️💛"
    },
    {
        name: "João",
        img: "./cards/joao.jpeg",
        message: "😎 Essa é minha aluna, rapaz! Algum dia eu duvidei? Alguém duvidou que você estaria aqui? Porque eu JAMAIS! Era tão óbvio que você ia conseguir. 🚀🏆"
    },
    {
        name: "Silva",
        img: "./cards/silva.jpeg",
        message: "😏📚 Passou, né? Claro... comigo ensinando fica fácil! 🤓☝️ Brincadeiras à parte, você mandou MUITO bem! 💯🔥 Eu falei que isso era fichinha pra você. Agora é só continuar amassando todo mundo (menos eu) na WorldSkills! 🏆🚀🐉"
    },
    {
        name: "Totoro 🌱",
        img: "./cards/totoro.jpeg",
        message: "🌳✨ O Totoro pediu para dizer que até as maiores árvores começam como uma pequena semente. Você cuidou do seu sonho com dedicação e agora ele floresceu! 🌱💙 Continue acreditando em você e aproveite cada passo dessa nova jornada. 🍃🐾"
    },
    {
        name: "Stitch 💙",
        img: "./cards/stitch.jpeg",
        message: "💙 Aloha, Luany! O Stitch disse que você é oficialmente nível '626' de determinação! 🚀 Você provou que com esforço e coragem dá pra conquistar qualquer coisa. Agora vai lá e mostra pra WorldSkills quem manda! 🌺🔥 Ah... e não esquece: 'Ohana' significa que ninguém fica para trás. 🤙💙"
    },
    {
        name: "Bakugo 💥",
        img: "./cards/bakugo.jpeg",
        message: "SHINEEE!!!!💥💥💥💥💥💥💥"
    }
];


function som(src) {
    const audio = document.createElement("audio")
    const source = document.createElement("source")
    source.type = "audio/mpeg"
    source.src = src
    audio.append(source)
    return audio
}

let cliques = localStorage.getItem('click') ?? 0
 contador.innerHTML = `Cliques: ${cliques}`
clique.addEventListener("click", () => {
    let random = Math.floor(Math.random(0) * 67)
    som('./sons/click.mp3').play()
    cliques++
    contador.innerHTML = `Cliques: ${cliques}`
    localStorage.setItem('click',cliques);
    cards.forEach((element, index) => {
        if (random == index) {
            card.querySelector(".banner").src = element.img 
            card.querySelector(".info .author").textContent = element.name
            card.querySelector(".info .message").textContent = element.message

            card.classList.add('active')

        }
    })
})

let arrastando = false;
let inicioY = 0;

function iniciar(y) {
    arrastando = true;
    inicioY = y;
}

function mover(y) {
    if (!arrastando) return;

    const deltaY = y - inicioY;

    if (deltaY < -50) {
        console.log("⬆️ Puxou para cima");
        card.classList.remove("active");
        arrastando = false;
    }
}

function finalizar() {
    arrastando = false;
}

// Mouse
document.addEventListener("mousedown", e => iniciar(e.clientY));
document.addEventListener("mousemove", e => mover(e.clientY));
document.addEventListener("mouseup", finalizar);

// Celular
document.addEventListener("touchstart", e => iniciar(e.touches[0].clientY));
document.addEventListener("touchmove", e => mover(e.touches[0].clientY));
document.addEventListener("touchend", finalizar);