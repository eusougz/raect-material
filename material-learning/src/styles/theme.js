import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6eeaba',
            dark: '#46af87',
            light: '#9feed1',
            contrastText: '#fff'
        }
    }
});

export { theme };