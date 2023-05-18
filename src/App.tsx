import addIcon from './assests/add_icon_48.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px', alignItems: 'center' }}>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '2px solid gray' }}>
            <p>Head category</p>
            <img src={addIcon} alt="add" width='24px' height='24px' />
          </div>
          <div style={{ borderRight: '2px solid gray', width: '2px', height: '20px' }}></div>
        </div>


        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

          <div style={{ width: '100%' }}>
            <div style={{ backgroundColor: 'white', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', width: '100%' }} >
                  <div style={{ height: '20px', width: '50%', borderRight: '2px solid gray' }}></div>
                  <div style={{ height: '20px', width: '50%', borderTop: '2px solid gray' }}></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', border: '2px solid gray', width: 'fit-content' }}>
                  <p>Categories</p>
                  <img src={addIcon} alt="add" width='24px' height='24px' />
                </div>
              </div>
            </div>
          </div>



          <div style={{ width: '100%' }}>
            <div style={{ backgroundColor: 'white', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', width: '100%' }} >
                  <div style={{ height: '20px', width: '50%', borderRight: '2px solid gray', borderTop: '2px solid gray' }}></div>
                  <div style={{ height: '20px', width: '50%', borderTop: '2px solid gray' }}></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', border: '2px solid gray', width: 'fit-content' }}>
                  <p>Categories</p>
                  <img src={addIcon} alt="add" width='24px' height='24px' />
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '100%' }}>
            <div style={{ backgroundColor: 'white', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', width: '100%' }} >
                  <div style={{ height: '20px', width: '50%', borderRight: '2px solid gray', borderTop: '2px solid gray' }}></div>
                  <div style={{ height: '20px', width: '50%', borderTop: '2px solid gray' }}></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', border: '2px solid gray', width: 'fit-content' }}>
                  <p>Categories</p>
                  <img src={addIcon} alt="add" width='24px' height='24px' />
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '100%' }}>
            <div style={{ backgroundColor: 'white', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', width: '100%' }} >
                  <div style={{ height: '20px', width: '50%', borderRight: '2px solid gray', borderTop: '2px solid gray' }}></div>
                  <div style={{ height: '20px', width: '50%' }}></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', border: '2px solid gray', width: 'fit-content' }}>
                  <p>Categories</p>
                  <img src={addIcon} alt="add" width='24px' height='24px' />
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
}

export default App;
