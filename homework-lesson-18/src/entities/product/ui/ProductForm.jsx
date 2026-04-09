import { useTranslation } from "react-i18next";
import  Input  from "@/shared/ui/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ProductForm({ product = {}, onSubmit }) {
  const { t } = useTranslation();
  const schema = yup.object({
    name: yup.string().required(t("requiredField")).min(2, "Мінімум 2 символи"),
    price: yup.number().typeError(t("mustBeNum")).required(t("requiredField")).min(1, t("minOne")),
    image: yup.string().url(t("invalidUrl")).nullable().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product?.name || "",
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
      price: Number(data.price),
    });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-2 max-w-md mx-auto">
      <Input label={t("productName")} {...register("name")} error={errors.name?.message} />
      <Input label={t("price")} type="number" step="0.01" {...register("price")} error={errors.price?.message} />
      <Input label={t("productImg")} type="url" {...register("image")} error={errors.image?.message} />
      <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 mt-2">
        {t("save")}
      </button>
    </form>
  );
}
