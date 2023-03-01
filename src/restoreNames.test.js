'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`shouldn't set firstName if it is existing`, () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Snow',
        fullName: 'John Snow',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'John',
        lastName: 'Snow',
        fullName: 'John Snow',
      },
    ];

    expect(users).toEqual(expected);
  });

  it(`should set firstName if it is not present`, () => {
    const users = [
      {
        lastName: 'Snow',
        fullName: 'John Snow',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'John',
        lastName: 'Snow',
        fullName: 'John Snow',
      },
    ];

    expect(users)
      .toEqual(expected);
  });

  it(`should set lastName if it is not present`, () => {
    const users = [
      {
        firstName: 'John',
        fullName: 'John Snow',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'John',
        lastName: 'Snow',
        fullName: 'John Snow',
      },
    ];

    expect(users)
      .toEqual(expected);
  });

  it(`should set firstName if it is null`, () => {
    const users = [
      {
        firstName: null,
        lastName: 'Snow',
        fullName: 'John Snow',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'John',
        lastName: 'Snow',
        fullName: 'John Snow',
      },
    ];

    expect(users)
      .toEqual(expected);
  });
});
