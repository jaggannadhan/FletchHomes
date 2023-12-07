export const format_price = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  
    return formatter.format(price).split(".")[0];
}

export const getBetterImages = (imageSrc, similarProp) => {
  if(!imageSrc) return "";
  if(similarProp) return imageSrc;
  let split = imageSrc.split(".jpg")[0];
  console.log(split);
  return split + "od-w1024_h768_x2.webp";
}

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const setCookie = (cookieName, value, expiryInDays) => {
  const d = new Date();
  d.setTime(d.getTime() + (expiryInDays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
}

export const getCookie = (cookieName) => {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const deleteCookie = (name) => {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}