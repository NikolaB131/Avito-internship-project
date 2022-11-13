import s from './News.module.css';
import NewsHeader from '../components/NewsHeader';
import NewsBlock from '../components/NewsBlock';

function News() {
  return (
    <div className={s.container}>
      <NewsHeader />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
    </div>
  );
}

export default News;