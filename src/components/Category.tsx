import { SetStateAction } from "react";
import { Subcategory } from "./subcategory/Subcategory";
interface Props {
    name: string
    subcat?: any
    index: 'one' | 'right' | 'left' | 'both'
    length: number
    setData: SetStateAction<any>
    data: any
}
export const Category = ({ name, subcat, index, length, setData, data: value }: Props) => {
    const clickHandler = (data: any) => {
        if (data) {
            data = [...data, { name: `${Math.random()}` }]
            setData([...value])
        }
        console.log(data)

    }
    console.log(subcat)
    return (

        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '100%' }}>
            <Subcategory name={name} index={index} length={subcat?.length} clickHandler={clickHandler} subcat={subcat} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {subcat?.map((item: any, index: number) => {
                    let z: 'one' | 'right' | 'left' | 'both'
                    if (subcat.length === 1) {
                        z = 'one'
                    } else if (index === 0) {
                        z = 'right'
                    } else if (index === subcat.length - 1) {
                        z = 'left'
                    } else {
                        z = 'both'
                    }
                    return <Category key={index + Math.random()} name={item?.name} subcat={item.subcat} index={z} length={subcat.length} setData={setData} data={value} />
                })}
            </div>
        </div>
    )
};

