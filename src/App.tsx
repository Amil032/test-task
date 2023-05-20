import addIcon from './assests/add_icon_48.png';
import './App.css';

import { Border, Category } from './components/Category';
import { useState } from 'react';

const categories = [
  {
    name: 'Category1',
    subcat: [{
      name: 'subcat1',
      subcat: [{
        name: 'subsubcat',
        subcat: [{
          name: 'subcatsubcat2'
        }]
      }]
    }, {
      name: 'subcat2'
    }
    ]

  },
  {

    name: 'Category2',
    subcat: [
      {
        name: 'sub1',
        subcat: [
          {
            name: 'subsubcat',
            subcat: [{
              name: 'subcatsubcat2'
            }]
          }, { name: 'ddfdfd' }
        ]
      }
    ]

  }
  ,
  {
    name: 'Category3',
    subcat: [{
      name: 'subcut3',
      subcat: [
        {
          name: 'subcutsub3',
          subcat: [
            {
              name: 'subsubsub3',
              subcat: [
                {
                  name: 'subsubsub3',
                  subcat: []
                },
                {
                  name: 'subsubsub32'
                }
              ]
            },
            {
              name: 'subsubsub32', subcat: [
                {
                  name: 'subsubsub3',
                  subcat: [
                    {
                      name: 'subsubsub4'
                    },
                    {
                      name: 'subsubsub42',

                    }
                  ]
                },
                {
                  name: 'subsubsub32'
                }
              ]
            }
          ]
        },
        {
          name: 'subcutsub4',
          subcat: [
            {
              name: 'subsubsub4',
              subcat: [
                {
                  name: 'subsubsub4',
                  subcat: [
                    {
                      name: 'subsubsub4'
                    },
                    {
                      name: 'subsubsub42',

                    }
                  ]
                },
                {
                  name: 'subsubsub42',

                }
              ]
            },
            {
              name: 'subsubsub42',

            }
          ]
        }]
    }]
  }
  ,
  {
    name: 'Category3',
    subcat: [{
      name: 'subcut3',
      subcat: [
        {
          name: 'subcutsub3',
          subcat: [
            {
              name: 'subsubsub3',
              subcat: [
                {
                  name: 'subsubsub3',
                  subcat: []
                },
                {
                  name: 'subsubsub32'
                }
              ]
            },
            {
              name: 'subsubsub32', subcat: [
                {
                  name: 'subsubsub3',
                  subcat: [
                    {
                      name: 'subsubsub4'
                    },
                    {
                      name: 'subsubsub42',

                    }
                  ]
                },
                {
                  name: 'subsubsub32'
                }
              ]
            }
          ]
        },
        {
          name: 'subcutsub4',
          subcat: [
            {
              name: 'subsubsub4',
              subcat: [
                {
                  name: 'subsubsub4',
                  subcat: [
                    {
                      name: 'subsubsub4'
                    },
                    {
                      name: 'subsubsub42',

                    }
                  ]
                },
                {
                  name: 'subsubsub42',

                }
              ]
            },
            {
              name: 'subsubsub42',

            }
          ]
        }]
    }]
  }
  , {
    name: 'ail'
  }
]

function App() {
  const [data, setData] = useState<Array<any>>([])
  const addClickHandler = () => {
    setData(prev => ([...prev, { name: 'amiloamilo' }]))

  }
  console.log(data)
  return (

    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px', alignItems: 'center', overflow: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '2px solid rgba(154, 152, 152, 0.584)', borderRadius: '10px' }}>
            <p>Categories</p>
            <img src={addIcon} alt="add" width='24px' height='24px' onClick={addClickHandler} />
          </div>
          {(data.length > 1) && <div style={{ borderRight: '2px solid rgba(154, 152, 152, 0.584)', width: '2px', height: '20px' }}></div>}
        </div>
        <div style={{ display: 'flex', width: '100%' }}>
          {
            Array.isArray(data) && data?.map((item, index) => {
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
