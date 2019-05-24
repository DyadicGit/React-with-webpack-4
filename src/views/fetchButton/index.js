import React from 'react';
import utils from '../../utils';
import data from '../../config/data';
import Tree from '../Tree';

class Container extends React.Component {
  state = {
    show: false,
    datas: null,
  };

  handleClick = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
      datas: data,
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Displays
        </button>
        {
          this.state.show && <Tree data={this.state.datas.Lorem} />
        }
      </div>
    );
  }
}

export default Container;
