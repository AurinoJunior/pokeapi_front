import { IPokemonResponse } from "../@types/pokemon";
import { axiosInstance } from "../lib/axios";

export const api = {
  getPokemonAbilities: async (pokemon: string) => {
    const response = await axiosInstance.get<IPokemonResponse>(
      `${pokemon}/abilities`
    );
    return response.data;
  },
};
