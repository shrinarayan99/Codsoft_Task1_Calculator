const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'CE') {
      result.value = '';
    } else if (value === 'DEL') {
      result.value = result.value.slice(0, -1);
    } else if (value === '=') {
      try {
        result.value = eval(result.value);
      } catch {
        result.value = 'Error';
      }
    } else {
      result.value += value;
    }
  });
});
