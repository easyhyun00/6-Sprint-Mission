import { baseAxios } from '../axios';
import { SignUpInput } from '@/types/auth';

/**
 * 회원가입
 */
export const postSignUp = async (signUpForm: SignUpInput) => {
  console.log('api', signUpForm);
  try {
    const response = await baseAxios.post('/auth/signUp', signUpForm);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
