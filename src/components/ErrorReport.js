import React from 'react';

function ErrorReport({ message, name }) {
  return (
    <div>
      <h1>
        При загрузке данных произошла ошибка
        <span style={{ color: "red"}}> { name }</span>
      </h1>
      <h2>Информация: </h2>
      <p>{ message }</p>
    </div>
  );
}
export default ErrorReport;
