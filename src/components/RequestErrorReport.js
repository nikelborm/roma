import React from 'react';

function RequestErrorReport({ message, name, path }) {
  return (
    <div>
      <h1>
        При загрузке данных c { path } произошла ошибка
        <span style={{ color: "red"}}> { name }</span>
      </h1>
      <h2>Информация: </h2>
      <p>{ message }</p>
    </div>
  );
}
export default RequestErrorReport;
