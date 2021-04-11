import React from 'react';
;
const Container = ({children}) => (
  <div className="container mx-auto max-w-5xl px-5 py-16">
    {children}
  </div>
)

const FlatContainer = ({children}) => (
  <div className="container mx-auto max-w-5xl px-5 py-5">
    {children}
  </div>
)

const Section = ({children, backgroundColor, textColor}) => (
  <div className={`${backgroundColor} ${textColor}`}>
    <Container>
      {children}
    </Container>
  </div>
)

const SplitSection = ({children, sectionHeader, backgroundColor, textColor}) => (
  <div className={`${backgroundColor} ${textColor}`}>
    <Container>
      {sectionHeader}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {children}
      </div>
    </Container>
  </div>
);

const PillarSection = ({children, sectionHeader, backgroundColor, textColor}) => (
  <div className={`${backgroundColor} ${textColor}`}>
    <Container>
      {sectionHeader}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {children}
      </div>
    </Container>
  </div>
);

const InterSection = ({children, boxShadow}) => (
  <div className={`
  relative -bottom-24 -mt-24 rounded-xl
  ${['sm','md','lg','xl','2xl','inner'].includes(boxShadow) ? `shadow-${boxShadow}` : null}
  `}>
    {children}
  </div>
);

class VideoSection extends React.Component {
  constructor(props){
    super(props);
  }

  getVideo = elem => {
    this.vidRef = elem;
  }

  playVideo = () => {
    this.vidRef.play();
  }

  pauseVideo = () => {
    this.vidRef.pause();
  }

  componentDidMount = () => {
    if(this.props.autoPlay) this.playVideo();
    if(this.props.freezeMS) setTimeout(this.pauseVideo, this.props.freezeMS);
  };

  componentWillUnmount = () => {
    this.pauseVideo();
  };

  render(){
    return(
      <div className={`
        ${this.props.backgroundColor}
        ${this.props.textColor}
      `}>
        <Container>
          {this.props.sectionHeader}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <video
                controls={this.props.controls || false}
                ref={this.getVideo}
                // autoPlay={this.props.autoPlay || true}
                loop={this.props.loop || false}>
                <source src={this.props.videoUrl} type="video/mp4" />
            </video>

            <aside>
              {this.props.children}
            </aside>

          </div>
        </Container>
      </div>
    )
  }
}


export {Section, SplitSection, PillarSection, Container, FlatContainer, VideoSection, InterSection};
