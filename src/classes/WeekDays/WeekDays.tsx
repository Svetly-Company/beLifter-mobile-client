function daysInMonth(month:number, year:number){
    const date = new Date(year, month, 0);
    return date.getDate();
}

function formatWeek(weekArray:number[], lastMonthDays:number, monthDays:number){
    for(let i = 0; i < 7; i++){
        if(weekArray[i] <= 0){
            weekArray[i] += lastMonthDays
        }else if(weekArray[i] > monthDays){
            weekArray[i] %= monthDays;
        }
    }
    return weekArray
}

export function getDates(){
    const date = new Date()
    const actualMonth:number = date.getMonth() + 1
    const actualYear = date.getFullYear();
    const dayOfWeek = date.getDay();
    const actualDay = date.getDate();
    const monthDays = daysInMonth(actualMonth, actualYear);
    const lastMonthDays = daysInMonth(actualMonth-1, actualYear);
    let arr:number[];
    switch(dayOfWeek){
        case 0:
            arr = [actualDay, actualDay+1, actualDay+2, actualDay+3, actualDay+4, actualDay+5, actualDay+6];
            return formatWeek(arr, lastMonthDays, monthDays);
        case 1:
            arr = [actualDay-1, actualDay, actualDay+1, actualDay+2, actualDay+3, actualDay+4, actualDay+5];
            return formatWeek(arr, lastMonthDays, monthDays);
        case 2:
            arr = [actualDay-2, actualDay-1, actualDay, actualDay+2, actualDay+3, actualDay+3, actualDay+4];
            return formatWeek(arr, lastMonthDays, monthDays);
        case 3:
            arr = [actualDay-3, actualDay-2, actualDay-1, actualDay, actualDay+1, actualDay+2, actualDay+3];
            return formatWeek(arr, lastMonthDays, monthDays);
        case 4:
            arr = [actualDay-4, actualDay-3, actualDay-2, actualDay-1, actualDay, actualDay+1, actualDay+2];
            return formatWeek(arr, lastMonthDays, monthDays);
        case 5:
            arr = [actualDay-5, actualDay-4, actualDay-3, actualDay-2, actualDay-1, actualDay, actualDay+1];
            return formatWeek(arr, lastMonthDays, monthDays);
        case 6:
            arr = [actualDay-6, actualDay-5, actualDay-4, actualDay-3, actualDay-2, actualDay-1, actualDay];
            return formatWeek(arr, lastMonthDays, monthDays);
        default:
            return [1,1,1,1,1,1,1]
    }

}