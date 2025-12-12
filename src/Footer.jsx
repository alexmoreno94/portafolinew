export default function Footer() {
  return (
    <footer className="footer">
  <div className="footer-inner">

    <div className="footer-info">
      <p className="footer-name">ALEX MORENO MARTINEZ</p>
      <a href="mailto:oriol@example.com" className="footer-email">
        hola@alexmoreno.cat
      </a>
    </div>

    <div className="footer-social">
      
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/alex-moreno-418704244/"
        className="footer-icon"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.13h4.4V24H.3zM8.45 8.13h4.22v2.16h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V24h-4.4v-7.67c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.05V24h-4.4z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/ELTEUUSER"
        className="footer-icon"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.2A2.7 2.7 0 1 1 14.7 12 2.7 2.7 0 0 1 12 14.7zM17.5 6.3a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z"/>
        </svg>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/alexmoreno94"
        className="footer-icon"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill-rule="evenodd" d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.79 8.2 11.38.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.06.14 3.02.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17 .77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5 C24 5.87 18.63.5 12 .5z"/>
        </svg>
      </a>

    </div>
  </div>
</footer>
  );
}

