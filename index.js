// code your solution here
function saturdayFun(activity ='roller-skate') {
    if (activity === 'roller-skate') {
        return `This Saturday, I want to ${activity}!`
    } else {
        return `This Saturday, I want to ${activity}!`
    }
}

function mondayWork(param1 = 'go to the office') {
    if (param1 === 'go to the office') {
        return `This Monday, I will ${param1}.`
    } else {
        return `This Monday, I will ${param1}.`
    }
}

function wrapAdjective(outerParam1 = '*'){
    return function (innerParam1 = 'special') {
        return `You are ${outerParam1}${innerParam1}${outerParam1}!`
    }
}