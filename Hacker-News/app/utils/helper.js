export const dateFormat = date => {
  return new Date(date * 1000).toLocaleDateString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  });
};
