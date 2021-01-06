import i18next from "i18next";

// Required field validation
export const requiredField = value => {
    if (value) return undefined;
    return i18next.t('validation:required_field')
}

// Validate email field
export const emailField = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return i18next.t('validation:email_field')
    } else {
        return undefined
    }
}

// Validate maxLength
export const maxLength = max => value => {
    if (value && value.length > max) {
        return i18next.t('validation:max_length', {max: max})
    } else {
        return undefined
    }

}

// Validate minLength
export const minLength = min => value => {
    if (value && value.length < min) {
        return i18next.t('validation:min_length', {min: min})
    } else {
        return undefined
    }
}

// Validate letter field
export const OnlyLetters = value => {
    if (value && !/^[a-zA-Z-А-Яа-я]+$/u.test(value)) {
        return i18next.t('validation:only_letters')
    } else {
        return undefined
    }
}