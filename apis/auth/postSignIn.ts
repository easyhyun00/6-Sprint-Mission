import { baseAxios } from '../axios';
import { LoginInput } from '@/pages/login';

/**
 * 로그인
 */
export const postSignIn = async (signInForm: LoginInput) => {
  console.log('api', signInForm);
  try {
    const response = await baseAxios.post('/auth/signIn', signInForm);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
