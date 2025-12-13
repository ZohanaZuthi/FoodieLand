import api from "./apiClient";

export const getAllRecipes = () => api.get("recipes/");
export const getRecipeBySlug = (slug) => api.get(`recipes/${slug}/`);
export const getCategories = () => api.get("categories/");
export const createRecipe = (data) => api.post("recipes/create/", data);
export const updateRecipe = (slug, data) => api.put(`recipes/${slug}/update/`, data);
export const deleteRecipe = (slug) => api.delete(`recipes/${slug}/delete/`);
