"use client"
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export const Skills = () => {

    return (
        <section className="skill" id="skills">
            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industrys standard dummy text.</p>
                            <div className=" skill-slider">
                                <Swiper
                                    autoHeight={true}
                                    slidesPerView={5}
                                    spaceBetween={10}
                                    centeredSlides={false}
                                    grabCursor={false}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}

                                    modules={[Autoplay]}
                                >
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} width={100} height={100} alt="Image" />
                                                <h3 className="image-text">2 Years</h3>
                                            </div>
                                            <h4>PHP</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} width={100} height={100} alt="Image" />
                                                <h3 className="image-text">2 Years</h3>
                                            </div>
                                            <h4>PHP</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} width={100} height={100} alt="Image" />
                                                <h3 className="image-text">2 Years</h3>
                                            </div>
                                            <h4>PHP</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} width={100} height={100} alt="Image" />
                                                <h3 className="image-text">2 Years</h3>
                                            </div>
                                            <h4>PHP</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} width={100} height={100} alt="Image" />
                                                <h3 className="image-text">2 Years</h3>
                                            </div>
                                            <h4>PHP</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} width={100} height={100} alt="Image" />
                                                <h3 className="image-text">2 Years</h3>
                                            </div>
                                            <h4>PHP</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} width={100} height={100} alt="Image" />
                                                <h3 className="image-text">2 Years</h3>
                                            </div>
                                            <h4>PHP</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} width={100} height={100} alt="Image" />
                                                <h3 className="image-text">2 Years</h3>
                                            </div>
                                            <h4>PHP</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} width={100} height={100} alt="Image" />
                                                <h3 className="image-text">2 Years</h3>
                                            </div>
                                            <h4>PHP</h4>
                                        </div>
                                    </SwiperSlide>


                                </Swiper>

                            </div>
                            {/* <div className="item">
                                    <div className="circle-image">
                                        <Image src={meter1} width={100} height={100} alt="Image" />
                                        <h1 className="image-text">2 Years</h1>
                                    </div>
                                    <h5>Brand Identity</h5>
                                </div> */}
                            {/* <div className="item">
                                    <Image src={meter2} width={100} height={100} alt="Image" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <Image src={meter3} width={100} height={100} alt="Image" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <Image src={meter1} width={100} height={100} alt="Image" />
                                    <h5>Web Development</h5>
                                </div> */}

                        </div>
                    </div>
                </div>
            </div>
            <Image className="background-image-left" src={colorSharp} alt="Image" width={100} height={100} />
        </section>
    )
}
