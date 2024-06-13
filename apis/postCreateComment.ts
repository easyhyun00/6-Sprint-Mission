import { authAxios } from './axios';

/**
 * 게시물 댓글
 */
export const postCreateComment = async (articleId: number, comment: string) => {
  try {
    const response = await authAxios.post(`/articles/${articleId}/comments`, {
      content: comment,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
