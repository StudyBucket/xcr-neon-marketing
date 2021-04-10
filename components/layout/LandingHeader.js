import Link from 'next/link';
import {FlatContainer} from '../Section'

const LandingHeader = () => (
  <FlatContainer>
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
  </FlatContainer>
)

export default LandingHeader;


