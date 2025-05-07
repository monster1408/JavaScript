
function run(){
  let code = document.getElementById("codeInput").value;
  code = code + 'document.getElementById("run").innerHTML = output;'
  code = code.replace("<br>", "");
  document.getElementById("CodeSspace").innerText = code;
}
