import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

function NotificationCard({ item }) {
  const readItems =
    JSON.parse(localStorage.getItem("read")) || [];

  const isRead = readItems.includes(item.ID);

  const handleRead = () => {
    let updated = [...readItems];

    if (!updated.includes(item.ID)) {
      updated.push(item.ID);

      localStorage.setItem(
        "read",
        JSON.stringify(updated)
      );

      window.location.reload();
    }
  };

  return (
    <Card
      sx={{
        marginBottom: 2,
        backgroundColor: isRead
          ? "#f0f0f0"
          : "#ffffff",
      }}
      onClick={handleRead}
    >
      <CardContent>
        <Typography variant="h6">
          {item.Message}
        </Typography>

        <Typography>
          Type: {item.Type}
        </Typography>

        <Typography>
          Time: {item.Timestamp}
        </Typography>

        <Chip
          label={isRead ? "Read" : "Unread"}
          color={isRead ? "success" : "error"}
          sx={{ marginTop: 1 }}
        />
      </CardContent>
    </Card>
  );
}

export default NotificationCard;