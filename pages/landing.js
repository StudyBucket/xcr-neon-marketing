import React from "react";
import Head from 'next/head'
import Link from 'next/link'

import LandingPage from '../layouts/LandingPage'
import SectionHeader from "../components/SectionHeader";
import {Section, SplitSection, PillarSection, VideoSection, InterSection} from "../components/Section";
import {List, IconListItem} from '../components/List';
import PillarContent from "../components/PillarContent";
import LandingHeader from "../components/layout/LandingHeader";
import { Button, CTAButton, PillButton } from "../components/Buttons";
import Ribbon from "../components/Ribbon";
export default function Landing(){
  return(<LandingPage>
        <Head>
            <title>NEON Marketing</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <LandingHeader/>

        <VideoSection
          autoPlay={true}
          loop={false}
          freezeMS={12000}
          videoUrl="/img/video.mp4">
          <div className="flex flex-col sm:flex-row bg-white text-neon-gray rounded-xl">
              <div className="rounded-xl text-center p-5 text-xl relative overflow-hidden">
                <Ribbon>NEU!</Ribbon>
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consetetur sadipscing elitr!</p>
                <Button
                  hasShadow={true}>Consetetur!</Button>
                <CTAButton
                  hasShadow={true}
                  bgColor="bg-neon-orange"
                  textColor="text-neon-white"
                  onClick={(e) => console.log(e)}>Consetetur</CTAButton>
              </div>
              <div className="rounded-xl mt-5 mb-10 mx-auto h-32 w-32">
                <img className="object-fit rounded-xl" src="/img/gfx/1.jpg" alt="Lorem ipsum dolor" title="Lorem ipsum dolor"/>
              </div>
            </div>
        </VideoSection>

        <Section backgroundColor="bg-neon-blue">
          <SectionHeader
            className=""
            prior="magna aliquyam erat!"
            headline="Lorem ipsum dolor sit amet"
            posterior="consetetur sadipscing elitr"/>

          <InterSection boxShadow="xl">
            <div className="flex flex-col items-center sm:flex-row bg-white text-neon-gray rounded-xl p-5">
              <div className="text-center p-5 text-xl relative overflow-hidden mx-auto">
                {/* <Ribbon>NEU!</Ribbon> */}
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consetetur sadipscing elitr!</p>
                {/* <Button
                  hasShadow={true}>Consetetur</Button>
                <PillButton
                  hasShadow={true}
                  bgColor="bg-neon-blue"
                  textColor="text-neon-white">Consetetur</PillButton> */}
                <CTAButton
                  hasShadow={true}
                  bgColor="bg-neon-orange"
                  textColor="text-neon-white"
                  onClick={(e) => console.log(e)}>Consetetur</CTAButton>
              </div>
              <div className="relative overflow-hidden w-64 mx-auto">
                <img className="object-fit w-full" src="/img/gfx/3.jpg" title="Lorem ipsum" alt="Lorem ipsum"/>
              </div>
            </div>
          </InterSection>
        </Section>


          <SplitSection sectionHeader={
              <SectionHeader
                prior="magna aliquyam erat!"
                headline="Lorem ipsum dolor sit amet"
                posterior="consetetur sadipscing elitr"/>
            }
            backgroundColor="bg-white"
            textColor="text-neon-gray"
          >
            <List>
              {
                [0,1,2,3,4,5,6,7,8,9].map((i) => (
                  <IconListItem key={i}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor.
                  </IconListItem>
                 ))
              }
            </List>
            <List>
              {
                [0,1,2,3,4,5,6,7,8,9].map((i) => (
                  <IconListItem key={i}>
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
              [0,1,2,4].map((i) => (
                <PillarContent key={i}
                  title="Dolor sit amet"
                  imageUrl="/img/gfx/1.jpg">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </PillarContent>
              ))
            }
          </PillarSection>

        </LandingPage>)
}
