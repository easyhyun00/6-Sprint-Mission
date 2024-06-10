import { Writer } from './post';

export type ArticleComment = {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  writer: Writer;
};

export type ArticleCommentList = {
  list: ArticleComment[];
  nextCursor: number | null;
};
