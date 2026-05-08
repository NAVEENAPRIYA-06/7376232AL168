import axios from "axios";

export const fetchNotifications = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/notifications"
    );

    return response.data.notifications || [];
  } catch (error) {
    console.log(error);

    return [];
  }
};