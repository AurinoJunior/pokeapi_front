import { axiosInstance } from "../lib/axios";

export const api = {
  getPokemonAbilities: async (pokemon: string) => {
    const response = await axiosInstance.get(`${pokemon}/abilities`);
    return response.data;
  },
};
