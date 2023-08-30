export default function formatTime(date) {
  const formatDate = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);

  return formatDate.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
