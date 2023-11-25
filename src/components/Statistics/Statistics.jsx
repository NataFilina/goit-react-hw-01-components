import css from './Statistics.module.css'
import getRandomHexColor from 'components/randomColor';

const Statistics = ({ stats, title }) => {
    const statisticList = stats.map((elem) => (
        <li key={elem.id} className={css.item} style={{
        backgroundColor: getRandomHexColor(),
      }}>
            <span className={css.label}>{elem.label}</span>
            <span className={css.percentage}>{elem.percentage}%</span>
        </li>
    ))
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>{statisticList}</ul>
        </section>
    )
}

export default Statistics