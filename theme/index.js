import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  global:{
      colors:{
          brand:'#611F69',
          "accent-1":'#FFB91D'
      }
  }
});

export default theme;