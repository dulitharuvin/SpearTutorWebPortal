export let EMAIL_REGEX: RegExp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
export let NIC_REGEX: RegExp = /^[0-9]{9}[vVxX]$/;
export let PASSWORD_REGEX: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
export let TELEPHONE_REGEX: RegExp = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;