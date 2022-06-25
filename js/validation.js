
// validation ...

export function validReg(){
    $('#submit').removeAttr('disabled');
}

export function notValid(){
    $('#submit').attr('disabled' , 'disabled');
}


// Validation for form...


export let checkName;
export function validUserName(){
    let regexName = /^[A-Z][a-z- ]{2,15}$/;
    checkName = (regexName.test($('#userName').val()));
    if(checkName == true)
    {
        $('#userName').addClass('is-valid');
        $('#userName').removeClass('is-invalid');
        $('#alertName').css('display' , 'none');
    }
    else
    {
        $('#userName').addClass('is-invalid');
        $('#userName').removeClass('is-valid');
        $('#alertName').css('display' , 'block');
    }
}

export let checkEmail;
export function validUserEmail(){
    let regexEmail = /^[a-zA-Z0-9_]{3,15}(@[a-zA-Z0-9]{3,15}\.com)$/;
    checkEmail = regexEmail.test($('#userEmail').val());
    if(checkEmail == true)
    {
        $('#userEmail').addClass('is-valid');
        $('#userEmail').removeClass('is-invalid');
        $('#alertEmail').css('display' , 'none');
    }
    else
    {
        $('#userEmail').addClass('is-invalid');
        $('#userEmail').removeClass('is-valid');
        $('#alertEmail').css('display' , 'block');
    }
}

export let checkPhone;
export function validUserPhone(){
    let regexPhone = /^(002)?(01)[0125][0-9]{8}$/;
    checkPhone = regexPhone.test($('#userPhone').val());
    if(checkPhone == true)
    {
        $('#userPhone').addClass('is-valid');
        $('#userPhone').removeClass('is-invalid');
        $('#alertPhone').css('display' , 'none');
    }
    else
    {
        $('#userPhone').addClass('is-invalid');
        $('#userPhone').removeClass('is-valid');
        $('#alertPhone').css('display' , 'block');
    }
}

export let checkAge;
export function validUserAge(){
    let regexAge = /^([2-7][0-9]|80)$/;
    checkAge = regexAge.test($('#userAge').val());
    if(checkAge == true)
    {
        $('#userAge').addClass('is-valid');
        $('#userAge').removeClass('is-invalid');
        $('#alertAge').css('display' , 'none');
    }
    else
    {
        $('#userAge').addClass('is-invalid');
        $('#userAge').removeClass('is-valid');
        $('#alertAge').css('display' , 'block');
    }
}

export let checkPass;
export function validUserPass(){
    let regexPass = /^[a-zA-Z][0-9][a-zA-Z0-9- ]{6,}$/;
    checkPass = regexPass.test($('#userPass').val());
    if(checkPass == true)
    {
        $('#userPass').addClass('is-valid');
        $('#userPass').removeClass('is-invalid');
        $('#alertPass').css('display' , 'none');
    }
    else
    {
        $('#userPass').addClass('is-invalid');
        $('#userPass').removeClass('is-valid');
        $('#alertPass').css('display' , 'block');
    }
}

export let checkRepass;
export function validUserRepass(){
    checkRepass = true ? $('#userRepass').val() == $('#userPass').val() != '' : false;
    if(checkRepass == true)
    {
        $('#userRepass').addClass('is-valid');
        $('#userRepass').removeClass('is-invalid');
        $('#alertRepass').css('display' , 'none');
    }
    else
    {
        $('#userRepass').addClass('is-invalid');
        $('#userRepass').removeClass('is-valid');
        $('#alertRepass').css('display' , 'block');
    }
}
