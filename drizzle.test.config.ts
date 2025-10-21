import type { Config } from 'drizzle-kit';

// Hardcode the values temporarily for testing
const TURSO_URL = 'libsql://donaldson-agency-stirlingwdonaldson.aws-ap-south-1.turso.io';
const TURSO_TOKEN = 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjEwMzI2MzAsImlkIjoiODNjOTc4NjAtMTY5ZS00YzQ0LWEzZjYtN2RlNmUxZDVkMTlhIiwicmlkIjoiYzk2N2E4M2UtMzE2Yy00MDM2LTg1ZTgtODNhYThlOWViZDZlIn0.BsqhF72wLvP6yANNulThQ1E2MoBHtb_fDdMd6gynpiKPbSsqHXpHTRfrEXGVapa1t13rdjX4-VvAX-PITRiQDQ'; // Replace with actual token

export default {
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: TURSO_URL,
    authToken: TURSO_TOKEN,
  },
} satisfies Config;
