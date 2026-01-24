import "./Response.css";

const getClasses = (type) => ({
  home: `span-${type}`,
  content: `span-content-${type}`,
  icon: `icon-${type}`,
  content1: `content-${type}`,
  title1: `title-${type}`,
  txt1: `txt-${type}`,
  button: "button-x",
});

export default function Response({ res, setRes }) {
  const { shortcode, code } = res;

  const limpiar = () => {
    setRes({ shortcode: null, code: null });
  };

  if (!shortcode && !code) {
    return null;
  }
  if (code >= 400 && code < 500) {
    return (
      <Alert45
        title="REQUEST WARNING"
        txt="Invalid URL format. Please check your link and try again. "
        className={getClasses(400)}
      />
    );
  }
  if (code >= 500) {
    return (
      <Alert45
        title="SERVER ERROR"
        txt="Please try again later or check your connetion."
        className={getClasses(500)}
      />
    );
  }
  return (
    <div className="span-200">
      <div className="span-content">
        <div className="content-1">
          <p className="text-span">YOUR SHORTENED LINK:</p>
          <p className="result">safasfasfasf{shortcode}</p>
        </div>
        <button onClick={limpiar} className="button-copy">
          Copy Link
        </button>
      </div>
    </div>
  );
}

const Alert45 = ({ title, txt, className }) => {
  const { home, content, icon, content1, title1, txt1, button } = className;
  return (
    <div className={home}>
      <div className={content}>
        <img
          src="../../public/alert_106467.svg"
          alt="icon-alert"
          className={icon}
        />
        <div className={content1}>
          <p className={title1}>{title}</p>
          <p className={txt1}>{txt}</p>
        </div>
        <button className={button}>
          <img
            src="../../public/x_icon_174151.svg"
            width={20}
            height={20}
            alt="icon-x"
          />
        </button>
      </div>
    </div>
  );
};
