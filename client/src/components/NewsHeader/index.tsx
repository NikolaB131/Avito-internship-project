import Button from '../generics/Button';
import { useGetNewsQuery } from '../../api/apiSlice';
import s from './NewsHeader.module.css';

function NewsHeader() {
  const { refetch } = useGetNewsQuery();
  return (
    <header className={s.header}>
        <h1>Main page</h1>
        <Button clickHandler={refetch}>Refresh</Button>
    </header>
  );
}

export default NewsHeader;