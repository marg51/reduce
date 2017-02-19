export const identity = (value) => value

export const map = (object, predicate = identity) =>
    Object.keys(object).reduce((state, key) =>
        state.push(predicate(object[key])) && state
    , [])

export const filter = (object, predicate) =>
    map(object).reduce((state, value) =>
        (predicate(value) ? state.push(value): true) && state
    , [])

export const some = (array, fn) =>
    array.reduce((state, elm) =>
        fn(elm)? true : state
    , false)

export const every = (array, fn) =>
    array.reduce((state, elm) =>
        !fn(elm)? false : state
    , true)

export const keyBy = (array, key) =>
    array.reduce((state, elm) =>
        (state[elm[key]] = elm) && state
    , {})

// self is used to access all the functions above
const self = this
export const chain = object => {
    const proxy = new Proxy(object, {
        functions: [],
        get(target, name) {
            if(name == "values") {
                return () => this.functions.reduce((state, [fn, args]) => fn(state, ...args), target)
            }

            return (...args) => {
                this.functions.push([self[name] || identity, args])

                return proxy
            }
        }
    })
    return proxy
}