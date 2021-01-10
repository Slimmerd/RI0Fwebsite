
// Required field validation
export const requiredField = (value) => {
    if (value) return undefined;
    return true
}

// Validate email field
export const emailField = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return true
    } else {
        return undefined
    }
}

// Validate maxLength
export const maxLength = max => value => {
    if (value && value.length > max) {
        return `Max: ${max} symbols`
    } else {
        return undefined
    }

}

// Validate minLength
export const minLength = min => value => {
    if (value && value.length < min) {
        return `Min: ${min} symbols`
    } else {
        return undefined
    }
}

// Validate letter field
export const OnlyLetters = value => {
    if (value && !/^[a-zA-Z-А-Яа-я]+$/u.test(value)) {
        return true
    } else {
        return undefined
    }
}