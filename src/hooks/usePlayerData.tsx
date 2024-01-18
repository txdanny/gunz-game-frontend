"use client";

import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";
import { IndividualsPlayer, Player } from "@/utils/types";
import { API_URL, INDIVIDUALPLAYERS, PLAYERS } from "@/config";

// Apply axios-retry globally
axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export const usePlayerData = (
  config?: AxiosRequestConfig
): {
  players: Player[] | null;
  individualplayers: IndividualsPlayer[] | null;
  loadMore: () => void;
  loading: boolean;
  error: string | null;
} => {
  const endpoint = API_URL + "/user/ranking";
  const [players, setPlayers] = useState<Player[] | null>(null);
  const [individualplayers, setIndividualPlayers] = useState<
    IndividualsPlayer[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadMore = () => {};

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Player[]>(endpoint, config);
        setPlayers(response.data);
      } catch (err) {
        setError("Error fetching player data");
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerData();
  }, [endpoint, config]);

  return {
    players: players ? players : PLAYERS,
    individualplayers: individualplayers
      ? individualplayers
      : INDIVIDUALPLAYERS,
    loadMore,
    loading,
    error,
  }; // for demo
};
