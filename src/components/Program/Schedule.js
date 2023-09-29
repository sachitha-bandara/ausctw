import React from 'react';
import { Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Schedule() {
    return (
        <Container>
      <Table responsive bordered>
        <thead>
          <tr>
            <th>Time</th>
            <th>Day 1</th>
            <th>Day 2</th>
            <th>Day 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8.15 - 9.10 am</td>
            <td colSpan="3">Registration + Announcements</td>
          </tr>
          <tr>
            <td>9.10 - 10.10 am</td>
            <td> <strong>[Keynote Talk]</strong> 
                <br/> Prof. Philippa Martin
                <br/>University of Canterbury
            </td>
            <td> <strong>[Keynote Talk]</strong> 
                <br/> Prof. Steven Weller
                <br/>ARC
            </td>
            <td> <strong>[Keynote Talk]</strong> 
                <br/> Prof. Matthew McKay
                <br/>University of Melbourne
            </td>
          </tr>
          <tr>
            <td>10.10 - 10.40 am</td>
            <td colSpan="3">Morning Tea</td>
          </tr>
          <tr>
            <td>10.40 - 12.00 pm</td>
            <td> <strong>[Poster Session]</strong> 
            </td>
            <td> <strong>[Poster Session]</strong> 
            </td>
            <td> <strong>[Technical Talk]</strong> 
                <br/> A/Prof. Akram Hourani
                <br/>RMIT <br/>
                <br/>Dr. Thanh Tung Vu
                <br/>Macquarie University <br/>
                <br/>Dr. Wibowo Hardjawana
                <br/>University of Sydney<br/>
                <br/>Dr. Timothy Molloy
                <br/>Australian National University
            </td>
          </tr>
          <tr>
            <td>12.00 - 1.30 pm</td>
            <td colSpan="3">Lunch</td>
          </tr>
          <tr>
            <td>1.30 - 2.30 pm</td>
            <td> <strong>[Keynote Talk]</strong> 
                <br/> Prof. Emanuele Viterbo
                <br/>Monash University
            </td>
            <td> <strong>[Panel Discussion]</strong> 
                
            </td>
            <td> 
            </td>
          </tr>
          <tr>
            <td>2.30 - 2.50 pm</td>
            <td> <strong>[Technical Talk]</strong> 
                <br/> Prof. Xiangyun Zhou
                <br/>Australian National University
            </td>
            <td> <strong>[Technical Talk]</strong> 
            <br/> Prof. Ross Murch
                <br/>HKUST
            </td>
            <td> 
            </td>
          </tr>
          <tr>
            <td>2.50 - 3.10 pm</td>
            <td> <strong>[Technical Talk]</strong> 
            <br/> Dr. Felix Shen
                <br/>University of Western Australia
            </td>
            <td> <strong>[Technical Talk]</strong> 
            <br/> Dr. Tao Huang
                <br/>James Cook University
            </td>
            <td> 
            </td>
          </tr>
          <tr>
            <td>3.10 - 3.40 pm</td>
            <td colSpan="3">Afternoon Tea</td>
          </tr>
          <tr>
            <td>3.40 - 4.00 pm</td>
            <td> <strong>[Technical Talk]</strong> 
                <br/> Mr. Tian Han
                <br/>University of Melbourne
            </td>
            <td> <strong>[5-min Thesis Competition]</strong> 
            </td>
            <td> 
            </td>
          </tr>
          <tr>
            <td>4.00 - 4.20 pm</td>
            <td> <strong>[Technical Talk]</strong> 
                <br/>Dr. Amin Sakzad
                <br/>Monash University
            </td>
            <td> <strong>[5-min Thesis Competition]</strong> 
            </td>
            <td> 
            </td>
          </tr>
          <tr>
            <td>4.20 - 4.40 pm</td>
            <td> <strong>[Technical Talk]</strong> 
                <br/> A/Prof. Pawel Dmochowski
                <br/>Victoria University of Wellington, NZ
            </td>
            <td> <strong>[Technical Talk]</strong> 
                <br/> Prof. Margreta Kuijper
                <br/>University of Melbourne
            </td>
            <td> 
            </td>
          </tr>
          <tr>
            <td>4.40 - 5.00 pm</td>
            <td> <strong>[Technical Talk]</strong> 
                <br/> Prof. Yue Rong
                <br/>Curtin University
            </td>
            <td> <strong>[Technical Talk]</strong> 
            <br/> Dr. Siu Wai Ho
                <br/>University of Adelaide
            </td>
            <td> 
            </td>
          </tr>
          <tr>
            <td>6.00pm Onwards</td>
            <td> 
            </td>
            <td> <strong>Banquet Dinner</strong> 
            </td>
            <td> 
            </td>
          </tr>
        </tbody>
      </Table>
        </Container>
        
    );
  }
  
export default Schedule;