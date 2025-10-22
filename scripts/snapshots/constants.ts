// Base URL where Express serves current EJS version
const BASE = process.env.APP_URL ?? 'https://localhost:3000';

const MONITOR_ID = '999';
const MONITOR_NAME = 'AUTOTEST';

const TEST_DATE = "10/21/2025";

export {
  BASE,
  MONITOR_ID,
  MONITOR_NAME,
  TEST_DATE
};