import React from "react";
import Head from 'next/head'
import Link from 'next/link'

import LandingPage from '../layouts/LandingPage'

class Home extends React.Component {
    playVideo = () => {
      this.refs.vidRef.play();
    }

    pauseVideo = () => {
      this.refs.vidRef.pause();
    }

    render() {
      return (
          <LandingPage>
              <Head>
                  <title>NEON Marketing</title>
                  <link rel="icon" href="/favicon.ico" />
              </Head>
              <div className="container mx-auto max-w-5xl px-4">

                {/* START NAVIGATION */}
                <div className="w-full flex items-center h-navbar">
                  <div className="flex-1">NEON Marketing</div>
                  <nav className="flex-auto flex justify-end">
                    <Link href="/landing">
                      <a className="px-2 uppercase hover:underline">abc</a>
                    </Link>
                    <Link href="/landing">
                      <a className="px-2 uppercase hover:underline">def</a>
                    </Link>
                  </nav>
                </div>
                {/* END NAVIGATION */}

                {/* START CATCHY */}

                <div className="grid text-center">
                  <div className="p-5">
                    <span className="rounded-full py-2 px-4 color bg-neon-blue font-semibold text-sm md:text-xl">
                      magna aliquyam erat!
                    </span>
                  </div>
                  <div className="container mx-auto p-10 max-w-2xl">
                    <span className="sm:text-xl md:text-2xl font-semibold">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </span>
                  </div>

                  <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                    <div className="p-1">
                      <video ref="vidRef" autoPlay={false}>
                        <source src="/img/video.mp4" type="video/mp4" />
                      </video>
                      <div className="p-2">
                        <button className="bg-neon-blue rounded-full py-1 px-4 mx-2" onClick={this.playVideo.bind(this)}>PLAY</button>
                        <button className="bg-neon-blue rounded-full py-1 px-4 mx-2" onClick={this.pauseVideo.bind(this)}>PAUSE</button>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl text-black grid grid-rows-3">
                      <div className="text-xl md:text-2xl px-10 py-5 pt-10 font-semibold">
                        <span>Lorem ipsum dolor sit amet!</span>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm px-5">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                      </div>
                      <div>
                        <span className="rounded-full py-2 px-4 color bg-neon-orange font-semibold text-white text-sm md:text-xl shadow-lg hover:shadow-xl">
                          → Lorem ipsum!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* END CATCHY */}

                {/* WAS IS DRIN? ANFANG */}

                <div className="p-5 bg-white grid text-center text-black mb-10">
                    <span className="py-2 px-4 color font-medium text-sm md:text-xl text-black">
                      magna aliquyam erat!
                    </span> <br/>
                    <span className="py-2 px-4 color font-bold text-sm md:text-4xl text-black">
                      magna 4-aliquyam erat!
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row text-center">
                        <div className="p-2 pb-10">
                            <div>
                              <img className="w-14 mx-auto m-5" src="/img/gfx/1.jpg" alt="lorem"/>
                              <p className="font-semibold mb-10">Lorem Ipsum</p>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                            </p>
                        </div>
                        <div className="p-2 pb-10">
                            <div>
                                <img className="w-14 mx-auto m-5" src="/img/gfx/1.jpg" alt="lorem"/>
                              <p className="font-semibold mb-10">Lorem Ipsum</p>
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                            </span>
                        </div>
                        <div className="p-2 pb-10">
                            <div>
                                <img className="w-14 mx-auto m-5" src="/img/gfx/1.jpg" alt="ipsum"/>
                              <p className="font-semibold mb-10">Lorem Ipsum</p>
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                            </span>
                        </div>
                        <div className="p-2 pb-10">
                            <div>
                                  <img className="w-14 mx-auto m-5" src="/img/gfx/1.jpg" alt="do"/>
                              <p className="font-semibold mb-10">Lorem Ipsum</p>
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                            </span>
                        </div>
                    </div>
                  </div>

                {/* WAS IS DRIN? ENDE */}

                {/* WAS IS DRIN? ANFANG */}

                <div className="p-5 bg-white grid text-center text-black mb-10 font-light">
                    <span className="py-2 px-4 color font-medium text-sm md:text-xl text-black">
                      magna aliquyam erat!
                    </span> <br/>
                    <span className="py-2 px-4 color font-bold text-sm md:text-4xl text-black">
                      magna 4-aliquyam erat!
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {/* start check grid */}

                        <div>

                        <div className="flex py-2 text-left text-sm">
                          <div className="flex-none px-5">
                            <img className="w-6" src="/img/gfx/1.jpg" alt="do"/>
                          </div>
                          <div className="flex-1">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                          </div>
                        </div>

                        <div className="flex py-2 text-left text-sm">
                          <div className="flex-none px-5">
                            <img className="w-6" src="/img/gfx/1.jpg" alt="do"/>
                          </div>
                          <div className="flex-1">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                          </div>
                        </div>

                        <div className="flex py-2 text-left text-sm">
                          <div className="flex-none px-5">
                            <img className="w-6" src="/img/gfx/1.jpg" alt="do"/>
                          </div>
                          <div className="flex-1">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                          </div>
                        </div>

                        <div className="flex py-2 text-left text-sm">
                          <div className="flex-none px-5">
                            <img className="w-6" src="/img/gfx/1.jpg" alt="do"/>
                          </div>
                          <div className="flex-1">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                          </div>
                        </div>

                      </div>

                      <div>

                        <div className="flex py-2 text-left text-sm">
                          <div className="flex-none px-5">
                            <img className="w-6" src="/img/gfx/1.jpg" alt="do"/>
                          </div>
                          <div className="flex-1">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                          </div>
                        </div>

                        <div className="flex py-2 text-left text-sm">
                          <div className="flex-none px-5">
                            <img className="w-6" src="/img/gfx/1.jpg" alt="do"/>
                          </div>
                          <div className="flex-1">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                          </div>
                        </div>

                        <div className="flex py-2 text-left text-sm">
                          <div className="flex-none px-5">
                            <img className="w-6" src="/img/gfx/1.jpg" alt="do"/>
                          </div>
                          <div className="flex-1">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                          </div>
                        </div>

                        <div className="flex py-2 text-left text-sm">
                          <div className="flex-none px-5">
                            <img className="w-6" src="/img/gfx/1.jpg" alt="do"/>
                          </div>
                          <div className="flex-1">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                          </div>
                        </div>

                      </div>

                      {/* ende check grid  */}
                    </div>
                </div>

                {/* WAS IS DRIN? ENDE */}



            </div>
          </LandingPage>
      )
    }
}
export default Home;
