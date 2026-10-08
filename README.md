# Water Wizard

Mobile-first irrigation management app prototype for Coulton Farming.

## IMPORTANT: prototype limitations

- Records are currently stored only in **localStorage in the current browser**. They do not sync between devices, are not backed up, and can disappear if browser data is cleared. **Do not use as the sole operational record.**
- No authentication, shared database, offline sync, audit log, or conflict resolution yet.
- The map and storage screens are placeholders pending accurate farm geometry and data modelling.
- This starter assumes one active run per field and one water source per set; multiple sources, interruptions, field layout versions, and irrigation cycles are planned.

## Run locally

Install Node.js 20+, then:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy using GitHub and Vercel

1. Upload the **contents** of this project directory to your private GitHub repository `baroakcontracting/Water-Wizard` (not the ZIP itself).
2. In Vercel, click **Add New > Project**, import the GitHub repository, and select **Deploy**.
3. Vercel should detect Next.js automatically. No environment variables are required for this prototype.
4. Open the Vercel URL on your phone and test the interface with sample data only.

## Next implementation priorities

1. Supabase database and sign-in with row-level security, validation, and backups.
2. Field configuration, set geometry, layout history, irrigation cycles, multiple water sources.
3. Atomic set changeovers with separate editable on/off times and change audit trail.
4. Offline-first queue and conflict-safe synchronization.
5. Georeferenced farm map and satellite layer with licensed imagery provider.
6. Dam level recording and ML/% calculations.

## Known prototype limitation

Date-time editor uses browser-local datetime fields; test timezone and DST behaviour before production use. The prototype intentionally does not claim production readiness.
