import { useSignUp } from '../model/useSignUp'
import { useNavigate } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import Input from "@/shared/components/inputs/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next'

export default function SignUpForm({ onSuccess }) {
  const { t } = useTranslation();
  const schema = yup.object({
    // displayName: yup.string().required("Ім'я обов'язкове").min(2, t("Мінімум 2 символи")),
    displayName: yup.string().required(t("nameRequired")).min(2, t("minTwoChar")).max(22, t("max22Char")),
    email: yup.string().email(t("emailIncorrect")).required(t("emailRequired")),
    password: yup.string().required(t("passRequired")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
    t("passTerms")),
    photoUrl: yup.string().url(t("urlIncorrect")).nullable().notRequired(),
  });

  const { signUp, isLoading, error } = useSignUp();
  const navigate = useNavigate();

  const {register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(schema), mode: "onBlur",});

  const onSubmit = async (data) => {
    try {
      await signUp(data);
      onSuccess && onSuccess();
      navigate(frontRoutes.pages.HomePage.navigationPath);
    } catch (err) {
      // можна або тут обробляти, або залишити як є
    }
  };

  const nameId = "nameId";
  const emailId = "emailId";
  const photoId = "photoId";
  const passId = "passId";
  // у іппуті треба id name type placeholder error

  return (
    <div className='defaultForm'>
      <form className='defaultForm__form' onSubmit={handleSubmit(onSubmit)}>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={nameId}>{t("userName")}</label>
          <Input className="defaultForm__fieldInput" style={{ maxWidth: '350px' }} id={nameId} type="text" placeholder={t("userName")} {...register("displayName")} error={errors.displayName?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={emailId}>{t("userEmail")}</label>
          <Input className="defaultForm__fieldInput" style={{ maxWidth: '350px' }} id={emailId} type="email" placeholder={t("userEmail")} {...register("email")} error={errors.email?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={photoId}>{t("userPhoto")}</label>
          <Input className="defaultForm__fieldInput" style={{ maxWidth: '350px' }} id={photoId} type="url" placeholder={t("userPhoto")} {...register("photoUrl")}error={errors.photoUrl?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={passId}>{t("pass")}</label>
          <Input className="defaultForm__fieldInput" style={{ maxWidth: '350px' }} id={passId} type="password" placeholder={t("pass")} {...register("password")}error={errors.password?.message}/>
        </div>
        <button style={{marginBottom: "20px", minWidth: "220px" }} className='defaultForm__send' type="submit" disabled={isLoading}>{t("sign-up")}</button>

        {(error || errors.root) && <div>{error?.data?.message || t("error")}</div>}
      </form>
    </div>
  );
}
