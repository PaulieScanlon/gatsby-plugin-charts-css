import React from 'react';

import './styles.css';

const IndexPage = () => {
  return (
    <main>
      <h1>Index Page</h1>
      <div>
        <table className="charts-css column" id="my-chart">
          <caption> Front End Developer Salary </caption>

          <tbody>
            <tr>
              <td style={{ '--size': 'calc( 40 / 100 )' }}> $40K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 60 / 100 )' }}> $60K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 75 / 100 )' }}> $75K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 90 / 100 )' }}> $90K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 100 / 100 )' }}> $100K </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default IndexPage;
