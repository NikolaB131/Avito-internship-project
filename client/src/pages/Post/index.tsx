import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/generics/Button';
import s from './Post.module.css';

function Post() {
  const navigate = useNavigate();

  return (
    <section className={s.container}>
      <header className={s.header}>
        <Button clickHandler={() => navigate("/")}>Main page</Button>
        <Button>Refresh comments</Button>
      </header>
      <article className={s.article}>
        <div className={s.article_header}>
          <span className={s.date}>date&time</span>
          <a href="">link</a>
        </div>
        <h1>title</h1>
        <p>Comments</p>
      </article>
      <ul className={s.comments}></ul>
    </section>
  );
}

export default Post;