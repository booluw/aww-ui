import type { App, Component } from 'vue';

export function createInstaller(components: Record<string, Component>, prefix = 'L') {
  return {
    install(app: App) {
      Object.entries(components).forEach(([name, component]) => {
        app.component(`${prefix}${name}`, component);
      });
    }
  };
}