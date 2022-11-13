import s from './Error.module.css';

interface ErrorProps {
  children: string
}

function Error({children}: ErrorProps) {
  return (
    <div className={s.wrapper}>
      <h1>Error: {children}</h1>
    </div>
  );
}

export default Error;