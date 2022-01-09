import { Summary } from "../Summary";
import { TranscactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TranscactionsTable />
    </Container>
  );
}
