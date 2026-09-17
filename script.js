const icones = document.querySelectorAll(".icone-flutuante");

const movimentos = [];

icones.forEach((icone) => {

    const movimento = {
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 50),

        velocidadeX: (Math.random() - 0.5) * 0.35,
        velocidadeY: (Math.random() - 0.5) * 0.35,

        angulo: Math.random() * 360,
        rotacao: (Math.random() - 0.5) * 0.15
    };

    movimentos.push(movimento);

});


function animar() {

    movimentos.forEach((movimento, index) => {

        const icone = icones[index];

        movimento.x += movimento.velocidadeX;
        movimento.y += movimento.velocidadeY;

        movimento.angulo += movimento.rotacao;


        if (movimento.x <= -50) {
            movimento.x = window.innerWidth;
        }

        if (movimento.x >= window.innerWidth) {
            movimento.x = -50;
        }

        if (movimento.y <= -50) {
            movimento.y = window.innerHeight;
        }

        if (movimento.y >= window.innerHeight) {
            movimento.y = -50;
        }


        icone.style.transform = `
            translate3d(
                ${movimento.x}px,
                ${movimento.y}px,
                0
            )
            rotate(${movimento.angulo}deg)
        `;

    });

    requestAnimationFrame(animar);
}


animar();


window.addEventListener("resize", () => {

    movimentos.forEach((movimento) => {

        movimento.x = Math.min(
            movimento.x,
            window.innerWidth - 50
        );

        movimento.y = Math.min(
            movimento.y,
            window.innerHeight - 50
        );

    });

});