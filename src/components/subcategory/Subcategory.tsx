import addIcon from '../../assests/add_icon_48.png';
import closeIcon from '../../assests/close_icon_48.png';
import editIcon from '../../assests/edit_icon_48.png'
import classes from './style.module.css'
interface Props {
    name: string
    index: 'one' | 'right' | 'left' | 'both'
    length: number
    clickHandler: any
    subcat: any
}
export const Subcategory = ({ name, index, length, clickHandler, subcat }: Props) => {


    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
            <div style={{ display: 'flex', width: '100%' }} >
                <div style={{ height: '20px', width: '50%', borderRight: '2px solid rgba(154, 152, 152, 0.584)', borderTop: (index === 'left' || index === 'both') ? '2px solid rgba(154, 152, 152, 0.584)' : 'none', }}></div>
                <div style={{ height: '20px', width: '50%', borderTop: (index === 'right' || index === 'both') ? '2px solid rgba(154, 152, 152, 0.584)' : 'none' }}></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', }}>
                <div className={classes.imgContainer}  >
                    <p style={{ marginRight: '5px', color: 'white' }}>{name}</p>
                </div>
                <div className={classes.img}  >
                    <img src={addIcon} alt="add" width='24px' height='24px' onClick={() => clickHandler(subcat)} />
                    <img src={editIcon} alt="edit" width='24px' height='24px' />
                    <img src={closeIcon} alt="close" width='24px' height='24px' />
                </div>
            </div>

            {((length !== 1) && !!length) && <div style={{ borderRight: '2px solid rgba(154, 152, 152, 0.584)', width: '2px', height: '20px' }}></div>}
        </div>
    );
};

