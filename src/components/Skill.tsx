"use client"
import meter1 from "../assets/img/meter1.svg";
import laravel from "../assets/img/laravel.svg";
import nextjs from "../assets/img/nextjs.svg";
import nestjs from "../assets/img/nestjs.svg";
import typescript from "../assets/img/ts.svg";
import reactnative from "../assets/img/react-native.svg";
import colorSharp from "../assets/img/color-sharp.png"
import flutter from "../assets/img/flutter.svg";
import kubernetes from "../assets/img/kubernetes.svg";
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
                            {/* <h2>Skills</h2> */}
                            <h2>Tech Stack</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industrys standard dummy text.</p>
                            <div className=" skill-slider">
                                <Swiper
                                    autoHeight={true}
                                    // slidesPerView={5}
                                    // spaceBetween={10}
                                    centeredSlides={false}
                                    grabCursor={false}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}

                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        576: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 10,
                                        },
                                        992: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                        },
                                        1200: {
                                            slidesPerView: 5,
                                            spaceBetween: 10,
                                        },

                                    }}

                                    modules={[Autoplay]}
                                >
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} alt="Image" />
                                                <Image className="image-text" src={laravel} width={100} alt="Image-text" />
                                                {/* <h3 className="image-text">2 Years</h3> */}
                                            </div>
                                            <h4>Laravel</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} alt="Image" />
                                                <Image className="image-text" src={nextjs} width={100} alt="Image" />
                                            </div>
                                            <h4>Next.JS</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} alt="Image" />
                                                <Image className="image-text" src={nestjs} width={100} alt="Image" />
                                            </div>
                                            <h4>NestJS</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} alt="Image" />
                                                <Image className="image-text" src={reactnative} width={100} alt="Image" />
                                            </div>
                                            <h4>React Native</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} alt="Image" />
                                                <Image className="image-text" src={flutter} width={50} alt="Image" />
                                            </div>
                                            <h4>Flutter</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} alt="Image" />
                                                <Image className="image-text" src={typescript} width={60} alt="Image" />
                                            </div>
                                            <h4>TypeScript</h4>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <div className="circle-image">
                                                <Image src={meter1} alt="Image" />
                                                <Image className="image-text" src={kubernetes} width={100} alt="Image-kube" />
                                            </div>
                                            <h4>Kubernetes</h4>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Image className="background-image-left" src={colorSharp} alt="Image" width={100} height={100} />
        </section>
    )
}
