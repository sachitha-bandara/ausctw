import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function CommitteeList(){
    return (
        <Container>
            <br/>
            <h1 style={{ fontSize: "2em" }}>
              <span className="purple"> Organizing </span> Committee
            </h1>
            <p><strong>General Chair</strong></p>
            <p>Rajitha Senanayake</p>
            <br/>
            <p><strong>Finance and Registration Co-chairs</strong></p>
            <p>Achini Jayawardane, Tian Han</p>
            <br/>
            <p><strong>Publicity Co-chairs</strong></p>
            <p>Lili Chen, Sachitha Bandara</p>
            <br/>
            <p><strong>Local arrangements Co-chairs</strong></p>
            <p>Shalanika Dayarathna, Supuni Gunasekara</p>
            <br/>
            <p><strong>Submissions and Awards Co-chairs</strong></p>
            <p>Tharaka Perera,  Zainab Zaidi, Erfan Khordad</p>
            <br/>
            <br/>
            <h1 style={{ fontSize: "2em" }}>
              <span className="purple"> Steering </span> Committee
            </h1>
            <br/>
            <Row style={{textAlign:"left", paddingLeft:"100px"}}>
                <p>Graeme Woodward, University of Canterbury</p>
                <p>Iain Collings, Macquarie University</p>
                <p>Jamie Evans, University of Melbourne</p>
                <p>Lawrence Ong, University of Newcastle</p>
                <p>Mahyar Shirvanimoghaddam, University of Sydney</p>
                <p>Parastoo Sadeghi, University of New South Wales, Canberra</p>
                <p>Philippa Martin, University of Canterbury</p>
                <p>Sarah Johnson, University of Newcastle</p>
            </Row>
            <br/>
            <h1 style={{ fontSize: "2em" }}>
              <span className="purple"> Technical </span> Program Committee
            </h1>
            <br/>
            <Row style={{textAlign:"left", paddingLeft:"100px"}}>
                <p>Birenjith Padmakumari Sasidharan, Monash University</p>
                <p>David Huang, University of Western Australia</p>
                <p>Hazer Inaltekin, Macquarie University</p>
                <p>Jingge Zhu, University of Melbourne</p>
                <p>Neda Aboutorab, University of New South Wales, Canberra</p>
                <p>Xiaojing Huang, University of Technology, Sydney</p>
                <p>Yonghui Li, University of Sydney </p>
            </Row>
        </Container>
    );
}

export default CommitteeList;