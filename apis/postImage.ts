import baseAxios from './baseAxios';

/**
 * 이미지 업로드
 */
export const postImage = async (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  try {
    const response = await baseAxios.post('/images/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
