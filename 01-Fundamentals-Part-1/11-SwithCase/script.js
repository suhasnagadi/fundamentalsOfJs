let today = new Date().getDay()

switch (today) {
    case 1:
        alert('Today is Monday');
        break;
    case 2:
        alert('Today is Tuesday');
        break;
    case 3:
        alert('Today is Wednesday');
        break;
    case 4:
        alert('Today is Thursday');
        break;
    case 5:
        alert('Today is Friday');
        break;
    case 6:
        alert('Today is Saturday');
        break;
    case 7:
        alert('Today is Sunday');
        break;
    default:
        alert('Invalid entry');
}