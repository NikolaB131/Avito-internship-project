import s from './NewsBlock.module.css';
import starImg from './star.svg';

function NewsBlock() {
  return (
    <section className={s.section}>
      <span className={s.date}>1</span>
      <h2>dad</h2>
      <div className={s.info}>
        <img src={starImg} alt="rating" />
        <span className={s.rating}>3</span>
        <span className={s.nickname}>4</span>
      </div>
    </section>
  )
}

export default NewsBlock;