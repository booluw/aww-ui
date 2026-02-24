import type { Component } from "vue"

const iconFiles = import.meta.glob<Component>('./*.vue')

const iconPaths = Object.keys(iconFiles)
const iconNames = iconPaths.map(path => path.split('/').pop()?.replace('.vue', '') || '')

export type IconName = (typeof iconNames)[number]

const cache = new Map<string, Component>()

export async function getIcon(name: string): Promise<Component | null>{
  if (cache.has(name)) return cache.get(name)!

  const path = iconPaths.find(p => p.endsWith(`/${name}.vue`))
  if (!path) return null

  try {
    const mod = await iconFiles[path]() as any
    const component = mod.default || mod
    cache.set(name, component)

    return component
  } catch (error) {
    console.error(`Failed to load icon: ${name}`, error)
    return null
  }
}