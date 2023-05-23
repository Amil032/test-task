import React from 'react';
import upIcon from '../../assests/upload.png'
interface Props {
    clickHandler: () => void;
    style?: React.CSSProperties;
}
export const Arrows = ({ clickHandler, style }: Props) => {
    return (
        <div className='arrows'
            onClick={clickHandler}
            style={{ width: '100px', ...style }
            }
        >
            <img src={upIcon} alt="" />
        </div >
    );
};

