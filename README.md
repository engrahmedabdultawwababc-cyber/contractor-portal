# Al Rajhi Contractor Portal

Arabic contractor intake, project document sharing, private uploads, admin dashboard, and internal contractor evaluations.

## Cloudflare Git deployment

- Worker name: `contractor-portal`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Root directory: repository root

D1 and R2 bindings are provisioned at deployment. R2 must be activated in the Cloudflare account. The deployment script applies database migrations after provisioning.

After deployment, add runtime **Secrets** in the Worker Settings → Variables and Secrets:

- `ADMIN_PASSWORD`: a long unique admin password.
- `SESSION_SECRET`: an independent long random value (at least 64 characters recommended).

These are Worker runtime secrets, not Build variables. Do not put secret values in GitHub.

Open `/admin`, add a project and enable public applications. Share `/contractor` with suppliers. Contractor private access links must be retained by their owners. Internal evaluations and notes are admin-only.

## Development

`npm install`, `npm run build`, `npm test`.

The previous ZIP guide covers manual provisioning; this repository uses automatic resource provisioning instead. It starts with an empty database and does not import the separate Sites deployment's data.
