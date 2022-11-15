export type Post = {
  id: number,
  author: string,
  time: number,
  comments: number[] | undefined,
  commentsCount: number,
  url: string | undefined,
  rating: number,
  title: string
}

export type Comment = {
  id: number,
  author: string | undefined,
  time: number,
  childs: number[] | undefined,
  text: string | undefined,
  deleted: boolean
}