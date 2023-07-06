import Image, { StaticImageData } from "next/image";
import { Col } from "react-bootstrap";
import { CodeSlash } from 'react-bootstrap-icons';

interface IProjectCard {
    title: string;
    description: string;
    imgUrl: StaticImageData;
}

export const ProjectCard = ({ title, description, imgUrl }: IProjectCard) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <Image src={imgUrl} alt="" />
                <div
                    className="proj-desc"
                >
                    <h6><CodeSlash /> PHP, Laravel & MySQL</h6>
                    <br />
                    <h4>Ecommerce</h4>
                    <span>
                        This is a web application about Financial Information System.
                    </span>
                </div>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br />
                    {/* readmore button */}
                    <button className="readmore-btn">Read More</button>

                </div>
            </div>
        </Col>
    )
}
