import { SetStateAction, SyntheticEvent, useState } from "react";
import { Subcategory } from "./subcategory/Subcategory";
interface Props {
    name: string
    subcat?: any
    index: Border
    length: number
    setData: SetStateAction<any>
    data: any
    item: any
}
export const Category = ({ name, subcat, index, length, setData, data: value, item }: Props) => {
    const [inputsData, setInputsData] = useState('')
    const onchangeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setInputsData(e.currentTarget.value)
    }
    const clickHandler = (data: any) => {
        if (data) {
            data.push({ name: inputsData, edit: false })
            setData((prev: any) => [...prev])
        } else {
            console.log(item, 'item')
            item.subcat = [{ name: inputsData, edit: false }]
            setData((prev: any) => [...prev])
        }
        console.log(data, 'data')

    }
    console.log(subcat, 'subcut')
    return (

        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '100%' }}>
            <Subcategory
                name={name}
                index={index}
                length={subcat?.length}
                clickHandler={clickHandler}
                subcat={subcat}
                item={item}
                setData={setData}
                onchangeHandler={onchangeHandler}
                inputsData={inputsData}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {subcat?.map((item: any, index: number) => {
                    let z: Border
                    if (subcat.length === 1) {
                        z = 'one'
                    } else if (index === 0) {
                        z = 'right'
                    } else if (index === subcat.length - 1) {
                        z = 'left'
                    } else {
                        z = 'both'
                    }
                    return <Category
                        key={index + Math.random()}
                        name={item?.name} subcat={item.subcat}
                        index={z} length={subcat.length}
                        setData={setData} data={value}
                        item={item} />
                })}
            </div>
        </div>
    )
};

export type Border = 'one' | 'right' | 'left' | 'both'