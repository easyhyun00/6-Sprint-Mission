import baseAxios from './baseAxios';
import { ReqArticle } from '@/types/article';

/**
 * 게시물 작성
 */
export const postArticle = async (article: ReqArticle) => {
  try {
    const response = await baseAxios.post('/articles', article);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
