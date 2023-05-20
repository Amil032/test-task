import { SetStateAction, SyntheticEvent, useRef } from 'react';
import addIcon from '../../assests/add_icon_48.png';
import closeIcon from '../../assests/close_icon_48.png';
import editIcon from '../../assests/edit_icon_48.png'
import confirm from '../../assests/confirm_icon_48.png'
import reject from '../../assests/reject_icon_48.png'
import classes from './style.module.css'

interface Props {
    name: string
    index: 'one' | 'right' | 'left' | 'both'
    length: number
    clickHandler: any
    subcat: any
    item: any
    setData: SetStateAction<any>
    onchangeHandler: (e: SyntheticEvent<HTMLInputElement>) => void
    inputsData: string
    itemIndex: number
    arr: any

}
export const Subcategory = ({ name, index, length, clickHandler, subcat, item, setData, onchangeHandler, inputsData, itemIndex, arr }: Props) => {

    const ref = useRef<HTMLDivElement>(null)

    const ConfirmHandler = () => {
        item.edit = true
        item.name = inputsData
        setData((prev: any) => [...prev])
    }

    const deleteHandler = () => {
        // eslint-disable-next-line no-delete-var
        arr.splice(itemIndex, 1)
        setData((prev: any) => [...prev])
        console.log(index, 'indexxx')
    }

    const editHandler = () => {
        item.edit = false
        setData((prev: any) => [...prev])
        console.log('clicked')
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
            <div style={{ display: 'flex', width: '100%' }} >
                <div style={{ height: '20px', width: 'calc(50% - 36px)', borderRight: '2px solid rgba(154, 152, 152, 0.584)', borderTop: (index === 'left' || index === 'both') ? '2px solid rgba(154, 152, 152, 0.584)' : 'none', }}></div>
                <div style={{ height: '20px', width: 'calc(50% + 36px)', borderTop: (index === 'right' || index === 'both') ? '2px solid rgba(154, 152, 152, 0.584)' : 'none' }}></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', }}>
                <div className={classes.imgContainer}  >
                    {!!item.edit === true ? <p style={{ marginRight: '5px', color: 'white' }}>{name}</p> :
                        <input className={classes.input} onChange={onchangeHandler} />}
                </div>
                <div className={classes.img} ref={ref}  >
                    {
                        !!item.edit === true ? <>
                            <img src={addIcon} alt="add" width='24px' height='24px' onClick={() => clickHandler(subcat)} />
                            <img src={editIcon} alt="edit" width='24px' height='24px' onClick={editHandler} />
                            <img src={closeIcon} alt="close" width='24px' height='24px' onClick={deleteHandler} /></> :
                            <>
                                <img src={reject} alt="edit" width='24px' height='24px' onClick={deleteHandler} />
                                <img src={confirm} alt="close" width='24px' height='24px' onClick={ConfirmHandler} />
                            </>
                    }
                </div>

            </div>

            {((length !== 1) && !!length) && <div style={{ borderLeft: '2px solid rgba(154, 152, 152, 0.584)', width: '72px', height: '20px' }}></div>}
        </div>
    );
};

