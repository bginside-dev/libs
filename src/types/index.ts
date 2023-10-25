export * from './data-center'
export * from './item'

export type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}

export type PortalAuth = {
    businessCode: string
    locationCode: string
    app: 'empire' | 'empire-core'
}
