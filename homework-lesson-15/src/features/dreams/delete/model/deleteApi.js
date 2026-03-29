import { api, db } from "@/shared/api/baseApi";

export const deleteItemApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteItem: builder.mutation({
      async queryFn(id) {
        try {
          await db.delete(id);
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: (result, error, id) => [{ type: "DreamItem", id }, "DreamItemsList"],
    }),
  }),
});

export const { useDeleteItemMutation } = deleteItemApi;
