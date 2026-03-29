import { useItemForm } from "../model/useDreamForm";

export default function DreamForm({ onSubmit, initialValues }) {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useItemForm(initialValues, onSubmit);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="description">Опис мрії</label>
        <textarea
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Опис мрії"
        />
        {errors.description && <div>{errors.description}</div>}
      </div>
      <div>
        <label htmlFor="year">Рік здійснення</label>
        <textarea id="year" name="year" value={values.year} onChange={handleChange} placeholder="Рік здійснення" />
        {errors.year && <div>{errors.year}</div>}
      </div>
      <div>
        <label htmlFor="friends">Друзі з якими здійснювать</label>
        <input
          id="friends"
          name="friends"
          value={values.friends}
          onChange={handleChange}
          placeholder="Вписать друзів"
        />
        {errors.friends && <div>{errors.friends}</div>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Зберігаємо..." : "Зберегти"}
      </button>
    </form>
  );
}
