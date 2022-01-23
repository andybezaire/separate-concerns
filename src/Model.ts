import React from 'react';

type UsableModel<T> = {
    useModel: () => { model: T }
    setModel: (newValue: T) => void
}

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

export const createModelContext = <T>(initialValue: T) => {

    const model: UsableModel<T> = createModel(initialValue)

    const ModelContext = React.createContext(model)

    return {
        ModelContext,
        model,
    }
}

export const useModelContext = <T>(Context: React.Context<UsableModel<T>>) => {
    const Model = React.useContext(Context)

    const { model } = Model.useModel()
    return model
}