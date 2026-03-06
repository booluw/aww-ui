import { createInstaller } from './utils/register-component';

export * from './components/Button';
export * from './components/Avatar';
export * from './components/Badge';

import { AButton } from './components/Button';
import { AAvatar } from './components/Avatar';
import { ABadge } from './components/Badge';

const components = {
  AButton,
  AAvatar,
  ABadge
}

export const AwwUI = createInstaller(components)
export default AwwUI