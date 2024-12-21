let today = new Date().getDay()

today == 1 ? alert('today is Monday') : today == 2 ? alert('today is Tuesday') : today == 3 ? alert('today is Wednesday') 
: today == 4 ? alert('today is Thursday') : today == 5 ? alert('today is Friday') : today == 6 ? alert('today is Saturday')
: today == 7 ? alert('today is Sunday') : alert('invalid day');