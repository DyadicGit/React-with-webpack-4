import React from 'react';
import PropertyForm from './PropertyForm';

class BookletComponent extends React.Component {
  state = {
    formData: {
      adress: '',
    },
  }

  handleSubmit = () => {
    console.log(this.state.formData.adress);
  }

  render() {
    return (
      <div>
        <h2>See what your home could earn</h2>
        <PropertyForm
          formData={this.state.formData}
          handleSubmit={this.handleSubmit}
          setAdress={value => this.setState({ formData: { adress: value } })}
        />
        <h6>Calculations based on bla bla bla bla bla bla bla bla bla bla bla bla bla</h6>
      </div>
    );
  }
}

export default BookletComponent;
