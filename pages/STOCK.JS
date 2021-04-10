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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </span>
    </div>

    <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5 mb-10">
      <div className="p-1">

        </div>
      </div>

    </div>
  </div>

  {/* END CATCHY */}


  {/* Übergangs- Call-to-action */}

  <div className="grid grid-cols-2 bg-white text-black gap-4 mb-5">
    <div className="grid grid-rows-2 m-10">
      <div className="flex flex-row bg-red ">
        <p className="bg-neon-blue text-center align-middle">statt 999.99</p>
        <p className="bg-neon-blue text-center">
          <span className="inline-block align-middle leading-normal">
            jetzt nur 9.98
          </span>
        </p>
      </div>
      <div>
        <span className="rounded-full py-2 px-4 color bg-neon-orange font-semibold text-white text-sm md:text-xl shadow-lg hover:shadow-xl">
          → Lorem ipsum!
        </span>
      </div>
    </div>
    <div>
      <img className="w-60 m-5" src="/img/gfx/1.jpg" alt="do" />
    </div>
  </div>

  {/* NEXT LEVEL SHIT ANFANG */}

  <div className="p-5 bg-white grid text-center text-black mb-10 font-light">
    <SectionHeader
      className=""
      prior="magna aliquyam erat!"
      headline="Lorem ipsum dolor sit amet"
      posterior="consetetur sadipscing elitr"
    />
    <span className="py-2 px-4 color font-medium text-sm md:text-xl text-black"></span>{" "}
    <br />
    <span className="py-2 px-4 color font-bold text-sm md:text-4xl text-black"></span>
    <div className="grid grid-cols-1 md:grid-cols-2"></div>
  </div>

  {/* NEXT LEVEL SHIT ENDE */}
</div>;
