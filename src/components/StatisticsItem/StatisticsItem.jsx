import { FaUser, FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import style from './StatisticsItem.module.css';

const StatisticsItem = ({ title, total }) => {
  const iconMap = {
    thumbsUp: FaRegThumbsUp,
    people: MdPeople,
    production: MdOutlineProductionQuantityLimits,
    tree: GiTreeDoor,
  };
  const IconComponent = iconMap[icon] || FaUser;
  if (!iconMap[icon]) {
    console.warn(`Иконка "${icon}" не найдена в iconMap, используем FaUser.`);
  }

  return (
    <>
      <IconComponent size={24} className={style.icon} />
      <span className={style.counter}>{count}</span>
      <p className={style.text}>{label}</p>
    </>
  );
};

export default StatisticsItem;
