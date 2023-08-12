import Image, { StaticImageData } from "next/image";
import { Col } from "react-bootstrap";
import { CodeSlash, Github } from 'react-bootstrap-icons';

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

export const ProjectCard = ({ title, description, imgUrl, techStack, projectNames, projectDesc, projectStatus, githubStatus
}: IProjectCard) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <Image src={imgUrl} alt=""
                    className="proj-img"
                />
                <div
                    className="proj-desc"
                >
                    <h6><CodeSlash /> {techStack}</h6>

                    <br />
                    <h4>{projectNames}</h4>
                    <h6><Github /> {githubStatus ? "Available on My Github" : "Not Available on My Github"}</h6>
                    <h6 className="mt-2">Status: {projectStatus}</h6>

                    <span className="proj-txt-desc ">
                        {projectDesc}
                    </span>
                </div>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    {/* <span>{description}</span> */}
                    <br />
                    {/* readmore button */}
                    <button className="readmore-btn">Read More</button>

                </div>
            </div>
        </Col>
    )
}
