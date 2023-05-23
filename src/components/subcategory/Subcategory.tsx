import { Dispatch, SetStateAction, SyntheticEvent, useRef } from 'react';
import addIcon from '../../assests/add_icon_48.png';
import closeIcon from '../../assests/close_icon_48.png';
import editIcon from '../../assests/edit_icon_48.png'
import confirm from '../../assests/confirm_icon_48.png'
import reject from '../../assests/reject_icon_48.png'
import classes from './style.module.css'
import { Border } from '../../types/type';
import { Keys, colors } from '../../consts/const';

interface Props {
    name: string
    index: Border
    length: number | undefined
    clickHandler: any
    subcat: any
    item: any
    setData: SetStateAction<any>
    onchangeHandler: (e: SyntheticEvent<HTMLInputElement>) => void
    inputsData: string
    itemIndex: number
    arr: any
    // setInputsData: Dispatch<SetStateAction<string>>

}
export const Subcategory = ({ name, index, length, clickHandler, subcat, item, setData, onchangeHandler, inputsData, itemIndex, arr }: Props) => {

    const ref = useRef<HTMLDivElement>(null)

    const ConfirmHandler = () => {
        if (inputsData.length > 0) {
            item.edit = true
            item.name = inputsData
            setData((prev: any) => [...prev])
        }

    }

    const deleteHandler = () => {
        arr.splice(itemIndex, 1)
        setData((prev: any) => [...prev])
    }

    const editHandler = () => {
        item.edit = false
        setData((prev: any) => [...prev])
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
            <div style={{ display: 'flex', width: '100%' }} >
                <div style={{ height: '20px', width: 'calc(50% - 36px)', borderRight: border, borderTop: (index === 'left' || index === 'both') ? border : 'none', }}></div>
                <div style={{ height: '20px', width: 'calc(50% + 36px)', borderTop: (index === 'right' || index === 'both') ? border : 'none' }}></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '0px 10px' }}>
                <div className={classes.imgContainer} style={{ backgroundColor: colors[item.level as Keys] }}>
                    {!!item.edit === true ? <p style={{ marginRight: '5px', color: 'white', minWidth: '60px', textAlign: 'center' }}>{name}</p> :
                        <input className={classes.input}
                            onChange={onchangeHandler}
                            placeholder='Category name'
                            value={inputsData}
                        />}
                </div>
                <div className={classes.img} ref={ref}  >
                    {
                        !!item.edit === true ? <>
                            <img src={addIcon} alt="add" onClick={() => clickHandler(subcat)} />
                            <img src={editIcon} alt="edit" onClick={editHandler} />
                            <img src={closeIcon} alt="close" onClick={deleteHandler} /></> :
                            <>
                                <img src={reject} alt="edit" onClick={deleteHandler} />
                                <img src={confirm} alt="close" onClick={ConfirmHandler} />
                            </>
                    }
                </div>

            </div>

            {((length !== 1) && !!length) && <div style={{ borderLeft: border, width: '72px', height: '20px' }}></div>}
        </div>
    );
};

const border = '2px solid rgba(154, 152, 152, 0.584)'