document.addEventListener('DOMContentLoaded', function () {
    const wordItems = document.querySelectorAll('.word-item');

    wordItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('active');
        setTimeout(() => {
          item.classList.remove('active');
        }, 2000); // Mostra la parola per 2 secondi prima di nasconderla
      }, index * 3000); // Cambia la parola ogni 3 secondi (3000 millisecondi)
    });
  });