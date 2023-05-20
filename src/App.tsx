import addIcon from './assests/add_icon_48.png';
import './App.css';
import { Category } from './components/Category';
import { useState } from 'react';
import { Border, Categories } from './types/type';
function App() {
  const [data, setData] = useState<Categories[]>([])
  const addClickHandler = () => {
    setData(prev => ([...prev, { name: '', level: 1 }]))
  }
  console.log(data)
  return (
    <div className="App">
      <div className='main'>
        <div className='headerWrapper'>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: data.length === 1 ? '-50px' : 'auto' }} >
            <div className='header'>
              <p style={{ padding: '7px 3px', margin: '0' }}>Categories</p>
            </div>
            <img src={addIcon} alt="add" width='24px' height='24px' onClick={addClickHandler} />
          </div>
          {(data.length > 1) && <div style={{ borderLeft: '2px solid rgba(154, 152, 152, 0.584)', width: '20px', height: '20px' }}></div>}
        </div>
        <div style={{ display: 'flex', width: '100%' }}>
          {
            data.map((item, index) => {
              let z: Border
              if (data.length === 1) {
                z = 'one'
              } else if (index === 0) {
                z = 'right'
              } else if (index === data.length - 1) {
                z = 'left'
              } else {
                z = 'both'
              }
              return <Category
                name={item.name}
                subcat={item?.subcat}
                index={z} key={index + Math.random()}
                length={data.length}
                setData={setData}
                data={data}
                item={item}
                itemIndex={index}
                arr={data}
              />
            })
          }
        </div>

      </div>
    </div>
  );
}

export default App;
