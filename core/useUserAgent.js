import React, { useContext, useMemo } from 'react';
import { useUserAgent as _useUserAgent } from 'next-useragent';
import { UserAgentContext } from './UserAgentProvider';

const checkUserAgentParam = prop => {
  if (typeof prop === 'string') {
    return prop;
  }

  return '';
};

export const useUserAgent = () => {
  const userAgentContext = useContext(UserAgentContext);
  const userAgent = _useUserAgent(checkUserAgentParam(userAgentContext));

  return useMemo(() => {
    const { isTablet, isMobile, isDesktop } = userAgent;

    return {
      ...userAgent,
      isTabletOrMobile: Boolean(isTablet || isMobile),
      isDesktopOrTablet: Boolean(isDesktop || isTablet),
    };
  }, [userAgent]);
};

/*
Hook returns object with parsed user agent

{
  source: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4',
  deviceType: 'mobile',
  deviceVendor: 'Apple',
  os: 'iOS',
  osVersion: 8,
  browser: 'Mobile Safari',
  browserVersion: 8,
  isIphone: true,
  isIpad: false,
  isMobile: true,
  isTablet: false,
  isDesktop: false,
  isChrome: false,
  isFirefox: false,
  isSafari: true,
  isIE: false,
  isMac: false,
  isChromeOS: false,
  isWindows: false,
  isIos: false,
  isAndroid: false,
  isBot: false
}
 */
