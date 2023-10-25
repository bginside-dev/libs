export * from './address'
export * from './contact'
export * from './data-center'
export * from './item'
export * from './supplier'

export type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}

export type PortalAuth = {
    businessCode: string
    locationCode: string
    app: 'empire' | 'empire-core'
}
