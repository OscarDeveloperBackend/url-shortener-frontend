import "../styles/footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="content-1">
          <a href="">Git Hub</a>
          <a href="">Api Reference</a>
          <a href="">Extra</a>
        </div>
        <div className="span">
          <p>Powered by React-Vite</p>
        </div>
        <div className="icons">
          <a href="">
            <img src="/git-svgrepo-com.svg" width={50} height={50} alt="" />
          </a>
          <a href="">
            <img src="/git-svgrepo-com.svg" width={50} height={50} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
