import moment from 'moment';
import t from '../common/localization';

export const formatPosition = (value, key) => {
  if (value != null && typeof value === 'object') {
    value = value[key];
  }
  switch (key) {
    case 'fixTime':
    case 'deviceTime':
    case 'serverTime':
    case 'startTime':
    case 'endTime':
      return moment(value).format('LLL');
    case 'latitude':
    case 'longitude':
      return value.toFixed(5);
    case 'speed':
    case 'course':
      return value.toFixed(1);
    case 'batteryLevel':
      return value + '%';
    default:
      if (typeof value === 'number') {
        return formatNumber(value);
      } else if (typeof value === 'boolean') {
        return formatBoolean(value);
      } else {
        return value;
      }
  }
};

export const formatBoolean = (value) => {
  return value ? t('sharedYes') : t('sharedNo');
};

export const formatNumber = (value, precision = 1) => {
  return Number(value.toFixed(precision));
};

export const formatDate = (value, format = 'YYYY-MM-DD HH:mm') => {
  return moment(value).format(format);
};

export const formatDistance = (value, unit) => {
  switch (unit) {
    case 'mi':
      return `${(value * 0.000621371).toFixed(2)} ${t('sharedMi')}`;
    case 'nmi':
      return `${(value * 0.000539957).toFixed(2)} ${t('sharedNmi')}`;
    case 'km':
    default:
        return `${(value * 0.001).toFixed(2)} ${t('sharedKm')}`;
  }
};

export const formatSpeed = (value, unit) => {
  switch (unit) {
    case 'kmh':
      return `${(value * 1.852).toFixed(2)} ${t('sharedKmh')}`;
    case 'mph':
      return `${(value * 1.15078).toFixed(2)} ${t('sharedMph')}`;
    case 'kn':
    default:
        return `${(value * 1).toFixed(2)} ${t('sharedKn')}`;
  }  
};

export const formatHours = (value) => {
  return moment.duration(value).humanize();
};
