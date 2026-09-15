# University Admission Analytics Dashboard

A responsive admission analytics dashboard built with React, TypeScript, Vite, Material UI, Recharts, and Axios.

The dashboard provides university admission teams with a simple way to monitor applicant metrics, analyze applications by program, and view application trends over a selected date range.

---

## Features

- Responsive dashboard for desktop, tablet, and mobile
- Total, verified, and rejected applicant metrics
- Animated metric counters
- Applications per program visualization
- Application trend visualization
- Date range filtering for application trends
- Refresh functionality
- Loading state
- Error state with retry functionality
- Empty state handling
- Mock REST API using Vite middleware
- Simulated API network delay
- Responsive Material UI layout
- Reusable and modular React components
- Type-safe API responses using TypeScript
- Accessible buttons, sections, and visual elements

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React | UI development |
| TypeScript | Type safety |
| Vite | Development server and build tool |
| Material UI | UI components and responsive styling |
| Recharts | Data visualization |
| Axios | API communication |
| Vite Middleware | Mock API implementation |

---

## Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

You can verify your installation with:

node --version
npm --version
git --version

---
## Project Structure

```text
university-admission-dashboard/
│
├── public/
│
├── server/
│   └── mockApi.ts
│
├── src/
│   ├── api/
│   │   └── analytics.ts
│   │
│   ├── components/
│   │   ├── DashboardHeader.tsx
│   │   ├── MetricCard.tsx
│   │   ├── ApplicationBarChart.tsx
│   │   ├── ApplicationTrendChart.tsx
│   │   ├── DateRangeFilter.tsx
│   │   ├── LoadingState.tsx
│   │   ├── ErrorState.tsx
│   │   └── EmptyState.tsx
│   │
│   ├── pages/
│   │   └── AdmissionDashboard.tsx
│   │
│   ├── types/
│   │   └── analytics.ts
│   │
│   ├── theme/
│   │   └── theme.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── vite.config.ts
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── README.md
