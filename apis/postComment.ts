import baseAxios from './baseAxios';

/**
 * 게시물 댓글
 */
export const postComment = async (articleId: number, comment: string) => {
  try {
    const response = await baseAxios.post(`/articles/${articleId}/comments`, {
      content: comment,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
