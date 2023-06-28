AOS.init();

const dataEvento = new Date("Dec 12 2023 19:00:00");
const timeStempEvento = dataEvento.getTime();

const contaTempo = setInterval(() => {
  const agora = new Date();
  const timeAtual = agora.getTime();
  const distEvento = timeStempEvento - timeAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(distEvento / diaEmMs);
  const horasEvento = Math.floor((distEvento % diaEmMs) / horaEmMs);
  const minutosEvento = Math.floor((distEvento % horaEmMs) / minutosEmMs);
  const segundosEvento = Math.floor((distEvento % minutosEmMs) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteEvento}d ${horasEvento}h ${segundosEvento}s`;

  if (distEvento < 0) {
    clearInterval(contaTempo);
    document.getElementById("contador").innerHTML = " Evento Expirado";
  }
  //console.log(diasAteEvento, horasEvento, minutosEvento, segundosEvento);
}, 1000);
