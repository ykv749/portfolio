import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Education() {
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#F0F2F5" }}>
      <div className="main-timeline-2">
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src="https://static.collegedekho.com/media/img/institute/crawled_images/None/PSIT%20Kanpur.png"
              alt="College"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">B.Tech (CSE) </h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2018-2022
              </p>
              <p className="mb-0">
                <div>University: Dr. A.P.J. Abdul Kalam Technical University</div>
                <div>College: PSIT COE</div>
                <div>CGPA: 7.35 </div>
                <div>Percentage: 73.5 % </div>
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            <MDBCardImage
              src="https://cache.careers360.mobi/media/schools/social-media/media-gallery/18403/2020/3/4/Kendriya%20Vidyalaya%20No%201-Campus-View%20Gate.jpg"
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Intermediate</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2018
              </p>
              <p className="mb-0">
                <div>Board: CBSE </div>
                <div>School: Kendriya Vidyalaya No.1 A.F.S Chakeri</div>
                <div>Percentage: 70 </div>
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardImage
              src="https://cache.careers360.mobi/media/schools/social-media/media-gallery/18403/2020/3/4/Kendriya%20Vidyalaya%20No%201-Campus-View%20Gate.jpg"
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">High School</h4>
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> 2016
              </p>
              <p className="mb-0">
                <div>Board: CBSE </div>
                <div>School: Kendriya Vidyalaya No.1 A.F.S Chakeri</div>
                <div>CGPA: 10 </div>
                <div>Percentage: 95 </div>
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
  );
}