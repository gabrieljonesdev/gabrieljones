// Funzione per includere l'header esterno
fetch('https://gabrieljonesdev.github.io/gabrieljones/assents/archived/header6.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  })
  .catch(error => {
    console.error('Errore durante il caricamento dell\'header:', error);
  });
