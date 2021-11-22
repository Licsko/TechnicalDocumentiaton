const codeBlock = document.querySelector('.lch-codes code');

let code = codeBlock.innerText.replaceAll(" ","\n");

codeBlock.innerText = code;