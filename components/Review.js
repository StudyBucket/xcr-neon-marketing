const Review =({rating, person, headline, children}) => (
<div className="flex-col p-5">
        <div className="flex flex-row mb-5">
            <p className="mr-3">*****</p>

            <p>{person}</p>
        </div>
        <div>
            <p className="font-semibold mb-10 text-2xl md:text-3xl">{headline}</p>
            <p>{children}</p>
        </div>
    </div>

)

export default Review;
