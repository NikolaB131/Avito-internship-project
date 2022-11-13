import { useEffect } from 'react';
import NewsHeader from '../../components/NewsHeader';
import NewsBlock from '../../components/NewsBlock';
import s from './News.module.css';

function News() {
  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }, []);

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