import puppeteer from 'puppeteer';

export const getBrowser = async () => {
  const env = process.env.NODE_ENV;
  console.log(env);
  if (env === 'local') {
    return puppeteer.launch();
  }
  return puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser'
  });
};
