var text = "'lala'  lal'a 'lala'  ";

console.log(text.replace(/\'/g, '"'));

console.log(text.replace(/(\B\'|\'\B)/gm, '"'));





function validator() {
    var valid = true;
    //Определяем поле и его сообщение об ошибке
    var name = document.getElementById('name');
    var nameError = document.getElementById('name-error');
    var nameTest = /^[ёа-яЁА-Я]{2,}$/g;

    //Определяем поле и его сообщение об ошибке
    var phone = document.getElementById('phone');
    var phoneError = document.getElementById('phone-error');
    var phoneTest =  /^\+7\(\d{3,3}\)\d{3,3}\-\d{4,4}$/; 
 
    //Определяем поле и его сообщение об ошибке
    var email = document.getElementById('email');
    var emailError = document.getElementById('email-error');
    var emailTest = /^\w{1,}\S*\w*\@{1,1}\w{2,}\.\w{2,6}$/i;







        if (!nameTest.test(name.value)) {
            nameError.textContent = 'Имя - может содержать только буквы (Русский алфавит, не менее 2-х).';
            name.className = 'error';
            console.log(nameTest.test(name.toString));



                valid = false;
        }
        else {
            nameError.textContent = '';
            name.className = 'good';


        }



        if (!phoneTest.test(phone.value)) {
            phoneError.textContent = `Точно по форме '+7(000)000-0000'`;
            phone.className = 'error';
            phoneError.style.display = 'block';
            valid = false;
        }
        else {
            phoneError.textContent = '';
            phone.className = 'good';
        }

    
    if (!emailTest.test(email.value)) {
        emailError.textContent = 'Например: mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru ';
        
        emailError.style.display = 'block';
        email.className = 'error';

        valid = false;



    }
    else {
        emailError.textContent = '';
        email.className = 'good';
    }



        return valid;


}


   
    

