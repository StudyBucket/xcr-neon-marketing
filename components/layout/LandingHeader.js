import Link from 'next/link';
import {FlatContainer} from '../Section'
import React, { Component } from 'react';

const wordArray = ['Branding', 'Marketing', 'Social Media', 'Media', 'Digital'];
class LandingHeader extends Component {

  constructor(props){
    super(props);
    this.state = { textIdx: 0, word: wordArray[0] };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      if(currentIdx < wordArray.length - 1){
        this.setState({ textIdx: currentIdx + 1, word: wordArray[currentIdx + 1] });
      } else {
        this.setState({ textIdx: 0, word: wordArray[0] });
      }

    }, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render(){
    return (
      <FlatContainer>
        <div className="w-full flex items-center h-navbar">
          <div className="flex-2 text-xl md:text-2xl font-bold">NEON {this.state.word}</div>
          {/* <nav className="flex-auto flex justify-end">
            <Link href="/landing">
              <a className="px-2 uppercase hover:underline">abc</a>
            </Link>
            <Link href="/landing">
              <a className="px-2 uppercase hover:underline">def</a>
            </Link>
          </nav> */}
        </div>
      </FlatContainer>
    )
  }
}

export default LandingHeader;

// const LandingHeader = () => (
//   <FlatContainer>
//     <div className="w-full flex items-center h-navbar">
//       <div className="flex-1 text-2xl font-bold">NEON {word}</div>
//       <nav className="flex-auto flex justify-end">
//         <Link href="/landing">
//           <a className="px-2 uppercase hover:underline">abc</a>
//         </Link>
//         <Link href="/landing">
//           <a className="px-2 uppercase hover:underline">def</a>
//         </Link>
//       </nav>
//     </div>
//   </FlatContainer>
// )

// export default LandingHeader;


