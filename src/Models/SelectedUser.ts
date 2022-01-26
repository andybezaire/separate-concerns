import { createObjectContext } from '../Libraries/ObservableObject'

export type UserType = {
    name: string,
    address: string,
    phone: string,
}

const initialUser: UserType = {
    name: '<no name>',
    address: '<no address>',
    phone: '<no phone>',
}

export const { Context: SelectedUserContext, Object: SelectedUser } = createObjectContext(initialUser)
