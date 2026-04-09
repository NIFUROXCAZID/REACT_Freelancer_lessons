import { useSignUp } from '../model/useSignUp'
import { useNavigate } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import Input from "@/shared/ui/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next'

export default function SignUpForm({ onSuccess }) {
  const { t } = useTranslation();
  const schema = yup.object({
    displayName: yup.string().required(t("nameRequired")).min(2, t("minTwoChar")),
    email: yup.string().email(t("emailIncorrect")).required(t("eamailRequired")),
    password: yup.string().required(t("passwordRequired")).min(6, t("minSixChar")),
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
      <Input
        label={t("name")}
        placeholder={t("name")}
        {...register("displayName")}
        error={errors.displayName?.message}
      />

      <Input
        label={t("email")}
        type="email"
        placeholder={t("email")}
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        label={t("pass")}
        type="password"
        placeholder={t("pass")}
        {...register("password")}
        error={errors.password?.message}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-base shadow-md hover:from-blue-600 hover:to-indigo-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {t("sign-up")}
      </button>

      {(error || errors.root) && <div className="text-red-500 text-sm">{error?.data?.message || t("error")}</div>}
    </form>
  );
}
