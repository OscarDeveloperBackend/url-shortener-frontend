import InputUrl from "../components/InputUrl";
import ShortenButton from "../components/ShortenButton";
import Response from "../components/Response";
import "../styles/home.css";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [res, setRes] = useState({ shortcode:'214fa', code: 200 });

  const isUrl = (url) => {
    try {
      new URL(url);
      return true;
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return false;
    }
  };

  async function Short() {
    const URL = "http://localhost:3000/url";

    if (url === "") return;
    if (isUrl(url) == false) return;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url_base: url }),
      });
      const json = await response.json();

      if (!response.ok) {
        setRes({ shortcode: null, code: response.status });
        setUrl("");
        return;
      }

      setRes({ shortcode: json.shortcode, code: response.status });
      setUrl("");
    } catch (error) {
      console.log(error.message);
      setRes({ shortcode: null, code: 500 });
      setUrl("");
    }
  }

  return (
    <div className="home">
      <div className="home-container">
        <p className="title">Frontend de mi API acortador de URL en React</p>
        <div className="form">
          <div className="form-content ">
            <p className="text">Inserta la URL para acortar</p>
            <InputUrl
              value={url}
              onChange={setUrl}
              place="https://example.com/very-long-utl-to-shorten"
            />
            <ShortenButton Short={Short} />
          </div>
        </div>
        <Response res={res} setRes={setRes} />
      </div>
    </div>
  );
}
