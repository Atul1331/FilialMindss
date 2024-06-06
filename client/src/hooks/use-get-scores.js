import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetScores = () => {
  const [loading, setLoading] = useState(false);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getScores = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/parentChild/score-get', {
          headers: {
            'Accept': 'application/json',  // Ensure the server responds with JSON
          }
        });

        // Ensure the response is a valid JSON
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }
        setScores(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getScores();
  }, []);

  return { loading, scores };
};
export default useGetScores;