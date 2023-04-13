import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";

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
              .then()
              }
    // const onSubmit = (data) => console.log(data);
    return (
      <div className="App">
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit(registerRes)}>
          <input name="email" placeholder="이메일" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="password"
            name="password1"
            placeholder="비밀번호"
            {...register('password1')}
          />
          {errors.password1 && <p>{errors.password1.message}</p>}
          <input
            type="password"
            name="password2"
            placeholder="비밀번호 확인"
            {...register('password2')}
          />
          {errors.password2 && <p>{errors.password2.message}</p>}
          <input type="submit" disabled={errors && !watch() }/>
        </form>
      </div>
    );
}