import { Writer } from './post';

export type ReqArticle = {
  title: string;
  content: string;
  image?: string;
};

export type Article = {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  writer: Writer;
  isLiked: boolean;
};
