const status = document.getElementById('status');
const stamp = new Date().toLocaleTimeString('ru-RU');
status.textContent = 'Скрипт работает — время на клиенте: ' + stamp;
