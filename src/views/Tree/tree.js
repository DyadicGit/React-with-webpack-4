import React from 'react';

const renderChildren = (data, key, id) => {
  if (!data[key].byId[id] || !data[key].byId[id].children || !data[key].byId[id].children.length) {
    return undefined;
  }
  return data[key].byId[id].children.map(childKey => (
    data[key].allIds.map(childId => (
      <ul key={`${childId}-${Math.random()}`}>
        {data[childKey].byId[childId].data}
        {renderChildren(data, childKey, childId)}
      </ul>
    ))
  ));
};

const TreeView = ({ data }) => {
  const viewTree = Object.keys(data).map((key) => {
    if (data[key].root) {
      return (
        <ul key={`${key}-${Math.random()}`}>
          {data[key].allIds.map(id => (
            <li key={`${key}-${Math.random()}`}>
              {data[key].byId[id].data}
              {renderChildren(data, key, id)}
            </li>
          ))}
        </ul>
      );
    }
    return undefined;
  });
  return (
    <div>
      {viewTree}
    </div>
  );
};

export default TreeView;
