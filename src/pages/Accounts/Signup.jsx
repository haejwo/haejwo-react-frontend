import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

export default function Signup() {
    const formSchema = yup.object({
      email: yup
        .string()
        .required('이메일을 입력해주세요')
        .email('이메일 형식이 아닙니다.'),
      password1: yup
        .string()
        .required('영문, 숫자포함 8자리를 입력해주세요.')
        .min(8, '최소 8자 이상 가능합니다')
        .max(15, '최대 15자 까지만 가능합니다')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
          '영문 숫자포함 8자리를 입력해주세요.'
        ),
      password2: yup
        .string()
        .oneOf([yup.ref('password1')], '비밀번호가 다릅니다.'),
    });

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({
      mode: 'onChange',
      resolver: yupResolver(formSchema),
    });

    let backURL = process.env.REACT_APP_BACK_BASE_URL;
    const registerRes = async (data) => {
      const res = await axios({
                      method: "post",
                      url: `${backURL}accounts/signup/`,
                      data: data
                  });
              console.log(res)
              // 성공하면 로그인 페이지로
              .then()
              // 실패하면 에러메시지
              }
    // const onSubmit = (data) => console.log(data);
    return (
      <div className="flex flex-col justify-center items-center p-4">
        <div className='flex bg-fixed my-2'>
          <h1 className='font-bold text-lg'>이메일로 회원가입</h1>
          <Link to='/login'><RxCross2 className='text-zinc-400 mt-1.5 ml-2'/></Link>
        </div>
        <form onSubmit={handleSubmit(registerRes)}
          className='w-screen flex flex-col item-center m-4 p-4'>
          <p className='font-bold mt-3'>이메일</p>
          <input 
            name="email" 
            placeholder="email@haejwo.com" 
            {...register('email')} 
            className='p-2 m-1 border-solid border border-zinc-400 rounded-md'/>
          {errors.email && <p className='text-brand ml-2'>{errors.email.message}</p>}
          <p className='font-bold mt-3'>비밀번호</p>
          <input
            type="password"
            name="password1"
            placeholder="8자리 이상 영문자, 숫자 포함"
            {...register('password1')}
            className='p-2 m-1 border-solid border border-zinc-400 rounded-md'
          />
          {errors.password1 && <p className='text-brand ml-2'>{errors.password1.message}</p>}
          <input
            type="password"
            name="password2"
            placeholder="비밀번호 확인"
            {...register('password2')}
            className='p-2 m-1 border-solid border border-zinc-400 rounded-md'
          />
          {errors.password2 && <p className='text-brand ml-2'>{errors.password2.message}</p>}
          <input 
            type="submit" 
            disabled={errors && !watch()} 
            value="회원가입하기"
            className='p-2 m-1 mt-7 bg-brand text-white text-semibold rounded-md'/>
        </form>
      </div>
    );
}