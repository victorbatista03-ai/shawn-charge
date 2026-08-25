document.addEventListener('DOMContentLoaded', () => {
  const likeBtn = document.getElementById('likeBtn');
  const likesDisplay = document.getElementById('likes');
  const btnText = document.getElementById('btnText');

  // Recupera dados salvos do navegador ou usa padrões
  let count = parseInt(localStorage.getItem('shawn_blog_likes')) || 42;
  let isLiked = localStorage.getItem('shawn_blog_user_liked') === 'true';

  // Atualiza a interface com o estado salvo
  function updateUI() {
    likesDisplay.textContent = count;
    if (isLiked) {
      likeBtn.classList.add('liked');
      btnText.textContent = 'Curtido';
    } else {
      likeBtn.classList.remove('liked');
      btnText.textContent = 'Curtir';
    }
  }

  // Evento de clique
  likeBtn.addEventListener('click', () => {
    if (!isLiked) {
      count++;
      isLiked = true;
    } else {
      count--;
      isLiked = false;
    }

    // Salva no LocalStorage do navegador
    localStorage.setItem('shawn_blog_likes', count);
    localStorage.setItem('shawn_blog_user_liked', isLiked);

    updateUI();

    // Dispara animação CSS de pulso
    likesDisplay.classList.add('pulse-animation');
    setTimeout(() => {
      likesDisplay.classList.remove('pulse-animation');
    }, 300);
  });

  // Inicialização
  updateUI();
});
