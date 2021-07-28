export default function Calculo({peso,altura}) {
  let calculo = 0;

  if (!peso && !altura){
    calculo = 0;
  } else {
    calculo = (peso / Math.pow(altura,2) * 10000).toFixed(2);
  }

  return (
    <div className="flex flex-col my-4">
      <h4 className="mb-8">
      {`O seu IMC é: ${calculo}`}
      </h4>
      <hr />
      <table className="m-2">
        <thead>
          <tr>
            <th>Valor</th>
            <th>Índice de obesidade</th>
          </tr>
        </thead>
        <tbody className="text-center text-sm">
          <tr>
            <td>Entre 18,5 e 24,9</td>
            <td>Normal - 0</td>
          </tr>
          <tr>
            <td>Entre 25,0 e 29,9</td>
            <td>Sobrepeso - I</td>
          </tr>
          <tr>
            <td>Entre 30,0 e 39,9</td>
            <td>Obesidade - II</td>
          </tr>
          <tr>
            <td>Maior que 40,0</td>
            <td>Obesidade Grave - III</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h6 className="text-center text-sm mt-8">Aluno: Gustavo Arnaldo da Silva</h6>
      <h6 className="text-center text-sm">Pós: Desenvolvimento Full Stack</h6>
    </div>
  );
}
