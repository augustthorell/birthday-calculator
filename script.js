var calcAge = function() {
    var birthDate, now, distance, birthday, oneYearFromNow;

    // User input on how old they are
    birthDate = document.getElementById('birthday').value;


    // Converts the value the user gave to an array
    function numberToArray(birthday) {
        var birthday = birthDate.toString().split('-');
        return birthday.map(x => parseInt(x));
        
    }
    birthday = numberToArray(birthDate);
 

    // Calculate days until next birthday
    function nextBirthday() {
        var date = new Date();
        var year = date.getFullYear();
        var newBirthday = birthday.splice(0, 1, year)
        newBirthday = Date.parse(birthday);
        return newBirthday;
    }
    var next = nextBirthday();

    // Convert date to millieseconds
    birthDate = Date.parse(birthDate);

    // Get date
    function getDate() {
        now = new Date().getTime();
        return now;
    }

    // Subtract current date from your date
    function calcdays(a) {
        var currentDate = getDate();
        distance = a - currentDate;
    
        var days = Math.round(distance / (1000 * 60 * 60 * 24));
        days = Math.round(days +1);

        return days;
    }
    

    function nextYear(a) {
        currentDate = new Date();
        var oneYear = 31556952000
        distance = a - (currentDate - oneYear);
        console.log(distance);
        var days = Math.round(distance / (1000 * 60 * 60 * 24));
        days = Math.round(days);
        days = Math.abs(days);

        return days;
         
    };


    var daysLeftYear = nextYear((next));
    var daysLeft = calcdays(next);
    
    var daysOld = calcdays(birthDate);
    daysOld = Math.abs(daysOld);


    // Displays the result to the user
   
    
    if (daysLeft <= 0) {
        document.querySelector('#countDown').textContent = 'Your next birthday is in '+ daysLeftYear + ' days!';
        
    } else {
        document.querySelector('#countDown').textContent = 'Your next birthday is in '+ (daysLeft - 1) + ' days!';
    }

    document.querySelector('#yourAge').textContent = 'Wow you were born '+ (daysOld + 1) + ' days ago!';
}
