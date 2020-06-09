export function studentsBirthDays(students) {
    const result = {};
    const monthDictionary = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };
    const sortedStudentsArr = [...students].sort((a, b) => {
      return new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate();
    });
  
    sortedStudentsArr.forEach(student => {
      const month = new Date(student.birthDate).getMonth();
      const monthName = monthDictionary[month];
      
      if (result.hasOwnProperty(monthName)) {
        result[monthName].push(student.name);
      } else {
        result[monthName] = [];
        result[monthName].push(student.name);
        
      };
      
   });
  
    return result;
  }