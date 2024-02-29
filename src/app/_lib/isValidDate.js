function isValidDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(dateString)) {
    return false;
  }

  const dateObj = new Date(dateString);
  const timestamp = dateObj.getTime();

  if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
    return false;
  }

  return dateObj.toISOString().startsWith(dateString);
}

export default isValidDate