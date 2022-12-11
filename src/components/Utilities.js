//use local storage
const addToLocalDB = element => {
    let timeCount;

    const storedTime = localStorage.getItem('itme-count')
    if (storedTime) {
        timeCount = JSON.parse(storedTime);
    }
    else {
        timeCount = {};
    }

    const timeStore = timeCount[element.id];
    if (timeStore) {
        console.log(timeStore);
        const newtimeStore = timeStore + element.time;
        timeCount[element.id] = newtimeStore;
        // localStorage.setItem(element.id, newtimeStore);
    }
    else {
        timeCount[element.id] = element.time;
        // localStorage.setItem(element.id, element.time);
    }
    localStorage.setItem('itme-count', JSON.stringify(timeCount));

}

const addBreakToLocalDB = time => {
    let breakCount = {};

    const breakTimeStore = breakCount[time];
    if (breakTimeStore) {
        console.log(breakTimeStore);
        const newtimeStore = time;
        breakCount[time] = newtimeStore;
        // localStorage.setItem(element.id, newtimeStore);
    }
    else {
        breakCount[time] = time;
        // localStorage.setItem(element.id, element.time);
    }
    localStorage.setItem('break-itme-count', JSON.stringify(breakCount));

}
export { addToLocalDB, addBreakToLocalDB }
