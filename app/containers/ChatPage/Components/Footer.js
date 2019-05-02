import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer style={{
        position: "absolute",
        bottom: "0",
        height: "32px",
        justifyContent: "space-between",
      }}>
        <section>Made with <span role="img" aria-label="heart-emoji">❤️</span> by <a href="https://www.facebook.com/nt.ince.98">Ince</a></section>
      </footer>
    )
  }
}

export default Footer