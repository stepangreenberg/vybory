const status = document.getElementById('status');

function tick() {
  status.textContent = 'Скрипт работает — время на клиенте: ' + new Date().toLocaleTimeString('ru-RU');
}

tick();
setInterval(tick, 1000);
