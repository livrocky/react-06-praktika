function SectionTitle(props) {
  const { title, subtitle } = props;
  return (
    <div className='Services'>
      <h1 className='main-title'>{title}</h1>
      <p className='main-subtitle'>{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
