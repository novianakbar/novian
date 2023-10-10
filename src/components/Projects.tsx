"use client"

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/erlapos.png";
import projImg2 from "../assets/img/chatgpt-web.png";
import projImg3 from "../assets/img/umkm.png";
import projImg4 from "../assets/img/api-wilayah.png";
import projImg5 from "../assets/img/exapay.png";
import projImg6 from "../assets/img/erlacloud.png";
import gmailer from "../assets/img/gmailer.png";
import nextcloud from "../assets/img/nextcloud.png";
import mikhmon from "../assets/img/mikhmon.png";
import mikrotikvpn from "../assets/img/mikrotikvpn.png";
import mikrotikvpnremote from "../assets/img/mikrotikvpnremote.png";
import spp from "../assets/img/spp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Image, { StaticImageData } from "next/image";

interface IProjectCard {
    title: string;
    description: string;
    imgUrl: StaticImageData;
    techStack: string;
    projectNames: string;
    projectDesc: string;
    projectStatus: string;
    githubStatus: Boolean;

}

export const Projects = () => {

    const projects = [
        {
            title: "ErlaPOS",
            description: "Design & Development",
            imgUrl: projImg1,
            techStack: "Next.js, NestJs, TypeScript, Material UI, MySQL",
            projectNames: "ErlaPOS",
            projectDesc: "Erlapos is a Point of Sale (POS) system that is designed for Erla Skin Clinic and Halebellaskin to help small and medium businesses to manage their sales, inventory, and customer data. Erlapos is a web-based application that can be accessed from any device with a browser and internet connection. Erlapos is built with NextJS, TypeScript, Material UI, and mySQL.",
            projectStatus: "Finished",
            githubStatus: false,
        },
        {
            title: "GIS UMKM Kota Pekalongan",
            description: "Design & Development",
            imgUrl: projImg3,
            techStack: "ReactJS, Express.Js JavaScript, Leaflet, MongoDB",
            projectNames: "GIS UMKM Kota Pekalongan",
            projectDesc: "GIS UMKM Kota Pekalongan is a web-based application that is built with ReactJS, Express.Js JavaScript, Leaflet, MongoDB, and Bootstrap. This application is a Geographic Information System (GIS) that is used to display the location of Micro, Small, and Medium Enterprises (MSMEs) in Pekalongan City.",
            projectStatus: "Finished",
            githubStatus: true,
        },
        {
            title: "ExaPay",
            description: "Design & Development",
            imgUrl: projImg5,
            techStack: "Next.js, TypeScript, TailwindCSS, MySQL",
            projectNames: "ExaPay",
            projectDesc: "ExaPay is a web-based application that is built with NextJS, TypeScript, TailwindCSS, and mySQL. This application is a payment gateway that is used to make payments for various types of transactions like game voucher, electricity, water, internet, and others.",
            projectStatus: "On Progress",
            githubStatus: false,
        },
        {
            title: "Aplikasi Pembayaran SPP",
            description: "Design & Development",
            imgUrl: spp,
            techStack: "Java Swing, MySQL",
            projectNames: "APP Pembayaran SPP",
            projectDesc: "This app is a desktop-based application that is built with Java Swing, and mySQL. This application is used to assist in making school bill payments.",
            projectStatus: "Finished",
            githubStatus: false,
        },
        {
            title: "API Wilayah Indonesia",
            description: "Design & Development",
            imgUrl: projImg4,
            techStack: "Express.Js JavaScript, MongoDB",
            projectNames: "API Wilayah Indonesia",
            projectDesc: "API Wilayah Indonesia is a web-based application that is built with Express.Js JavaScript and MongoDB. This application is an API that is used to get data about the regions, provinces, districts, and villages in Indonesia.",
            projectStatus: "Finished",
            githubStatus: true,
        },
        {
            title: "ChatGPT Web Clone",
            description: "Design & Development",
            imgUrl: projImg2,
            techStack: "Next.js, TypeScript, Firebase, TailwindCSS",
            projectNames: "ChatGPT Web Clone",
            projectDesc: "ChatGPT Web Clone is a web-based chat application that is built with ReactJS, TypeScript, Firebase, and TailwindCSS. This application is a clone of the ChatGPT application that is built by me.",
            projectStatus: "Finished",
            githubStatus: true,
        },
        {
            title: "ErlaCloud",
            description: "Design & Development",
            imgUrl: projImg6,
            techStack: "Nextcloud",
            projectNames: "ErlaCloud",
            projectDesc: "ErlaCloud is a cloud storage application that is built with Nextcloud. This application is used to store files and data from Erla Skin Clinic and Halebellaskin.",
            projectStatus: "Finished",
            githubStatus: false,
        },
    ] as IProjectCard[];

    const mobileProjects = [] as IProjectCard[];

    const otherProjects = [
        {
            title: "Gmailer",
            description: "Design & Development",
            imgUrl: gmailer,
            techStack: "Express.Js JavaScript, Gmail API",
            projectNames: "Gmailer",
            projectDesc: "Gmailer is a web-based application that is built with Express.Js JavaScript and Gmail API. This application is used to send emails to recipients.",
            projectStatus: "Finished",
            githubStatus: true,
        },
        {
            title: "WHMCS Nextcloud Provisioning Module",
            description: "Design & Development",
            imgUrl: nextcloud,
            techStack: "PHP, WHMCS",
            projectNames: "WHMCS Nextcloud Provisioning Module",
            projectDesc: "WHMCS Nextcloud Provisioning Module is a module that is built with PHP and WHMCS. This module is used to provision Nextcloud accounts automatically.",
            projectStatus: "Finished",
            githubStatus: true,
        },
        {
            title: "WHMCS Mikrotik Hotspot Monitor Provisioning Module",
            description: "Design & Development",
            imgUrl: mikhmon,
            techStack: "PHP, WHMCS",
            projectNames: "WHMCS Mikrotik Hotspot Monitor Provisioning Module",
            projectDesc: "WHMCS Mikrotik Hotspot Monitor Provisioning Module is a module that is built with PHP and WHMCS. This module is used to provision Mikrotik Hotspot Monitor automatically and integrate with WHMCS.",
            projectStatus: "Finished",
            githubStatus: true,
        },
        {
            title: "WHMCS Mikrotik VPN Tunnel Provisioning Module",
            description: "Design & Development",
            imgUrl: mikrotikvpn,
            techStack: "PHP, WHMCS",
            projectNames: "WHMCS Mikrotik VPN Tunnel Provisioning Module",
            projectDesc: "WHMCS Mikrotik VPN Tunnel Provisioning Module is a module that is built with PHP and WHMCS. This module is used to provision Mikrotik VPN Tunnel accounts automatically and sell it as a product in WHMCS.",
            projectStatus: "Finished",
            githubStatus: true,
        },
        {
            title: "WHMCS Mikrotik VPN Remote Provisioning Module",
            description: "Design & Development",
            imgUrl: mikrotikvpnremote,
            techStack: "PHP, WHMCS",
            projectNames: "WHMCS Mikrotik VPN Remote Provisioning Module",
            projectDesc: "WHMCS Mikrotik VPN Remote Provisioning Module is a module that is built with PHP and WHMCS. This module is used to provision Mikrotik VPN Remote accounts automatically and sell it as a product in WHMCS.",
            projectStatus: "Finished",
            githubStatus: true,
        }
    ] as IProjectCard[];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>
                                        Here are some of my projects that I have.
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Web App</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Mobile App</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Other</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        mobileProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        otherProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <Image className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}
