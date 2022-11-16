import { useState } from "react";
import { useGetCommentQuery } from "../../api/apiSlice";
import dateLocaleFormat from "../../utils/dateLocaleFormat";
import arrowUp from './arrow-up.svg';
import s from './CommentBlock.module.css';

interface CommentProps {
  id: number,
  indent: number,
  showChilds?: boolean
}

function CommentBlock({ id, indent, showChilds = true }: CommentProps) {
  const { data: comment, isSuccess } = useGetCommentQuery(id.toString())
  const [show, setShow] = useState(showChilds);

  return (
    <>
      {isSuccess && !comment.deleted && comment.text &&
        <>
          <div className={s.container} style={{marginLeft: `${indent}em`}}>
            <span className={s.author}>{comment.author}</span>
            <span className={s.date}>{dateLocaleFormat(comment.time)}</span>
            <div className={s.content}>
              <div dangerouslySetInnerHTML={{__html: comment.text || ''}} />
              {comment.childs && !showChilds &&
                <img src={arrowUp} alt="open comment tree"
                  onClick={(event: any) => {
                    setShow(!show);
                    event.target.classList.toggle(s.anim);
                  }}
                />
              }
            </div>
          </div>
          {comment.childs && show && comment.childs.map(childId => (
            <CommentBlock key={childId} id={childId} indent={indent + 2} />
          ))}
        </>
      }
    </>
  )
}

export default CommentBlock;