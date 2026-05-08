# Stage 1

## Priority Logic

Notifications are prioritized based on type.

Priority Order:
1. Placement
2. Result
3. Event

Placement notifications are considered most important because they affect career opportunities.

## Sorting Logic

Notifications are fetched from the API and sorted using a priority map.

## Top Notifications

The top 10 notifications are selected after sorting.

## Logging Middleware

A reusable logging middleware was created using the provided logging API.

Logs are generated for:
- successful API fetch
- sorting completion
- errors during execution

## Technology Used

- JavaScript
- Node.js
- Fetch API