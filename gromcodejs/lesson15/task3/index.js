export const createLogger = () => {
    const memory = [];
    return {
      warn: function(str) {
        memory.push({
          message: str,
          dateTime: new Date(),
          type: "warn",
        });
      }, 
      error: function(str) {
        memory.push({
          message: str,
          dateTime: new Date(),
          type: "error",
        });
      }, 
      log: function(str) {
        memory.push({
          message: str,
          dateTime: new Date(),
          type: "log",
        });
      }, 
      
      getRecords: function(filterStr) {
        const sortedMemory = memory.sort((a, b) => {
          return b.dateTime - a.dateTime; 
        });
  
        if (filterStr === undefined) {
          return sortedMemory;
        }
  
        return sortedMemory.filter((memoryItem) => {
          return memoryItem.type === filterStr;
        });
      }
    }
  }
  
export const logger = createLogger();
// setInterval(logger.log('User logged in'), 1000);
// clearInterval(logger.log('User logged in'),1100);
// setInterval(logger.warn('User try to restricted page'), 1000);
// clearInterval(logger.warn('User try to restricted page'),1100);
// // setTimeout(logger.warn('User try to restricted page'), 2000);
// setTimeout(logger.log('User logged out'), 3000);
// setTimeout(logger.error('Unexpected error on the site'), 4000);
// logger.log('User logged in');
// logger.warn('User try to restricted page');
// logger.log('User logged out');
// logger.error('Unexpected error on the site');
// logger.getRecords(); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger.getRecords()); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger.getRecords('error'); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
//   // logger.getRecords('warn'); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
          