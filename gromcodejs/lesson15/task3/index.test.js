
import { createLogger, logger } from './index';

it('must return the object with key-type error under index 0 in the sortedMemory', () => {
    logger.error('Unexpected error on the site');
    const result = logger.getRecords('error');
    expect(result[0].type).toEqual('error');
});

it('must return the object with key-type log under index 0 in the sortedMemory', () => {
    logger.log('User logged in');
    const result = logger.getRecords('log');
    expect(result[0].type).toEqual('log');
});
it('must return the object with key-type warn under index 0 in the sortedMemory', () => {
    logger.warn('User try to restricted page');
    const result = logger.getRecords('warn');
    expect(result[0].type).toEqual('warn');
});
it('must return the all objects  in the sortedMemory', () => {
    logger.log('User logged in');
    logger.warn('User try to restricted page');
    logger.log('User logged out');
    logger.error('Unexpected error on the site');
    const result = logger.getRecords();
    expect(result[0].type).toEqual('log');
    expect(result[1].type).toEqual('warn');
    expect(result[2].type).toEqual('log');
    expect(result[3].type).toEqual('error');
});


