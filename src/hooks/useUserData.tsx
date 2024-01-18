import { useState, useEffect } from "react";
import axios from "axios";
import axiosRetry from "axios-retry";
import { Player } from "@/utils/types";

// Configure axios-retry
axiosRetry(axios, {
  retries: 3, // Number of retries
  retryDelay: axiosRetry.exponentialDelay, // Exponential delay between retries
});

const useUserData = (userId: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<Player | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/user/${userId}`); // Replace with your actual API endpoint

        // Assuming your API returns the user data in the expected format
        const user = response.data as Player;
        setUserData(user);
      } catch (err) {
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  return { userData, loading, error };
};

export default useUserData;
