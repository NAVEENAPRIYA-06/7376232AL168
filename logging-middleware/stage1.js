const fetch = require("node-fetch");

const getNotifications = async () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuYXZlZW5hcHJpeWEuYWwyM0BiaXRzYXRoeS5hYy5pbiIsImV4cCI6MTc3ODIzNTAyMCwiaWF0IjoxNzc4MjM0MTIwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMzk2OWFmZDAtZjlkYS00ZjA0LWEzMjctOGEwZmRkM2VjNzExIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibmF2ZWVuYXByaXlhIiwic3ViIjoiNmJmYWNlYWMtYmY3Ni00YTVlLTk4Y2EtOTkzODFlYmIwMTdlIn0sImVtYWlsIjoibmF2ZWVuYXByaXlhLmFsMjNAYml0c2F0aHkuYWMuaW4iLCJuYW1lIjoibmF2ZWVuYXByaXlhIiwicm9sbE5vIjoiNzM3NjIzMmFsMTY4IiwiYWNjZXNzQ29kZSI6InVLYUpmbSIsImNsaWVudElEIjoiNmJmYWNlYWMtYmY3Ni00YTVlLTk4Y2EtOTkzODFlYmIwMTdlIiwiY2xpZW50U2VjcmV0IjoiWHdLSkRGVlJnV3NiRkFHcyJ9.-v5yHH4_qKc5RXmyhGOVexXxbakJMREcmEx01R3EdRE";

  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  console.log(data);
};

getNotifications();