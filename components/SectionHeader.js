
const SectionHeader = ({prior, headline, posterior}) => (
  <div className="py-5 text-center">
    { prior && <p className="text-xs font-medium pb-3 uppercase">{prior}</p> }
    { headline && <h2 className="text-2xl font-bold">{headline}</h2> }
    { posterior && <p className="text-xs font-medium pt-3 uppercase">{posterior}</p> }
  </div>
)

export default SectionHeader;
