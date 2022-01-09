import { Container } from "./styles";

export function TranscactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de WebSites</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>10/05/2021</td>
          </tr>

          <tr>
            <td>Aluguel do quarto</td>
            <td className="withdraw"> - R$1.000</td>
            <td>Desenvolvimento</td>
            <td>10/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
