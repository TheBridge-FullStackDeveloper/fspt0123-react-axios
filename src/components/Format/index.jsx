const Format = ({ value }) => {
  return <span>{value.toString().padStart(2, '0')}</span>;
};

export default Format;
