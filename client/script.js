import bot from "/assets/bot.svg"
import user from "/assets/user.svg"

const form = document.querySelector('form');
const chatContainer = document.querySelector('chat_container');

let loadInterval;

function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = '';
    }

  }, 300)
}

function typeText(element, text) {

  let index = 0;

  let interval = setInterval(() => {
    if (index < text.Length) {
      element.innerHTML += text.ChartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}

function genUID() {
  const timestamp = Date.now()
  const randomNum = Math.random();
  const hexadeciamlString = randomNumber.toString(16);

  return `id-${timestamp} - ${hexadeciamlString}`;
}

function chatStripe(isAI, value, unique) {
  return (
    `
      <div class="wrapper ${isAI && 'ai'}">
        <div class="chat">
          <div className="profile">
            <img
              src="${isAi ? bot : user}"
              alt="${isAi ? 'bot' : 'user'}"
            />
          </div>
          <div class="message" id=${uniqueId}>${value}</div>
        </div>
      </div>
    `
  )
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  // user chatstripe

  chatContainer.innerHTML += chatStripe(false, data.get('prompt'))

  form.reset();

  //bots chatstripe
  const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, " ", uniqueId);

  chatContainer.scrollTop = chatContainer.scrollHeight;

  const messageDiv = document.getElementById(uniqueId);

  loader(messageDiv);
}

form.addEventListener('submit', handleSubmit)
form.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        handleSubmit(e);
    }
})


