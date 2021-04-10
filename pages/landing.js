import React from "react";
import Head from 'next/head'
import Link from 'next/link'

import LandingPage from '../layouts/LandingPage'
import SectionHeader from "../components/SectionHeader";
import {Section, SplitSection, PillarSection, VideoSection} from "../components/Section";
import {List, IconListItem} from '../components/List';
import PillarContent from "../components/PillarContent";
import LandingHeader from "../components/layout/LandingHeader";
class Home extends React.Component {
  // playVideo = () => {
  //   this.refs.vidRef.play();
  // }

  // pauseVideo = () => {
  //   this.refs.vidRef.pause();
  // }

  render() {
    return (
      <LandingPage>
        <Head>
            <title>NEON Marketing</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <LandingHeader/>

        {/* <VideoSection videoUrl="/img/video.mp4">
          <div className="text-xl md:text-2xl px-10 py-5 pt-10 font-semibold text-center">
              <span>Lorem ipsum dolor sit amet!</span>
            </div>
            <div>
              <p className="text-xs md:text-sm px-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </p>
            </div>
            <div>
              <span className="rounded-full py-2 px-4 color bg-neon-orange font-semibold text-white text-sm md:text-xl shadow-lg hover:shadow-xl">
                → Lorem ipsum!
              </span>
            </div>
        </VideoSection> */}

        <Section backgroundColor="bg-neon-blue">
          <SectionHeader
            className=""
            prior="magna aliquyam erat!"
            headline="Lorem ipsum dolor sit amet"
            posterior="consetetur sadipscing elitr"/>
          </Section>

          <SplitSection sectionHeader={
              <SectionHeader
                className=""
                prior="magna aliquyam erat!"
                headline="Lorem ipsum dolor sit amet"
                posterior="consetetur sadipscing elitr"/>
            }
            backgroundColor="bg-white"
            textColor="text-black"
          >
            <List>
              {
                [0,1,2,3,4,5,6,7,8,9].map(() => (
                  <IconListItem>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor.
                  </IconListItem>
                 ))
              }
            </List>
            <List>
              {
                [0,1,2,3,4,5,6,7,8,9].map(() => (
                  <IconListItem>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                  </IconListItem>
                ))
              }
            </List>
          </SplitSection>
          <PillarSection sectionHeader={
            <SectionHeader
              className=""
              prior="magna aliquyam erat!"
              headline="Lorem ipsum dolor sit amet"
              posterior="consetetur sadipscing elitr"/>
          }>
            {
              [0,1,2,4].map(() => (
                <PillarContent
                  title="Dolor sit amet"
                  imageUrl="/img/gfx/1.jpg">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </PillarContent>
              ))
            }
          </PillarSection>

        </LandingPage>
      )
    }
}
export default Home;
