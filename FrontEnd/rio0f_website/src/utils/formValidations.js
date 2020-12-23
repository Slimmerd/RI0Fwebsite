// Required field validation
export const requiredField = value => {
    if (value) return undefined;
    return "Field is required"
}

export const emailField = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address'
    } else {
        return undefined
    }
}