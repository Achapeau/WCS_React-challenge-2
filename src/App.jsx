import Data from './data/challenge.json'
import Card from './components/card';
import { useState } from 'react';

const App = () => {
  
  const [search, setSearch] = useState('')
  const [beach, setBeach] = useState('')
  const [mountain, setMountain] = useState('')
  const [bird, setBird] = useState('')
  const [food, setFood] = useState('')
  // const [presentation, setPresentation] = ()
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  const handleClickMountain = () => {
    setMountain('Mountain')
  }
  
  const handleClickBeach = () => {
    setBeach('Beach')
  }
  
  const handleClickBird = () => {
    setBird('Bird')
  }
  
  const handleClickFood = () => {
    setFood('Food')
  }

  const handleClickReset = () => {
    setBeach('');
    setBird('');
    setFood('');
    setMountain('');

  // const handleClickPresentation = () => {

  // }
    
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
            <button className='reset' type="reset" onClick={handleClickReset}>Reset</button>
          </div>
        </div>
    </div>



      <div className="block-picture">

        {Data.filter((elem) => 
                search === '' || elem.name.toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()))
              .filter((elem) => mountain === '' || elem.category === mountain)
              .filter((elem) => beach === '' || elem.category === beach)
              .filter((elem) => bird === '' || elem.category === bird)
              .filter((elem) => food === '' || elem.category === food)
        
        .map((item) => 
          <Card key={item.id} id={item.id} category={item.category} picture={item.picture} name={item.name}  />
        )
        }
      </div>
    </>
  );
};

export default App;
