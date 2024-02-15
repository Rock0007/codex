import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_REACT_APP_BASE_URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Call the function in your component
useEffect(() => {
  fetchData();
}, []);
