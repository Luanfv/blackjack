import 'styled-components';
import IStyleGuide from '../themes/module';

declare module 'styled-components/native' {
  export interface DefaultTheme extends IStyleGuide {}
}
