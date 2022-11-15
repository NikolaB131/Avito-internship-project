import NewsHeader from '../../components/NewsHeader';
import NewsBlock from '../../components/NewsBlock';
import { useGetNewsQuery } from '../../api/apiSlice';
import s from './NewsPage.module.css';

function NewsPage() {
  const {
    data: posts,
    isFetching,
    isSuccess,
    isError
  } = useGetNewsQuery(undefined, {pollingInterval: 60000});

  return (
    <div className={s.container}>
      <NewsHeader />
      {isFetching && <p>Loading...</p>}
      {isError && <p style={{color: 'crimson'}}>Loading error!</p>}
      {isSuccess &&
        posts.map(post => <NewsBlock key={post.id} post={post} />)
      }
    </div>
  );
}

export default NewsPage;