export const saveSize = (size) => {
  return {
    type: 'SAVE_SIZE_TYPE',
    payload: size,
  };
};

export const savePacking = (pack) => {
  return {
    type: 'SAVE_PACKING_TYPE',
    payload: pack,
  };
};

export const saveSupport = (support) => {
  return {
    type: 'SAVE_SUPPORT',
    payload: support,
  };
};

export const saveDate = (date) => {
  return {
    type: 'SAVE_DATE',
    payload: date,
  };
};

export const saveTime = (time) => {
  return {
    type: 'SAVE_TIME',
    payload: time,
  };
};

export const saveStart = (start) => {
  return {
    type: 'SAVE_START',
    payload: start,
  };
};

export const saveEnd = (end) => {
  return {
    type: 'SAVE_END',
    payload: end,
  };
};

export const saveLuggage = (luggage) => {
  return {
    type: 'SAVE_LUGGAGE',
    payload: luggage,
  };
};