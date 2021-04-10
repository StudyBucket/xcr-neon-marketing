
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
)

const PillarSection = ({children, sectionHeader, backgroundColor, textColor}) => (
  <div className={`${backgroundColor} ${textColor}`}>
    <Container>
      {sectionHeader}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {children}
      </div>
    </Container>
  </div>
)



const VideoSection = ({children, videoUrl, sectionHeader, backgroundColor, textColor}) => {

  // const playVideo = () => {
  //   this.refs.vidRef.play();
  // }

  // const pauseVideo = () => {
  //   this.refs.vidRef.pause();
  // }

  return(
    <div className={`${backgroundColor} ${textColor}`}>
      <Container>
        {sectionHeader}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


          <div>
            <video ref="vidRef" autoPlay={true} loop={true}>
              <source src={videoUrl} type="video/mp4" />
            </video>
            {/* <button
              className="bg-neon-blue rounded-full py-1 px-4 mx-2"
              onClick={playVideo.bind(this)}
            >
              PLAY
            </button>
            <button
              className="bg-neon-blue rounded-full py-1 px-4 mx-2"
              onClick={pauseVideo.bind(this)}
            >
              PAUSE
            </button> */}
          </div>

          <aside className="bg-white rounded-xl text-black grid grid-rows-3">
            {children}
          </aside>

        </div>
      </Container>
    </div>
  )
}



export {Section, SplitSection, PillarSection, Container, FlatContainer, VideoSection};
