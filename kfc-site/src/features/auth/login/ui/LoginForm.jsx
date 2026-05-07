import React, { useState } from 'react'
import { useLogin } from '../model/useLogin'
import { useNavigate } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'
import Input from '@/shared/components/inputs/Input'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'

import googleIcon from "@/assets/img/icons/google-icon-logo.svg";

export default function LoginForm() {
  const { t } = useTranslation()

  const schema = yup.object({
    email: yup.string().email(t("emailIncorrect")).required(t("emailRequired")),
    password: yup.string().required(t("passRequired")),
  });

  const {register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(schema), mode: "onBlur",});

  const { login, googleLogin, isLoading, error } = useLogin()
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate(frontRoutes.pages.HomePage.navigationPath);
    } catch (err) {
      setErrorMessage(err?.message || t("loginError"));
    }
  };

  const handleGoogle = async () => {
    setErrorMessage('')
    try {
      await googleLogin()
      navigate(frontRoutes.pages.HomePage.navigationPath)
    } catch (err) {
      setErrorMessage(err?.message || t('googleAuthError'))
    }
  }

  const emailId = "emailId";
  const passId = "passId";

  return (
    <div className='defaultForm'>
      <form className='defaultForm__form' onSubmit={handleSubmit(onSubmit)}>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={emailId}>{t('eamil')}</label>
          <Input className="defaultForm__fieldInput" style={{ maxWidth: '350px' }} id={emailId} type="email" placeholder={t("email")} {...register("email")} error={errors.email?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={passId}>{t('pass')}</label>
          <Input className="defaultForm__fieldInput" style={{ maxWidth: '350px' }} id={passId} type="password" placeholder={t("pass")} {...register("password")}error={errors.password?.message}/>
        </div>
        <div style={{marginBottom: "16px" }} className='defaultForm__btn-wrap'>
          <button className='defaultForm__send' type="submit" disabled={isLoading}> <span>{t('log-in')}</span></button>
          <button className='defaultForm__send defaultForm__send--img' type="button" onClick={handleGoogle} disabled={isLoading}>
            <img src={googleIcon} alt="Google icon" width="30" height="30" />
            <span>{t("google")}</span>
          </button>
          {(error || errorMessage) && (
            <div>
              {errorMessage || error?.data?.message || t('loginError')}
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
