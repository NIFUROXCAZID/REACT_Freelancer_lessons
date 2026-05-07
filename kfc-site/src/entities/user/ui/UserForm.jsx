import { roles } from '@/shared/config/roles'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Input from '@/shared/components/inputs/Input';

export function UserForm({ initialData = {}, onSubmit, isLoading, error, }) {
  const { t } = useTranslation()

  const schema = yup.object({
    email: yup.string().email(t("emailIncorrect")).required(t("eamailRequired")),
    displayName: yup.string().required(t("nameRequired")).min(2, t("minTwoChar")).max(22, t("max22Char")),
    role: yup.string().required(t("roleRequired")),
    photoURL: yup.string().url("Невірний URL").nullable().notRequired(),
  });

  const {register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(schema), mode: "onBlur",
    defaultValues: {
      email: initialData?.email || "",
      displayName: initialData?.displayName || "",
      role: initialData?.role || "user",
      photoURL: initialData?.photoURL || "",
    },
  });

  const isEdit = !!initialData?.id

  const handleSubmitForm = (data) => {
    onSubmit(data);
  };

  const nameId = "nameId";
  const emailId = "emailId";
  const photoId = "photoId";
  const roleId = "roleId";

  return (
    <div className='defaultForm'>
      <form className='defaultForm__form' onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="defaultForm__inputsWrapper">
          <label className="defaultForm__label" htmlFor={emailId}>{t("userEmail")}</label>
          <Input className="defaultForm__fieldInput" id={emailId} type="email" placeholder={t("userEmail")} {...register("email")} error={errors.email?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper">
          <label className="defaultForm__label" htmlFor={nameId}>{t("userName")}</label>
          <Input className="defaultForm__fieldInput" id={nameId} type="text" placeholder={t("userName")} {...register("displayName")} error={errors.displayName?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper">
          <label className="defaultForm__label" htmlFor={photoId}>{t("userPhoto")}</label>
          <Input className="defaultForm__fieldInput" id={photoId} type="url" placeholder={t("userPhoto")} {...register("photoURL")} error={errors.photoURL?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper">
          <label className="defaultForm__label" htmlFor={roleId}>{t("userRole")}</label>
          <select className="defaultForm__select" id={roleId} name="role" type="select" {...register("role")}>
            {Object.entries(roles).map(([key, value]) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
          {errors.role && (
            <p className="defaultForm__errorYup">
              {errors.role.message}
            </p>
          )}
        </div>
        <button style={{ minWidth: '220px' }} className='defaultForm__send' type="submit" disabled={isLoading}>
          {isEdit ? t('save') : t('add')}
        </button>

        {error && (
          <div style={{ color: 'red' }}>
            {error?.data?.message || t('error')}
          </div>
        )}
      </form>
    </div>
  )
}