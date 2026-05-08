const Log = require("./logging-middleware/logger");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuYXZlZW5hcHJpeWEuYWwyM0BiaXRzYXRoeS5hYy5pbiIsImV4cCI6MTc3ODIzNzUxMCwiaWF0IjoxNzc4MjM2NjEwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNmFkOTJkZmItM2RjMy00NTQ3LTk3Y2EtNmY2ODc2ZGVkODRlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibmF2ZWVuYXByaXlhIiwic3ViIjoiNmJmYWNlYWMtYmY3Ni00YTVlLTk4Y2EtOTkzODFlYmIwMTdlIn0sImVtYWlsIjoibmF2ZWVuYXByaXlhLmFsMjNAYml0c2F0aHkuYWMuaW4iLCJuYW1lIjoibmF2ZWVuYXByaXlhIiwicm9sbE5vIjoiNzM3NjIzMmFsMTY4IiwiYWNjZXNzQ29kZSI6InVLYUpmbSIsImNsaWVudElEIjoiNmJmYWNlYWMtYmY3Ni00YTVlLTk4Y2EtOTkzODFlYmIwMTdlIiwiY2xpZW50U2VjcmV0IjoiWHdLSkRGVlJnV3NiRkFHcyJ9._7YEC1r3WL7qMyYKZg4-u8slRcfNOZr3MaiEGiuAiOo";

const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

const getNotifications = async () => {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    const notifications = data.notifications;

    const sortedNotifications = notifications.sort(
      (a, b) => priorityMap[b.Type] - priorityMap[a.Type]
    );

    const top10 = sortedNotifications.slice(0, 10);

    console.log("TOP 10 PRIORITY NOTIFICATIONS:");

    console.table(top10);

    await Log(
      "frontend",
      "info",
      "component",
      "Fetched and sorted notifications successfully"
    );
  } catch (error) {
    console.log(error);

    await Log(
      "frontend",
      "error",
      "component",
      "Error fetching notifications"
    );
  }
};

getNotifications();