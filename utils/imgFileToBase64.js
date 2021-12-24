export const imgFileToBase64 = file =>
  new Promise((resolve, reject) => {
    if (!file) {
      resolve('');
    }

    const reader = new FileReader();

    reader.onloadend = () => resolve(reader.result);

    reader.onerror = e => resolve(e);

    reader.readAsDataURL(file);
  });
