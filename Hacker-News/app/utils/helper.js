export const dateFormat = date => {
  return new Date(date * 1000).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  });
};
