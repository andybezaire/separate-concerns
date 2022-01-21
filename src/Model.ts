import React from 'react';

var delegates: React.Dispatch<React.SetStateAction<string>>[] = []

export const setModel = (newValue: string) => {
    delegates.forEach(d => d(newValue))
}

export const useModel = () => {

    const [title, setTitle] = React.useState('Hello World')
    delegates.push(setTitle)

    return {
        title,
    }
}

export const createModel = <T>(initialValue: T) => {
    var delegates: React.Dispatch<React.SetStateAction<T>>[] = []

    const update = (newValue: T) => {
        delegates.forEach(d => d(newValue))
    }

    const useModel = () => {

        const [value, setValue] = React.useState(initialValue)
        delegates.push(setValue)

        return {
            value,
        }
    }
}