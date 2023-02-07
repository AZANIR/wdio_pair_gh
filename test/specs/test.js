const addDays = days => date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
console.log(addDays(1)(new Date()).toISOString().split('T')[0]);
