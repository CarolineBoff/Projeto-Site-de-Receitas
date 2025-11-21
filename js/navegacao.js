const botoesMenu = document.querySelectorAll('.toolbar a');
const todasSecoes = document.querySelectorAll('.conteudo section');

function trocarTela(event) {
  event.preventDefault();
  const botao = event.currentTarget;
  const href = botao.getAttribute('href') || '';
  const idDesejado = href.startsWith('#') ? href.slice(1) : href;

  if (!idDesejado) return;

  todasSecoes.forEach(secao => secao.classList.remove('ativa'));
  botoesMenu.forEach(b => b.classList.remove('ativo'));

  const secaoAlvo = document.getElementById(idDesejado);
  if (secaoAlvo) {
    secaoAlvo.classList.add('ativa');
    botao.classList.add('ativo');
    secaoAlvo.setAttribute('tabindex', '-1');
    secaoAlvo.focus();
  }
}

botoesMenu.forEach(botao => botao.addEventListener('click', trocarTela));

// fallback: mostrar home ao carregar
document.getElementById('home')?.classList.add('ativa');