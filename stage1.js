const Log = require("./logging-middleware/logger");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuYXZlZW5hcHJpeWEuYWwyM0BiaXRzYXRoeS5hYy5pbiIsImV4cCI6MTc3ODIzOTAxOSwiaWF0IjoxNzc4MjM4MTE5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZmI1ZmQwNTQtNzY1Ni00OWRjLTlhYjAtZTc3ZDdkM2Q4NDViIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibmF2ZWVuYXByaXlhIiwic3ViIjoiNmJmYWNlYWMtYmY3Ni00YTVlLTk4Y2EtOTkzODFlYmIwMTdlIn0sImVtYWlsIjoibmF2ZWVuYXByaXlhLmFsMjNAYml0c2F0aHkuYWMuaW4iLCJuYW1lIjoibmF2ZWVuYXByaXlhIiwicm9sbE5vIjoiNzM3NjIzMmFsMTY4IiwiYWNjZXNzQ29kZSI6InVLYUpmbSIsImNsaWVudElEIjoiNmJmYWNlYWMtYmY3Ni00YTVlLTk4Y2EtOTkzODFlYmIwMTdlIiwiY2xpZW50U2VjcmV0IjoiWHdLSkRGVlJnV3NiRkFHcyJ9.ZzgU1t9yu24yhOV-rZyx3NiGDRR9hKXn96XXXWr98IE";

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