const Footer = () => {
  return (
    <footer className="text-2xl my-2 text-center">
      <p>
        {`©️ ${new Date().getFullYear()} Encode Justice Colombia | `}
        <a
          href="https://www.encodejustice.fr/"
          rel="noopenner noreferrer"
          target="_blank"
          className="link"
        >
          Inspired by EJ France
        </a>
      </p>
    </footer>
  );
};

export default Footer;
