const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function get__random__string(word__length, simbol__length) {
  let characters__length = characters.length;

  for (var i = 0; i < word__length; i++) {
    let body = document.body;
    let create__words = document.createElement('p');
    body.appendChild(create__words)
  }

  for (let i = 0; i < simbol__length; i++) {
    let words = document.querySelectorAll('p');

    words.forEach(word => {
      word.textContent += characters.charAt(Math.floor(Math.random() * characters__length));
    });
  }
}

get__random__string(3, 5);