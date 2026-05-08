import { useEffect, useState } from "react";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";

import { fetchNotifications } from "../services/api";

import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  const [type, setType] = useState("");

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadNotifications();
  }, [type, page]);

  const loadNotifications = async () => {
    try {
      setLoading(true);

      const data = await fetchNotifications(
        page,
        10,
        type
      );

      setNotifications(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Notifications</h2>

      <FormControl
        fullWidth
        sx={{ marginBottom: 3 }}
      >
        <InputLabel>Filter</InputLabel>

        <Select
          value={type}
          label="Filter"
          onChange={(e) => {
            setPage(1);
            setType(e.target.value);
          }}
        >
          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="Placement">
            Placement
          </MenuItem>

          <MenuItem value="Result">
            Result
          </MenuItem>

          <MenuItem value="Event">
            Event
          </MenuItem>
        </Select>
      </FormControl>

      {loading ? (
        <Typography>
          Loading notifications...
        </Typography>
      ) : notifications.length > 0 ? (
        notifications.map((item) => (
          <NotificationCard
            key={item.ID}
            item={item}
          />
        ))
      ) : (
        <Typography>
          No notifications found
        </Typography>
      )}

      <div style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{ marginRight: 2 }}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default AllNotifications;