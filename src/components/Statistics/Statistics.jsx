// import { FaRegThumbsUp } from 'react-icons/fa';
// import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
// import { GiTreeDoor } from 'react-icons/gi';

import StatisticsItem from '../StatisticsItem/StatisticsItem.jsx';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }) => (
          <li key={id} className={style.item}>
            <StatisticsItem icon={icon} title={title} total={total} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
