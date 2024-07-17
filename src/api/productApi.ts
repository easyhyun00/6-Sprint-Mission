import { baseAxios } from './api';
import { type OrderType } from 'constants/orderOption';

interface getProductDetailProps {
  page?: number;
  pageSize?: number;
  orderBy?: OrderType;
}

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
}: getProductDetailProps) => {
  try {
    const response = await baseAxios.get('products', {
      params: {
        page,
        pageSize,
        orderBy,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('상품 불러오기 실패');
  }
};
