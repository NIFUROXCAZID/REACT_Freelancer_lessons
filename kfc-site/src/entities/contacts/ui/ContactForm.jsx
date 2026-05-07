import Input from "@/shared/components/inputs/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next'
import Textarea from '@/shared/components/inputs/Textarea';
import { useState } from 'react';
import { useSendContactMessageMutation } from '../api/contactsApi';

export default function ContactsForm() {
  const { t } = useTranslation()
  const schema = yup.object({
    email: yup.string().email(t("emailIncorrect")).required(t("emailRequired")),
    message: yup.string().required(t("textRequired")).min(5, t("minFiveChar")),
  });

  const {register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(schema), mode: "onBlur",});

  const [isSent, setIsSent] = useState(false)
  const [sendMessage] = useSendContactMessageMutation()
  
  const onSubmit = async (data) => {
    await sendMessage(data)
    setIsSent(true)
  }

  if (isSent) {
    return (
      <p className="defaultForm__sended">{t('messageWasSent')} ✅</p>
      )
  }

  const emailId = "emailId";
  const textId = "textId";

  return (
    <div className='defaultForm'>
      <form className='defaultForm__form' onSubmit={handleSubmit(onSubmit)}>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={emailId}>{t('eamilYours')}</label>
          <Input className="defaultForm__fieldInput" id={emailId} type="text" placeholder={t('eamilYours')} {...register("email")} error={errors.email?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={textId}>{t('contactMessage')}</label>
          <Textarea className="defaultForm__textarea" id={textId} type="text" placeholder={t('contactMessage')} {...register("message")} error={errors.message?.message}/>
        </div>
        <button className='defaultForm__send' style={{minWidth: "250px" }} type="submit">{t('sendMessage')}</button>
      </form>
    </div>
  )
}