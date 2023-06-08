import Data from './data/challenge.json'
import Card from './components/card';
import { useState } from 'react';

const App = () => {
  
  const [search, setSearch] = useState('')
  const [beach, setBeach] = useState('')
  const [mountain, setMountain] = useState('')
  const [bird, setBird] = useState('')
  const [food, setFood] = useState('')


  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  const handleClickMountain = () => {
    setMountain(mountain ==='Mountain'? '' : 'Mountain');
    
  }
  
  const handleClickBeach = () => {
    setBeach(beach === 'Beach' ? '' : 'Beach')
  }
  
  const handleClickBird = () => {
    setBird(bird === 'Bird' ? '' : 'Bird')
  }
  
  const handleClickFood = () => {
    setFood(food === 'Food' ? '' : 'Food')
  }


  
  return (



    <><div className="body">
        <h1 id="main-title">Snapshot</h1>
        <div className="block-filters">
          <div className="research">
            <input type="text" onChange={handleSearch} />
          </div>
          <div className="filters">
            <button type="submit" onClick={handleClickMountain}>Mountain</button>
            <button type="submit" onClick={handleClickBeach}>Beach</button>
            <button type="submit" onClick={handleClickBird}>Bird</button>
            <button type="submit" onClick={handleClickFood}>Food</button>
          </div>
        </div>
    </div>



      <div className="block-picture">

        {Data.filter((elem) => 
                search === '' || elem.name.toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()))
              .filter((elem) => mountain === '' || (elem.category === mountain || elem.category === beach || elem.category === bird || elem.category === food))
              .filter((elem) => beach === ''  || (elem.category === beach || elem.category === mountain || elem.category === bird || elem.category === food))
              .filter((elem) => bird === '' || (elem.category === bird || elem.category === mountain || elem.category === beach ||elem.category === food))
              .filter((elem) => food === '' || (elem.category === food || elem.category === mountain || elem.category === beach || elem.category === bird))
        .map((item) => 
          <Card key={item.id} id={item.id} category={item.category} picture={item.picture} name={item.name}  />
        )
        }
      </div>
    </>
  );
};

export default App;
