import addIcon from './assests/add_icon_48.png';
import './App.css';
import { Category } from './components/Category';
import React, { useState } from 'react';
import { Border, Categories } from './types/type';
import { Header, scales } from './components/header/Header';
import { Arrows } from './components/arrows/Arrows';
import { useDrag } from './hooks/useDrag';
function App() {
  const [data, setData] = useState<Categories[]>([])
  const [scale, setScale] = useState(8)
  const { boxRef, containerRef, coords } = useDrag()
  const addClickHandler = () => {
    setData(prev => ([...prev, { name: '', level: 1 }]))
  }
  const scaleChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    setScale(parseFloat(e.target.value))
  }

  const clickHandler = (position: string) => {
    if (!boxRef.current) return;
    const box = boxRef.current
    switch (position) {
      case 'top':
        box.style.top = `${box.offsetTop - 20}px`;
        break;
      case 'bottom':
        box.style.top = `${box.offsetTop + 20}px`;
        break;
      case 'right':
        box.style.left = `${box.offsetLeft + 20}px`;
        // forceUpdate(prev => !prev);
        break;
      case 'left':
        box.style.left = `${box.offsetLeft - 20}px`;
        break;

    }
  }
  const centerateHandler = () => {
    if (!boxRef.current) return
    coords.current = {
      lastX: 0,
      lastY: 0,
      startX: 0,
      startY: 0
    }

    boxRef.current.style.top = '100px'
    boxRef.current.style.left = 'auto'
    console.log('clicked')
  }
  return (
    <div className="App">
      <Header centerateHandler={centerateHandler} scaleChangeHandler={scaleChangeHandler} setScale={setScale} scale={scale} />
      <div className='main' ref={containerRef}>
        <Arrows clickHandler={() => clickHandler('top')} style={{ top: '0px' }} />
        <Arrows clickHandler={() => clickHandler('bottom')} style={{ bottom: '0px', transform: 'rotate(180deg)' }} />
        <Arrows clickHandler={() => clickHandler('right')} style={{ right: '-35px', transform: 'rotate(90deg)' }} />
        <Arrows clickHandler={() => clickHandler('left')} style={{ left: '-35px', transform: 'rotate(-90deg)' }} />

        <div ref={boxRef} className='box' style={{ transform: `scale(${scales[scale] / 100})` }}>
          <div className='headerWrapper' >
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: data.length === 1 ? '-50px' : '0px' }} >
              <div className='header'>
                <p style={{ padding: '7px 3px', margin: '0' }}>Categories</p>
              </div>
              <img src={addIcon} alt="add" width='24px' height='24px' onClick={addClickHandler} />
            </div>
            {(data.length > 1) && <div style={{ borderLeft: '2px solid rgba(154, 152, 152, 0.584)', width: '20px', height: '20px' }}></div>}
          </div>
          <div style={{ display: 'flex', width: '100%', backgroundColor: 'inherit' }}>
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
    </div>
  );
}

export default App;
