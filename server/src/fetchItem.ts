import { Post, Comment } from '../../shared/types';

export async function fetchItem(id: number): Promise<Post | Comment> {
  return await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(response => response.json())
    .then((data) => {
      if (data === null) throw new Error('Request is not correct');
      switch (data.type) {
        case 'story':
          return {
            id: data.id,
            author: data.by,
            time: data.time,
            comments: data.kids,
            commentsCount: data.descendants,
            url: data.url,
            rating: data.score,
            title: data.title
          }
        case 'comment':
          return {
            id: data.id,
            author: data.by,
            time: data.time,
            childs: data.kids,
            text: data.text,
            deleted: data.deleted
          }
        default:
          throw new Error(`Unknown item type: "${data.type}"`);
      }
    })
}
