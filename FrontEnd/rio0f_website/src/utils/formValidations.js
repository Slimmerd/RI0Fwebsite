// Required field validation
export const requiredField = value => {
    if (value) return undefined;
    return "Field is required"
}

// Validate email field
export const emailField = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address'
    } else {
        return undefined
    }
}

// Validate maxLength
export const maxLength = max => value => {
    if (value && value.length > max) {
        return `Must be ${max} characters or less`
    } else {
        return undefined
    }

}

// Validate minLength
export const minLength = min => value => {
    if (value && value.length < min) {
        return `Must be ${min} characters or more`
    } else {
        return undefined
    }
}

// Validate letter field
export const OnlyLetters = value => {
    if (value && !/^[a-zA-Z-А-Яа-я]+$/u.test(value)) {
        return 'Accepts only latin and cyrillic letters'
    } else {
        return undefined
    }
}

//TODO: Translation