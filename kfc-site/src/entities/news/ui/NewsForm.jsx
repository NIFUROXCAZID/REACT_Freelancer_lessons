import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'
import Input from "@/shared/components/inputs/Input";
import { useTranslation } from 'react-i18next'

export function NewsForm({ initialData = {}, onSubmit, isLoading, error, }) {
  const { t } = useTranslation()
  const schema = yup.object({
    title: yup.string().required(t("titleRequired")).min(2, t("minTwoChar")),
    ref: yup.string().url(t("refIncorrect")).required(t("refRequired")),
    imgSrc: yup.string().url(t("refIncorrect")).nullable().notRequired(),
  });
  
  const {register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(schema), mode: "onBlur",
    defaultValues: {
      title: initialData?.title || "",
      ref: initialData?.ref || "",
      imgSrc: initialData?.imgSrc || "",
    },
  });

  const isEdit = !!initialData?.id

  const handleSubmitForm = (data) => {
    onSubmit(data);
  };

  const titleId = "titleId";
  const refId = "textId";
  const photoId = "starsId";

  return (
    <div className='defaultForm'>
      <form className='defaultForm__form' onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="defaultForm__inputsWrapper">
          <label className="defaultForm__label" for={titleId}>{t("newsTitle")}</label>
          <Input className="defaultForm__fieldInput" id={titleId} type="text" placeholder={t("newsTitle")} {...register("title")} error={errors.title?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper">
          <label className="defaultForm__label" for={refId}>{t("newsRef")}</label>
          <Input className="defaultForm__fieldInput" id={refId} type="text" placeholder={t("newsRef")} {...register("ref")} error={errors.ref?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper">
          <label className="defaultForm__label" for={photoId}>{t("newsPhotoUrl")}</label>
          <Input className="defaultForm__fieldInput" id={photoId} type="url" placeholder={t("newsPhotoUrl")} {...register("imgSrc")} error={errors.imgSrc?.message}/>
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