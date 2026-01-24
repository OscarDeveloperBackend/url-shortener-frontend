import "./InputUrl.css";

export default function InputUrl({ value, onChange, place }) {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={place}
    />
  );
}
