/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const createEmployeeRecord = (arr) => {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
        allWagesFor,  // Reference to the function
    };
};

const createEmployeeRecords = (data) => {
    return data.map(createEmployeeRecord);
};

const createTimeInEvent = function (dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour)
    });
    return this;
};

const createTimeOutEvent = function (dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour)
    });
    return this;
};

const hoursWorkedOnDate = function (date) {
    const timeIn = this.timeInEvents.find(e => e.date === date).hour;
    const timeOut = this.timeOutEvents.find(e => e.date === date).hour;
    return (timeOut - timeIn) / 100;
};

const wagesEarnedOnDate = function (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(e => e.date);
    
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0); // Binding 'this' for correct context

    return payable;
};

const findEmployeeByFirstName = (collection, firstName) => {
    return collection.find(emp => emp.firstName === firstName);
};

const calculatePayroll = (records) => {
    return records.reduce((total, record) => {
        return total + record.allWagesFor();
    }, 0);
};

// Exporting all functions for testing
module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll,
};
