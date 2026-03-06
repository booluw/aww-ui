import { createInstaller } from './utils/register-component';

export * from './components/Button';
export * from './components/Avatar';
export * from './components/Badge';
export * from './components/Accordion';

import { AButton } from './components/Button';
import { AAvatar } from './components/Avatar';
import { ABadge } from './components/Badge';
import { AAccordion } from './components/Accordion';

const components = {
  AButton,
  AAvatar,
  ABadge,
  AAccordion
}

export const AwwUI = createInstaller(components)
export default AwwUI