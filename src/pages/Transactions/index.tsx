import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export const Transactions = () => {
  return (
    <TransactionsContainer>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">descrição</td>
            <td>
              <PriceHighlight variant="income">R$ valor</PriceHighlight>
            </td>
            <td>Categoria</td>
            <td>data</td>
          </tr>
          <tr>
            <td width="50%">descrição</td>
            <td>
              <PriceHighlight variant="outcome">-R$ valor</PriceHighlight>
            </td>
            <td>Categoria</td>
            <td>data</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
};
