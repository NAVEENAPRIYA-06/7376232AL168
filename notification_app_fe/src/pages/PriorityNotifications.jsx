import { useEffect, useState } from "react";

import { fetchNotifications } from "../services/api";

import NotificationCard from "../components/NotificationCard";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const data = await fetchNotifications();

    const priorityMap = {
      Placement: 3,
      Result: 2,
      Event: 1,
    };

    const sorted = data.sort(
      (a, b) => priorityMap[b.Type] - priorityMap[a.Type]
    );

    const topNotifications = sorted.slice(0, 10);

    setNotifications(topNotifications);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Priority Notifications</h2>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          item={item}
        />
      ))}
    </div>
  );
}

export default PriorityNotifications;