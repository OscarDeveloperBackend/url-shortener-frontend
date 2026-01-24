import './ShortenButton.css'
export default function ShortenButton({ Short }) {

  return (
    <button className='shortenb' type="submit" onClick={Short}>
      Shorten URL
    </button>
  );
}
