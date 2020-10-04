import { Connector } from '../api/connectors';

type Uid = string
export interface UidMap {
    [name: string]: Uid
}

export interface DecodedToken {
    role: 'ADMIN' | 'INTERNAL' | 'USER'
}

export interface ContextUser {
    role: DecodedToken['role']
}

export interface Context {
    me?: ContextUser
    connector: Connector
}