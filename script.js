
function run(){
  let code = document.getElementById("codeInput").value;
  let code1 = code + 'document.getElementById("run").innerHTML = output;'
  let code2 = code1.replace("<br>", "");
  document.getElementById("CodeSspace").innerText = code2;
}
