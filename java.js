  let count = 0;
  let plusOne = document.getElementById('plus');
  let minusOne = document.getElementById('minus');
  let reset = document.getElementById('reset');
  let result = document.getElementById('result');

  plusOne.onclick = function(){
    count += 1;
    result.innerHTML = count;
  }
  minusOne.onclick = function(){
    count -= 1;
    result.innerHTML = count;
  }
  reset.onclick = function(){
    count = 0;
    result.innerHTML = count;
  }