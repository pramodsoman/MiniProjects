const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Great job!',
  'You are awesome!',
  'Keep it up!',
  'Well done!',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getRandomType());

  notif.innerHTML = `
    <span>${message ? message : getRandomMessage()}</span>
    <button class="close-btn" onclick="closeNotification(this.parentNode)">&times;</button>
  `;

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

function closeNotification(notification) {
  notification.style.animation = 'fadeOut 0.5s ease-in-out forwards';

  setTimeout(() => {
    notification.remove();
  }, 500);
}
