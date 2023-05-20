import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { Subcategory } from "./subcategory/Subcategory";
import { Border, Categories } from "../types/type";
interface Props {
    name: string
    subcat?: Categories[]
    index: Border
    length?: number
    setData: Dispatch<SetStateAction<Categories[]>>
    data: Categories[]
    item: Categories
    itemIndex: number
    arr: Categories[]
}
export const Category = ({ name, subcat, index, setData, data: value, item, itemIndex, arr }: Props) => {
    const [inputsData, setInputsData] = useState(name)

    const onchangeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setInputsData(e.currentTarget.value)
    }
    const clickHandler = (data: any) => {
        if (data) {
            data.push({ name: inputsData, edit: false, level: item.level + 1 })
            setData(prev => [...prev])
        } else {
            console.log(item, 'item')
            item.subcat = [{ name: inputsData, edit: false, level: item.level + 1 }]
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
                itemIndex={itemIndex}
                arr={arr}
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
                        name={item?.name}
                        subcat={item.subcat}
                        index={z}
                        setData={setData}
                        data={value}
                        item={item}
                        itemIndex={index}
                        arr={subcat}
                    />

                })}
            </div>
        </div>
    )
};

