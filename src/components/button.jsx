import Link from 'next/link';

const Button = ({ buttonText, buttonLink }) => {
  return (
    <div className="frame">
      <Link className='custom-btn btn-1' href={{ pathname: buttonLink }} target='_blank'>
        <span>{buttonText}</span>
      </Link>
    </div>
  );
};

export default Button;