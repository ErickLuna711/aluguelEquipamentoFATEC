let inputNome = document.getElementById("nomeAlunoInput");
let inputCiclo = document.getElementById("seletorCiclo");
let containerResultado = document.getElementById("containerResult");
let permitidoAlugar = true;
const diasAlugados = 7;

function tratamentoAluguel() {
  let inputTurno = document.querySelector('input[name="turnoAluno"]:checked');
  equipamento = prompt("Digite o nome do equipamento a ser alugado");

  console.log(
    `Aluno: ${inputNome.value} Alugou o equipamento: ${equipamento}, aluguel permitido: ${permitidoAlugar} quantidade de dias até a devolução: ${diasAlugados}`,
  );

  containerResultado.innerHTML = `
<div style=" color: white ;width: 400px; background-color: #333333; display: flex; flex-direction: column; margin: auto; padding: 10px; margin-top: 50px; border-radius: 5px;">
<p>Aluno: ${inputNome.value}</p>
<p>Turno: ${inputTurno.value}</p>
<p>Ciclo: ${seletorCiclo.value}</p>
<p>equipamento alugado: ${equipamento}</p>
<p>Devolva o equipamento em: ${diasAlugados} dias</p>
</div>`;
}
