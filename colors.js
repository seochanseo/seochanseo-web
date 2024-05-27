function nightDayHandler(mode) {
  var body = document.querySelector('body');
  if (mode === 'night') {
      body.classList.remove('day-mode');
      body.classList.add('night-mode');
  } else if (mode === 'day') {
      body.classList.remove('night-mode');
      body.classList.add('day-mode');
  }
}
