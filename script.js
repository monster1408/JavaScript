
function run(){
  let code = document.getElementById("codeInput").value;
  code = code + 'document.getElementById("run").innerHTML = output;'
  document.getElementById("CodeSspace").innerText = code;
}
