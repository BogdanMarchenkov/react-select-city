import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Order from './Order';
import SelectForm from './SelectForm';

const App = () => {

  const cityOptions = [
    {
      value: "Київ",
      label: "Київ"
    },
    {
      value: "Львів",
      label: "Львів"
    },
    {
      value: "Дніпро",
      label: "Дніпро"
    },
    {
      value: "Одеса",
      label: "Одеса"
    }
  ]

  const [currentCity, setCurrentCity] = useState("")

  if (currentCity === null) return (setCurrentCity({ value: "", label: "" }))
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='' element={<SelectForm setCurrentCity={setCurrentCity} cityOptions={cityOptions} city={currentCity.value} />} />
          <Route path='/order' element={<Order city={currentCity.value} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
