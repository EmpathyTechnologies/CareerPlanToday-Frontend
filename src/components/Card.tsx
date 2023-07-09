function Card({ img, alt, title, text, src }: any) {
  return (
    <div className='card'>
      <img className='card-img' src={img} alt={alt} />
      <h2 className='card-title'>{title}</h2>
      <div className='card-text'>{text}</div>
    </div>
  );
}

export default Card;
