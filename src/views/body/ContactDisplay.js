import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactDisplay = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  grid-area: contactDisplay;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 5% 5% 5% 5% 5%;
  grid-template-areas: "photo         photo"
                       "headerName    bodyName"
                       "headerSurname bodySurname"
                       "headerCity    bodyCity"
                       "headerEmail   bodyEmail"
                       "headerPhone   bodyPhone";
                       
                       
`;

const Header = styled.div`
  grid-area: header;
`;
const Body = styled.div`
  grid-area: body;
`;

const View = ({ className, activeContact }) => (
  activeContact && (
    <ContactDisplay className={className}>
      <div>
        <img style={{ gridArea: 'photo' }}
             src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Jorah_Mormont-Iain_Glen.jpg/220px-Jorah_Mormont-Iain_Glen.jpg">
        </img>
      </div>
      <div style={{ gridArea: 'headerName' }}>Name:</div>       <div style={{ gridArea: 'bodyName' }}>{activeContact.name}</div>
      <div style={{ gridArea: 'headerSurname' }}>Surname:</div> <div style={{ gridArea: 'bodySurname' }}>{activeContact.surname}</div>
      <div style={{ gridArea: 'headerCity' }}>City:</div>       <div style={{ gridArea: 'bodyCity' }}>{activeContact.city}</div>
      <div style={{ gridArea: 'headerEmail' }}>Email:</div>     <div style={{ gridArea: 'bodyEmail' }}>{activeContact.email}</div>
      <div style={{ gridArea: 'headerPhone' }}>Phone:</div>     <div style={{ gridArea: 'bodyPhone' }}>{activeContact.phone}</div>
    </ContactDisplay>
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
