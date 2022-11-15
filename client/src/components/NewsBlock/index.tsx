import { Link } from 'react-router-dom';
import { Post } from '../../../../shared/types';
import dateLocaleFormat from '../../utils/dateLocaleFormat';
import starImg from './star.svg';
import s from './NewsBlock.module.css';

function NewsBlock(props: {post: Post}) {
  const { id, author, time, rating, title } = props.post;
  return (
    <Link to={`/news/${id}`} className={s.link}>
      <section className={s.section}>
        <span className={s.date}>{dateLocaleFormat(time)}</span>
        <h2>{title}</h2>
        <div className={s.info}>
          <img src={starImg} alt="rating" />
          <span>{rating}</span>
          <span className={s.author}>by&nbsp;{author}</span>
        </div>
      </section>
    </Link>
  )
}

export default NewsBlock;