import fileExtension from 'file-extension';
// checking for supported files or not
export function checkSupportedFile(name) {
  if (
    fileExtension(name).toString().toLowerCase() === 'png' ||
    fileExtension(name).toString().toLowerCase() === 'jpeg' ||
    fileExtension(name).toString().toLowerCase() === 'jpg'
  ) {
    return true;
  } else {
    return false;
  }
}

export function checkSupportedDocFile(name) {
  if (fileExtension(name).toString().toLowerCase() === 'pdf') {
    return true;
  } else {
    return false;
  }
}
export function checkSupportedVideoFile(name) {
  if (
    fileExtension(name).toString().toLowerCase() === 'mp4' ||
    fileExtension(name).toString().toLowerCase() === 'webm' || 
    fileExtension(name).toString().toLowerCase() === 'ogg'
  ) {
    return true;
  } else {
    return false;
  }
}

// import * as fileExtension from '../helpers.js';
