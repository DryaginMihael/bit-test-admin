function Heading({ text, className, size }) {
  return (
    <h1 className={`${className} text-${size || '3xl'} font-bold text-left`}>
      {text}
    </h1>
  );
}

export default Heading;
