import React from 'react';

type UsableObject<T> = {
    use: () => { object: T }
    setValue: (newValue: T) => void
}

export const createObject = <T>(initialValue: T) => {
    var delegates: React.Dispatch<React.SetStateAction<T>>[] = []

    const setValue = (newValue: T) => {
        delegates.forEach(d => d(newValue))
    }

    const use = () => {

        const [object, setObject] = React.useState(initialValue)
        delegates.push(setObject)

        return {
            object,
        }
    }

    return {
        use,
        setValue,
    }
}

export const createObjectContext = <T>(initialValue: T) => {

    const Object: UsableObject<T> = createObject(initialValue)

    const Context = React.createContext(Object)

    return {
        Context,
        Object,
    }
}

export const useObjectContext = <T>(Context: React.Context<UsableObject<T>>) => {
    const Object = React.useContext(Context)

    const { object } = Object.use()
    return object
}