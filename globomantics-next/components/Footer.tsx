import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="main-footer col-md-12 col-xs-12">
          <div className="foter-logo col-md-3 col-sm-3 col-xs-2">
            <Link href="/">
              <img
                className="desktop"
                src="/images/Globo-Logo-white-footer.svg"
                alt=""
              />
              <img className="mobileImg" src="/images/G.png" alt="" />
            </Link>
          </div>
          <div className="links col-md-5 col-md-5 col-xs-10">
            <ul className="quick-links col-md-4 col-xs-6">
              <li>
                <Link href="/our-story">Our Story</Link>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
              <li>
                <Link href="/robotics">Robotics</Link>
              </li>
              <li>
                <Link href="/media">Media</Link>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
            <ul className="quick-links second-row col-md-4 col-xs-6">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Media Inquiries</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="video-sec col-md-4 col-sm-12 col-xs-12">
        <h1 className="video-heading text-center">
          <img src="/images/pluralsight-white.png" alt="" />
        </h1>
        <span className="border" />
        <p className="footer-p">
          This site is created for demonstrative purposes only and does not
          offer any real products or services.
        </p>
      </div>
    </footer>
  );
}
