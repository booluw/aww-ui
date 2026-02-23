import { Button } from './components/Button';
import { createInstaller } from './utils/register-component';

export * from './components/Button';

const components = {
  Button
}

export const AwwUI = createInstaller(components)
export default AwwUI