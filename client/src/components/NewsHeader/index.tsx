import Button from '../generics/Button';
import s from './NewsHeader.module.css';

function NewsHeader() {
  return (
    <header className={s.header}>
        <h1>Main page</h1>
        <Button>Refresh</Button>
    </header>
  );
}

export default NewsHeader;