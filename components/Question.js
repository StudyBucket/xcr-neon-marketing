import HelpIcon from '@material-ui/icons/Help';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        palette: {
          primary: {
            main: '#f1f1f1',
          },
          secondary: {
            main: '#1c1c1c',
          },
        },
      }
    });

const Question = ({headline, children}) => (
    <div className="flex-col p-5">
        <div className="flex flex-row mb-5">
            <HelpIcon className="mr-3"/>
            {/* Hi
            oh lol, hi */}
            <p className="font-semibold mb-10 text-2xl md:text-3xl">{headline}</p>
        </div>
        <div>
            {children}
        </div>
    </div>
)

export default Question;
