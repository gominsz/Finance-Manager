import { useState, useEffect } from 'react';
import * as C from './app.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';


const App = () => {
  const[list, setList] = useState(items);
  const[filteredList, setFilteredList] = useState<Item[]>([]);
  const[currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth );
  }, [list, currentMonth]);


  return (
    <C.Container>
      <C.Headers>
        <C.HeaderText>
            Sistema financeiro
        </C.HeaderText>
      </C.Headers>
      <C.Body>
        <h1>Olá, mundo!</h1>
        <h2>Bem vindo ao sistema financeiro</h2>

        {/**AREA DE INFORMAÇOES */}

        {/**AREA DE INCERÇÃO */}

        {/**tABELA DE ITENS */}
        


      </C.Body>
    </C.Container>
  )
}


export default App