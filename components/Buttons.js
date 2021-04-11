const Button = ({children, bgColor, textColor, onClick, hasShadow}) => (
  <button className={
      `button rounded m-2 py-1 px-3
      ${hasShadow ? 'shadow-md hover:shadow-lg' : null}
      ${bgColor || 'bg-neon-gray'}
      ${textColor || 'text-neon-white'}`
    } onClick={onClick}>{children}</button>
);

const PillButton = ({children, bgColor, textColor, onClick, hasShadow}) => (
  <button className={
      `rounded-full m-2 py-1 px-4
      ${hasShadow ? 'shadow-md hover:shadow-lg' : null}
      ${bgColor || 'bg-neon-gray'}
      ${textColor || 'text-neon-white'}`
    } onClick={onClick}>{children}</button>
);

const CTAButton = ({children, bgColor, textColor, onClick, hasShadow}) => (
  <div className="w-full">
    <button className={
      `rounded py-3 px-4 my-5 w-3/4 mx-auto font-bold
      ${hasShadow ? 'shadow-md hover:shadow-lg' : null}
      ${bgColor || 'bg-neon-gray'}
      ${textColor || 'text-neon-white'}`
    } onClick={onClick}>{children}</button>
  </div>
);

export {
  Button,
  PillButton,
  CTAButton
};
