const msg_btn = document.getElementById('send-msg');
const msg_form = document.getElementById('msg-form');
const msg_chat = document.getElementById('chat__messages');

msg_form.addEventListener("submit", (e) => {
  //Get message from input in the form and delete the msg in input
  e.preventDefault();
  const msg_input = e.target.msg;
  const msg_value = msg_input.value;
  if(msg_value === "") return;
  msg_input.value = "";
  const _date = new Date();
  const hour = _date.getHours().toString().padStart(2, '0');
  const minute = _date.getMinutes().toString().padStart(2, '0');

  //Create a msg element and append it in the chat
  const msg_template = document.createElement('div');
  const prev_msg = msg_chat.lastElementChild;
  if(!prev_msg || !prev_msg.classList.contains('message-row--own'))
    msg_template.className = "message-row message-row--own";
  else {
    msg_template.className = "message-row message-row--own message-row--own--seq";
  }
  msg_template.innerHTML = `<img src="#"/><div class="message-row__content"><span class="message__author"></span><div class="message__payload"><span class="message__bubble">${msg_value}</span><span class="message__time">${hour}:${minute}</span></div></div>`;
  
  msg_chat.appendChild(msg_template);
});