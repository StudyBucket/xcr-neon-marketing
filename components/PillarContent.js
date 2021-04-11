const PillarContent = ({title, imageUrl, children}) => (
  <div className="p-2 pb-10 text-center">
    <div>
      <img
        className="w-14 mx-auto m-5"
        src={imageUrl}
        alt={title}/>
      <p className="font-semibold mb-10 text-2xl md:text-3xl">
        {title}
      </p>
    </div>
    <p>
      {children}
    </p>
  </div>
)

export default PillarContent;
