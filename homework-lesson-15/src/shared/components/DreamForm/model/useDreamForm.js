import { useState } from 'react'

export function useItemForm(initialValues = { description: "", year: "", friends: "" }, onSubmit) {
  const [values, setValues] = useState(() => ({ ...initialValues }));
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (vals) => {
    const errs = {};
    if (!vals.description.trim()) errs.description = "Опищіть мрію";
    if (!vals.year.trim()) errs.year = "Введіть дату для здійснення";
    if (!vals.friends.trim()) errs.friends = "Впищіть друзів";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
        setValues({ ...initialValues });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
    setErrors,
  };
}
