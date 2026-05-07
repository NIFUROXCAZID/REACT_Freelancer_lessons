import { useState } from 'react'
import { useTranslation } from "react-i18next";
import Input from "@/shared/components/inputs/Input";
import Textarea from "@/shared/components/inputs/Textarea";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productTypes } from '@/shared/config/productTypes'

export default function ProductForm({ product = {}, onSubmit, styles }) {
  const { t } = useTranslation();
  const [type, setType] = useState(product?.type || 'user')

  const schema = yup.object({
    name: yup.string().required(t("fieldRequired")).min(2, t("minTwoChar")),
    description: yup.string().required(t("fieldRequired")).min(2, t("minTwoChar")),
    price: yup.number().typeError(t("mustBeNum")).required(t("fieldRequired")).min(1, t("minOne")),
    image: yup.string().url(t("refIncorrect")).nullable().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product?.name || "",
      description: product?.description || "",
      price: product?.price || "",
      image: product?.image || "",
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const submitHandler = (data) => {
    onSubmit({
      ...product,
      ...data,
      type,
      price: Number(data.price),
      likesCount: product?.likesCount ?? 0,
      dislikesCount: product?.dislikesCount ?? 0,
    });
  };

  // Типи продутків (меню, напій, бургер, картопля, курка, крила, соус, стріпси, бургер, наггетс)
  const nameId = "nameId";
  const descriptionId = "descriptionId";
  const priceId = "priceId";
  const imageId = "imageId";

  return (
    <div className='defaultForm'>
      <form className='defaultForm__form' onSubmit={handleSubmit(submitHandler)}>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={nameId}>{t("productName")}</label>
          <Input className="defaultForm__fieldInput" id={nameId} type="text" placeholder={t("productName")} {...register("name")} error={errors.name?.message} />
        </div>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={descriptionId}>{t("productDescription")}</label>
          <Textarea className="defaultForm__fieldInput" id={descriptionId} type="text" placeholder={t("productDescription")} {...register("description")} error={errors.description?.message} />
        </div>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={priceId}>{t("price")}</label>
          <Input className="defaultForm__fieldInput" id={priceId} type="number" placeholder={t("price")} step="0.01" {...register("price")} error={errors.price?.message} />
        </div>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor={imageId}>{t("productImg")}</label>
          <Input className="defaultForm__fieldInput" id={imageId} type="url" placeholder={t("productImg")} {...register("image")} error={errors.image?.message} />
        </div>
        <div className="defaultForm__inputsWrapper defaultForm__inputsWrapper--center">
          <label className="defaultForm__label" htmlFor="type">{t("productType")}</label>
          <select className="defaultForm__select" style={{ minWidth: '220px' }} name="type" value={type} onChange={(e) => setType(e.target.value)}>
            {Object.entries(productTypes).map(([key, value]) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <button className='defaultForm__send' style={{ minWidth: '220px' }} type="submit">{t("save")}</button>
      </form>
    </div>
  );
}
