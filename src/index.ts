import { Button } from './components/Button';
import { createInstaller } from './utils/register-component';

export * from './components/Button';

const components = {
  Button
}

export const LegoUI = createInstaller(components)
export default LegoUI