const List = ({children}) => (
  <div>
    {children}
  </div>
)

const IconListItem = ({children}) => (
  <div className="flex py-2 text-left text-sm">
    <div className="flex-none px-5">
        <img className="w-6" src="/img/gfx/1.jpg" alt="do"/>
    </div>
    <div className="flex-1">
      {children}
    </div>
  </div>
);

export {
  List,
  IconListItem
};
