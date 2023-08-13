"use client"

import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/n-logo-white.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Image from "next/image";
import { MailchimpForm } from "./MailchimpForm";
import { Github } from "react-bootstrap-icons";

export const Footer = () => {
    return (
        <footer className="footer"
            style={{
                backgroundImage: `url("/portfolio/assets/img/footer-bg.png")`,
            }}
        >
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col size={12} sm={6}>
                        <Image src={logo} alt="Logo" width="100" height="100"
                        />
                        {/* // contact information */}
                        <Row className="align-items-center">
                            <Col size={12} sm={6}>
                                <p><span>Phone: </span> +62 831 2804 1944</p>
                                <p><span>Email: </span>
                                    <a href="mailto:akbarnovian@protonmail.com">
                                        akbarnovian@protonmail.com
                                    </a>
                                </p>
                            </Col>
                            {/* <Col size={12} sm={6}>
                                <p><span>Address:</span> Jl. KH Fakhrurroze No. 1,Samborejo, Tirto, Pekalongan, Indonesia</p>

                            </Col> */}
                        </Row>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><Image src={navIcon1} alt="Icon" /></a>
                            <a href="#"><Image src={navIcon2} alt="Icon" /></a>
                            <a href="#"><Image src={navIcon3} alt="Icon" /></a>
                            <a href="https://github.com/novianakbar" target="_blank">
                                <Github size={20} color="white" />
                            </a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
