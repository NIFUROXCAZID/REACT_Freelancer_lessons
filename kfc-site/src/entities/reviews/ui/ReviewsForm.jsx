import StarRating from '@/shared/components/starsRating/StarRating'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'
import Input from "@/shared/components/inputs/Input";
import Textarea from "@/shared/components/inputs/Textarea";
import { useTranslation } from 'react-i18next'

export function ReviewsForm({user, initialData = {}, onSubmit, isLoading, error, }) {
  const { t } = useTranslation()
  const schema = yup.object({
  title: yup.string().required(t("titleRequired")).min(2, t("minTwoChar")),
  text: yup.string().required(t("textRequired")).min(5, t("minFiveChar")),
  rating: yup.number().min(0.5, t("minHalf")).max(5, t("maxfive")).required(t("ratingRequired")),
  });
  
  const {register, handleSubmit, setValue, watch, formState: { errors },} = useForm({ resolver: yupResolver(schema), mode: "onBlur",
    defaultValues: {
      title: initialData?.title || "",
      text: initialData?.text || "",
      rating: initialData?.rating || 4,
    },
  });

  const isEdit = !!initialData?.id

  const handleSubmitForm = (data) => {
    onSubmit({
      userId: user.id,
      userName: user.displayName,
      userAvatar: user.photoURL,
      ...data,
    });
  };

  const titleId = "titleId";
  const textId = "textId";
  const starsId = "starsId";

  return (
    <div className='defaultForm'>
      <form className='defaultForm__form' onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="defaultForm__inputsWrapper">
          <label className="defaultForm__label" htmlFor={titleId}>{t("reviewTitle")}</label>
          <Input className="defaultForm__fieldInput" id={titleId} type="text" placeholder={t("reviewTitle")} {...register("title")} error={errors.title?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper">
          <label className="defaultForm__label" htmlFor={textId}>{t("reviewText")}</label>
          <Textarea className="defaultForm__textarea" id={textId} type="text" placeholder={t("reviewText")} {...register("text")} error={errors.text?.message}/>
        </div>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={starsId}>{t("reviewRating")}</label>
          <StarRating value={watch("rating")} onChange={(val) => setValue("rating", val)} id={starsId} name={"Stars Rating"} />
          {errors.rating && (
            <p className="defaultForm__errorYup">{errors.rating.message}</p>
          )}
        </div>
        <button style={{minWidth: "220px" }} className='defaultForm__send' type="submit" disabled={isLoading}>
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