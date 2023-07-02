
function Link(props, url, Title) {
    return (
        <a
        className="App-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
       {Title}
      </a>
    );
  }

  export default Link;
  