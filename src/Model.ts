import React from 'react';

export const createModel = <T>(initialValue: T) => {
    var delegates: React.Dispatch<React.SetStateAction<T>>[] = []

    const setModel = (newValue: T) => {
        delegates.forEach(d => d(newValue))
    }

    const useModel = () => {

        const [model, setModel] = React.useState(initialValue)
        delegates.push(setModel)

        return {
            model,
        }
    }

    return {
        useModel,
        setModel,
    }
}