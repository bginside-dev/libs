import { initClient, initContract } from '@ts-rest/core'

import { dataCenter } from './data-center'
import { supplier } from './supplier'
import { contact } from './contact'
import { address } from './address'
import { item } from './item'

export type InitContractInstance = ReturnType<typeof initContract>

const c = initContract()

export const GatewayContract = c.router({
    dataCenter: dataCenter(c),
    supplier: supplier(c),
    item: item(c),
    contact: contact(c),
    address: address(c),
})

// const client = initClient(GatewayContract, {baseUrl: '', baseHeaders: {x: ''}})
