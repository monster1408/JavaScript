
function run(){
  let code = document.getElementById("codeInput").value;
  code1 = code + 'document.getElementById("run").innerHTML = output;'
  code2 = code1.replace("<br>", "");
  document.getElementById("CodeSspace").innerText = code2;
}
