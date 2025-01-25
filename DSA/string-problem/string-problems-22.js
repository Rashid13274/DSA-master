/* Problems: Counting minutes
Input: "12:30pm-12:00am" 
Input: "1:23am-1:08am"

Note: 
let str = 'randome_pm';
let val = str.slice(-2);
console.log(val, str); // pm randome_pm

so slice does not slice the actual passed string.
*/ 


    function countingMinutes(str) {
        let strArr = str.split('-');
        let startTime = strArr[0].trim();
        let endTime = strArr[1].trim();
    
        // Function to convert time to minutes
        function timeToMinutes(time) {
            // Extract the hours, minutes, and period (am|pm)
            const period = time.slice(-2); // Extract 'am' or 'pm'
            let a = time.slice(-1)
            let b = time.slice(0);
            let c = period;
             console.log({a: a, b: b, c: c});

            console.log(period);
            console.log(time)
            const [hours, minutes] = time.slice(0, -2).split(':').map(Number);
            console.log(hours);
    
            // Convert 12-hour format into 24-hour format
            let totalHours = hours;
            if (period === 'pm' && hours !== 12) {
                totalHours += 12;
            } else if (period === 'am' && hours === 12) {
                totalHours = 0;
            }
    
            // Return the total minutes
            return totalHours * 60 + minutes;
        }
    
        // Convert start and end times to minutes
        let startMinutes = timeToMinutes(startTime);
        let endMinutes = timeToMinutes(endTime);
    
        // Calculate the difference in minutes
        let difference = endMinutes - startMinutes;
    
        // If the difference is negative, it means end time is on the next day
        if (difference < 0) {
            difference += 24 * 60; // Add 24 hours worth of minutes
        }
    
        return difference;
    }

    function test(s){
        let startTime = s.split('-')[0];
        let endTime = s.split('-')[1];

        let ss = calculateMin(startTime);
        let e = calculateMin(endTime);
        let diff = e - ss;

        
        if(diff < 0){
            // add 24 hours since it'will happend next day
            diff += 24 * 60;
        }
        return diff;
        
        function calculateMin(time){
            const period = time.slice(-2); // am | pm;
            const [hour, min] = time.slice(0, -2).split(':').map(Number);
            let totalHours  = hour
            if(period == 'pm' && hour !== 12){
                totalHours += 12;
            }
            else if(period == 'am' && hour == 12){
                totalHours  = 0;
            }

            return totalHours * 60 + min;
        }
        

    }

    console.log(test("12:30pm-12:00am")); // Output: 690
    console.log(test("1:23am-1:08am"));   // Output: 1425
    console.log(test("1:00pm-2:00am"));   // Output: 780

    // Test cases
    // console.log(countingMinutes("12:30pm-12:00am")); // Output: 690
    // console.log(countingMinutes("1:23am-1:08am"));   // Output: 1425
    // console.log(countingMinutes("1:00pm-2:00am"));   // Output: 780
    


    /* note  */

    // let str = 'randome_pm';
    // let val = str.slice(-2);
    // console.log(val, str);



