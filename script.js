function updateTime() {
    const hrs = document.getElementById('hrs');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');

    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Adiciona zero à esquerda para números menores que 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Atualiza o conteúdo HTML
    hrs.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}

// Atualiza a cada 1 segundo (1000 milissegundos)
setInterval(updateTime, 1000);

// Inicializa o relógio assim que a página é carregada
updateTime();
