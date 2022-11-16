import Button from '../../components/generics/Button';
import CommentBlock from '../../components/CommentBlock';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostQuery, useUpdateCommentsMutation } from '../../api/apiSlice';
import dateLocaleFormat from '../../utils/dateLocaleFormat';
import s from './PostPage.module.css';

function PostPage() {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const {
    data: post,
    isFetching,
    isSuccess,
    isError,
    refetch
  } = useGetPostQuery(id);
  const [updateComments] = useUpdateCommentsMutation();

  return (
    <>
      <section className={s.container}>
        <header className={s.header}>
          <Button clickHandler={() => navigate("/")}>Main page</Button>
          <Button clickHandler={() => {
            refetch();        // refetch post
            updateComments(); // refetch comments
          }}>Refresh comments</Button>
        </header>
        {isFetching && <p style={{margin: '0 auto'}}>Loading...</p>}
        {isError && <p style={{color: 'crimson'}}>Loading error!</p>}
        {isSuccess &&
          <article className={s.article}>
            <div className={s.article_header}>
              <span className={s.date}>{dateLocaleFormat(post.time)}</span>
              <span className={s.author}>by&nbsp;{post.author}</span>
              {post.url && <a href={post.url} target="blank">Link</a>}
            </div>
            <h1>{post.title}</h1>
            <p>Comments: {post.commentsCount}</p>
            {post.comments && post.comments.map(id => (
              <CommentBlock key={id} id={id} indent={0} showChilds={false} />
            ))}
          </article>
        }
      </section>
    </>
  );
}

export default PostPage;