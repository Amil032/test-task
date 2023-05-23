import classes from "./style.module.css";
import navigationIcon from '../../assests/navigation.png'
import { Dispatch, SetStateAction } from "react";
interface Props {
  centerateHandler: () => void
  scaleChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void
  setScale: Dispatch<SetStateAction<number>>
  scale: number
}
export const Header = ({ centerateHandler, scaleChangeHandler, setScale, scale }: Props) => {
  const scaleInClickHandler = () => {
    setScale(prev => prev + 1)
  }
  const scaleOutClickHandler = () => {
    setScale(prev => prev - 1)
  }

  return (
    <div className={classes.header}>
      <div className={classes.text}>
        <span>Services</span>
        <span className={classes.number}> 0</span>
      </div>

      <div className={classes.tools}>
        <div className={classes.list}>list View</div>
        <div className={classes.navigation} onClick={centerateHandler}>
          <img src={navigationIcon} alt="" />
          <div className={classes.info}>Go to the center</div>
        </div>
        <div className={classes.zoom}>
          <div className={classes.inOut} onClick={scaleOutClickHandler}>
            <p>-</p>
          </div>

          <div className={classes.select}>
            <select value={scale} onChange={scaleChangeHandler} >
              {scales.map((item, index) => (
                <option value={index} key={index + Math.random()} >{item + '%'}</option>
              ))}
            </select>
          </div>
          <div className={classes.inOut} onClick={scaleInClickHandler}>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export const scales = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 200]