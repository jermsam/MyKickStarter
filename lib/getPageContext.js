
// lib/getPageContext.js
/* eslint-disable no-underscore-dangle */
import  SheetsRegistry  from 'jss/lib/SheetsRegistry';
import createGenerateClassName  from '@material-ui/styles/createGenerateClassName/createGenerateClassName';
import theme from 'components/theme';



// A theme with a custom primary and secondary color.
// It's optional.
// const theme = createMuiTheme();

const createPageContext=() =>({
      theme,
      // This is needed in order to deduplicate the injection of CSS in the page.
      sheetsManager: new Map(),
      // This is needed in order to inject the critical CSS.
      sheetsRegistry: new SheetsRegistry(),
      // The standard class name generator.
      generateClassName: createGenerateClassName(),
    });
  
    const  getPageContext=()=> {
        // Make sure to create a new context for every server-side request so that data
        // isn't shared between connections (which would be bad).
        if (!process.browser) {
          return createPageContext();
        }
      
        // Reuse context on the client side.
        if (!global.__INIT_MATERIAL_UI__) {
          global.__INIT_MATERIAL_UI__ = createPageContext();
        }
      
        return global.__INIT_MATERIAL_UI__;
      }

      export default getPageContext;
  