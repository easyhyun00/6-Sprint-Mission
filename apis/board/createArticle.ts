import { authAxios } from '../axios';
import { ReqArticle } from '@/types/article';

/**
 * 게시물 작성
 */
export const createArticle = async (article: ReqArticle) => {
  try {
    const response = await authAxios.post('/articles', article);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
