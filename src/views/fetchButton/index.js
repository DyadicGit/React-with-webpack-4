import React from 'react';
import utils from '../../utils';

class Container extends React.Component {
  handleClick = async () => {
    try {
      const response = await fetch('https://fetchbutton.free.beeceptor.com');
      const data = await utils.handleResponse(response);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        fetch from beeceptor.com
      </button>
    );
  }
}

export default Container;
