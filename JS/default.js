function toggleMenu() {
  var menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("show"); // Adiciona ou remove a classe 'show'
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function copyTextAndNotify(text) {
    // Copiar o texto para a área de transferência
    navigator.clipboard.writeText(text);

    // Mostrar a notificação
    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Esconder a notificação após alguns segundos
    setTimeout(function() {
      notification.style.display = 'none';
    }, 3000);
  }