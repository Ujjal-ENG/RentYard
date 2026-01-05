
# RentYard

A Next.js + TypeScript rental listing UI starter built with Tailwind CSS, shadcn components, Radix UI, React Hook Form, Zod, and Lucide icons.

This repository contains the frontend for a rental marketplace (UI-focused). It uses Next.js (App Router) and modern libraries for building accessible, component-driven UIs.

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Styling & UI system](#styling--ui-system)
- [Forms & Validation](#forms--validation)
- [Linting & formatting](#linting--formatting)
- [Environment variables](#environment-variables)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

---

## Features

- Next.js app (TypeScript)
- Tailwind CSS for utility-first styling
- Component-first UI using shadcn/ui and Radix primitives
- Accessible UI primitives (Radix)
- React Hook Form + Zod for form handling and validation
- Lucide icons integrated
- Ready for developer extensibility (components, libs, utils folders present)

---

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS (v4)
- shadcn/ui (components.json present)
- Radix UI
- React Hook Form
- Zod
- Lucide icons

(See `package.json` for exact dependency versions.)

---

## Getting started

### Prerequisites

- Node.js 18+ (or a version supported by Next 15)
- Yarn (recommended, this repository includes a `yarn.lock`) — npm also works

### Install

Clone the repository and install dependencies:

```bash
git clone https://github.com/Ujjal-ENG/RentYard.git
cd RentYard
# using yarn
yarn install

# or using npm
npm install
```

### Available scripts

From the project directory, you can run:

- `yarn dev` or `npm run dev` — Run the Next.js development server (the `dev` script uses turbopack)
- `yarn build` or `npm run build` — Build the production app
- `yarn start` or `npm run start` — Start the production server (after build)
- `yarn lint` or `npm run lint` — Run Next.js/ESLint checks

(Refer to `package.json` for the definitive list and exact scripts.)

---

## Project structure

A quick overview of the important top-level files & folders:

- `app/` — Next.js App Router pages and layout (main application)
- `components/` — UI components (shadcn pattern / component library)
- `lib/` — reusable libraries and helpers
- `utils/` — utility functions
- `public/` — static assets
- `icons/` — custom/icon assets
- `components.json` — shadcn UI config (shows this repo uses shadcn + Tailwind)
- `next.config.ts` — Next.js configuration
- `tsconfig.json` — TypeScript configuration
- `package.json`, `yarn.lock` — dependencies & scripts

If you want, I can produce a more detailed tree (files inside each folder).

---

## Styling & UI system

- Tailwind CSS is configured (see `postcss.config.mjs` and `tailwindcss` devDependency).
- `components.json` indicates use of shadcn UI tooling and Lucide icons—component aliases are configured (e.g., `components: "@/components"`).
- Radix primitives (checkbox, dialog, label, select, slot) are used for accessibility and composing components.

---

## Forms & Validation

- React Hook Form is included for form state management.
- Zod is included for schema validation and can be integrated with `@hookform/resolvers` for type-safe validation.

Example pattern:
- Create a Zod schema for your form data.
- Use `useForm` from React Hook Form together with `zodResolver` to integrate validation.

---

## Linting & formatting

- ESLint is present (`eslint` + `eslint-config-next`)
- Run `yarn lint` / `npm run lint` to run checks.
- TypeScript is enabled and strict mode is set in `tsconfig.json`.

---

## Environment variables

No repository-specific environment variable reference was found while generating this README. If your app needs environment variables (API keys, DB connection strings, third-party service keys), create a local file:

```
.env.local
```

Add keys as needed, for example:

```
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
DATABASE_URL=...
```

Be careful not to commit secrets to the repository.

---

## Contributing

Contributions are welcome. A suggested workflow:

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Install dependencies and run the app locally
4. Add tests / ensure TypeScript & linting pass
5. Open a Pull Request with a clear description

If you'd like, I can add contributing guidelines, issue templates, or a PR checklist.

---

## Acknowledgements

This project uses and is inspired by the following libraries and tools:

- Next.js
- Tailwind CSS
- shadcn/ui
- Radix UI
- React Hook Form
- Zod
- Lucide icons

---

## License

No license file was found in the repository. If you want this project to be open source, add a LICENSE (e.g., MIT) to the repo. I can add a license file in a follow-up commit if you tell me which license to use.

---

If you'd like, I can commit this README to the repository (create a PR or push directly) — tell me whether you want me to add it to the default branch (and whether to use `yarn` or `npm` in the instructions), or provide additional details (screenshots, env variables, examples) you'd like included.
