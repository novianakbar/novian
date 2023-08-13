"use client";

import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle, ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Image from "next/image";
import Typewriter from 'typewriter-effect'

export const Banner = () => {

    return (
        <section className="banner" id="home" style={{
            backgroundImage: `url("/portfolio/assets/img/banner-bg.png")`,
        }}>
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Novian Akbar `}<span className="wrap">
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    'Web Developer',
                                                    'System Administrator',
                                                    'Network Engineer',
                                                    'Mobile Developer',
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                deleteSpeed: 50,
                                                delay: 100,
                                            }}
                                        />
                                    </span></h1>
                                    <p>
                                        Hello, I&lsquo;m Novian Akbar, a man with a passion for crafting innovative technological solutions. With a background in pursuing a bachelor&lsquo;s degree in Computer Engineering, I have seized opportunities to blend my knowledge in the realm of technology with creativity in the projects I have undertaken. I firmly believe that technology holds immense potential to transform the way we interact and navigate our daily lives, and I am enthusiastic about continually contributing to the realization of these goals.
                                    </p>
                                    <button >
                                        <span>Download CV</span>
                                        <ArrowDownCircle size={25} />
                                    </button>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <Image src={headerImg} alt="header-img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
