export default {
  Lorem: {
    Ipsum: {
      root: true,
      byId: { 1: { id: 1, data: 'Ipsum' } },
      allIds: [1],
    },
    //
    Dolor: {
      root: true,
      byId: { 1: { id: 1, data: 'Dolor', orcis: [1], children: ['Orci'] } },
      allIds: [1],
    },
    Orci: {
      byId: { 1: { id: 1, data: 'Orci', quiss: [1], children: ['Quis'] } },
      allIds: [1],
    },
    Quis: {
      byId: { 1: { id: 1, data: 'Quis', odios: [1], children: ['Odio'] } },
      allIds: [1],
    },
    Odio: {
      byId: { 1: { id: 1, data: 'Odio' } },
      allIds: [1],
    },
    //
    Sit: {
      root: true,
      byId: { 1: { id: 1, data: 'Sit', amets: [1], consecteturs: [1], children: ['Amet', 'Consectetur'] } },
      allIds: [1],
    },
    Amet: {
      byId: { 1: { id: 1, data: 'Amet' } },
      allIds: [1],
    },
    Consectetur: {
      byId: { 1: { id: 1, data: 'Consectetur' } },
      allIds: [1],
    },
    //
    Adipiscing: {
      root: true,
      byId: { 1: { id: 1, data: 'Adipiscing', elits: [1], children: ['Elit'] } },
      allIds: [1],
    },
    Elit: {
      byId: { 1: { id: 1, data: 'Elit', vestibulums: [1], Vitaes: [1], children: ['Vestibulum', 'Vitae'] } },
      allIds: [1],
    },
    Vestibulum: {
      byId: { 1: { id: 1, data: 'Vestibulum' } },
      allIds: [1],
    },
    Vitae: {
      byId: { 1: { id: 1, data: 'Vitae' } },
      allIds: [1],
    },
  },
};
