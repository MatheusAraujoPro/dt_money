import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TranscactionsTable() {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);
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
