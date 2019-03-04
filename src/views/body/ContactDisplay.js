import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import userpic from '../../../assets/userpic.jpg';

const borderRadiusSize = '6px';

const Container = styled.div`
  grid-area: contactDisplay;
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 5px;
  padding-right: 10px;
`;
const ContactDisplay = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 50% 8% 8% 8% 8% 8%;
  grid-template-areas: "photo         photo"
                       "headerName    bodyName"
                       "headerSurname bodySurname"
                       "headerCity    bodyCity"
                       "headerEmail   bodyEmail"
                       "headerPhone   bodyPhone";
  color: rgba(0,0,0,0.69);
  background-color: rgba(255, 255, 255, 0.98); 
  border-radius: ${borderRadiusSize};
  div {
    padding-left: 6px;
    font-family: "Open Sans Semibold", sans-serif;
  }
  .headerName , .headerSurname , .headerCity , .headerEmail , .headerPhone {
    text-align: right;  
  }

  .headerName {
    grid-area: headerName;
  }
  .headerSurname {
    grid-area: headerSurname;
  }
  .headerCity {
    grid-area: headerCity;
  }
  .headerEmail {
    grid-area: headerEmail;
  }
  .headerPhone {
    grid-area: headerPhone;
  }
  .bodyName {
    grid-area: bodyName;
  }
  .bodySurname {
    grid-area: bodySurname;
  }
  .bodyCity {
    grid-area: bodyCity;
  }
  .bodyEmail {
    grid-area: bodyEmail;
    color: #1AB6CF;
    text-decoration-line: underline;
  }
  .bodyPhone {
    grid-area: bodyPhone;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  grid-area: photo;
  place-content: center;
  place-items: center;
`;
const Image = styled.div`
  place-content: center;
  background-image: url(${userpic});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
`;
const Img = styled.img`
  width: auto;
  max-width: 100%;
  height: 85%;
  max-height: 85%;
  object-fit: scale-down;
  border-radius: 50%;
  border: lightgrey 5px solid;
`;

const View = ({ className, activeContact }) => (
  activeContact && (
    <Container>
      <ContactDisplay className={className}>
        <ImageContainer>
          {/* <Image /> */}
          <Img src={userpic} />
        </ImageContainer>
        <div className="headerName">Name:</div>       <div className="bodyName">{activeContact.name}</div>
        <div className="headerSurname">Surname:</div> <div className="bodySurname">{activeContact.surname}</div>
        <div className="headerCity">City:</div>       <div className="bodyCity">{activeContact.city}</div>
        <div className="headerEmail">Email:</div>     <div className="bodyEmail">{activeContact.email}</div>
        <div className="headerPhone">Phone:</div>     <div className="bodyPhone">{activeContact.phone}</div>
      </ContactDisplay>
    </Container>
  )
);

View.propTypes = {
  className: PropTypes.string,
  activeContact: PropTypes.shape({
    active: PropTypes.bool,
    city: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    surname: PropTypes.string,
  }),
};

export default View;
