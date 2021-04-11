
const GRID_STYLE = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gridTemplateRows: 'repeat(auto-fit, 260px)',
    gridAutoFlow: 'dense',
    gridGap: '5rem',
};


export default function DenseImageGrid({children}){
  return <div style={GRID_STYLE}>{children}</div>
}

export function ImageGridItem({ image }) {
  const style = {
    gridColumnEnd: `span ${getSpanEstimate(image.width)}`,
    gridRowEnd: `span ${getSpanEstimate(image.height)}`,
    alignSelf: 'center'
  }

  return <img style={style} src={image.url} alt={image.alt} title={image.title} />
}

function getSpanEstimate(size) {
  if (size > 250) {
    return 2
  }

  return 1
}
