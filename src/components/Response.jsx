import "./Response.css";

const icons = {
  400: "/warning_35dp_F59E0B_FILL0_wght400_GRAD0_opsz40.svg",
  500: "/error_35dp_EF4444_FILL0_wght400_GRAD0_opsz40.svg",
};

const getClasses = (type) => ({
  home: `span-${type}`,
  content: `span-content-${type}`,
  iconcss: `icon-${type}`,
  icon: icons[type],
  content1: `content-${type}`,
  title1: `title-${type}`,
  txt1: `txt-${type}`,
  button: `button-x`,
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
        classes={getClasses(400)}
        onClose={limpiar}
      />
    );
  }
  if (code >= 500) {
    return (
      <Alert45
        title="SERVER ERROR"
        txt="Please try again later or check your connetion."
        classes={getClasses(500)}
        onClose={limpiar}
      />
    );
  }
  return (
    <div className="span-200">
      <div className="span-content">
        <div className="content-1">
          <p className="text-span">YOUR SHORTENED LINK:</p>
          <a
            href={`${import.meta.env.VITE_API_URL}/${shortcode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="result"
          >
            {import.meta.env.VITE_API_URL}/{shortcode}
          </a>
        </div>
        <button onClick={limpiar} className="button-copy">
          Copy Link
        </button>
      </div>
    </div>
  );
}

const Alert45 = ({ title, txt, classes, onClose }) => {
  const { home, content, iconcss, icon, content1, title1, txt1, button } =
    classes;
  return (
    <div className={home}>
      <div className={content}>
        <img src={icon} alt="icon" className={iconcss} />
        <div className={content1}>
          <p className={title1}>{title}</p>
          <p className={txt1}>{txt}</p>
        </div>
        <button onClick={onClose} className={button}>
          <img src="/x_icon_174151.svg" width={20} height={20} alt="close" />
        </button>
      </div>
    </div>
  );
};
