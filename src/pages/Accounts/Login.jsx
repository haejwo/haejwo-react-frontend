import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const formSchema = yup.object({
    email: yup
      .string()
      .required('이메일은 필수 입력입니다.')
      .email('이메일 형식이 아닙니다.'),
    password: yup
      .string()
      .required('비밀번호는 필수 입력입니다.')
      .min(8, '8자 이상 입력해주세요.'),
    });
    const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useForm({
      mode: 'onChange',
      resolver: yupResolver(formSchema),
    });
    const onSubmit = (data) => console.log(data);
    
    return (
      <div className="flex flex-col justify-center items-center p-4">
        <div className='flex bg-fixed my-2'>
          <h1 className='font-bold text-lg'>로그인</h1>
          <Link to='/'><RxCross2 className='text-zinc-400 mt-1.5 ml-2'/></Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}
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
            name="password"
            placeholder="8자리 이상 영문자, 숫자 포함"
            {...register('password')}
            className='p-2 m-1 border-solid border border-zinc-400 rounded-md'
          />
          {errors.password1 && <p className='text-brand ml-2'>{errors.password1.message}</p>}
          <input 
            type="submit" 
            disabled={errors && !getValues()} 
            value="로그인하기"
            className='p-2 m-1 mt-7 bg-brand text-white text-semibold rounded-md'/>
        </form>
        <h2 className="font-bold text-lg my-3">간편로그인</h2>
        <div className="w-screen flex flex-col items-center p-4">
          <button className="w-full p-2 bg-kakao flex rounded my-2 justify-center items-center"><RiKakaoTalkFill className='text-2xl mx-1'/>카카오톡으로 로그인</button>
          <button className="w-full p-2 flex rounded my-2 border boreder-zinc-400 justify-center items-center"><FcGoogle className='text-2xl mx-1'/>구글로 로그인</button>
        </div>
      </div> 
    );
}