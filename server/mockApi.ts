import type { Connect } from "vite";

const mockAdmissionData = {
  totalApplicants: 1248,
  verifiedApplicants: 986,
  rejectedApplicants: 124,

  applicationsPerProgram: [
    {
      program: "Computer Science",
      applications: 420,
    },
    {
      program: "Business Administration",
      applications: 350,
    },
    {
      program: "Engineering",
      applications: 280,
    },
    {
      program: "Medicine",
      applications: 210,
    },
    {
      program: "Arts & Humanities",
      applications: 165,
    },
  ],

  applicationTrends: [
    { date: "2026-09-01", applications: 120 },
    { date: "2026-09-02", applications: 145 },
    { date: "2026-09-03", applications: 132 },
    { date: "2026-09-04", applications: 178 },
    { date: "2026-09-05", applications: 156 },
    { date: "2026-09-06", applications: 190 },
    { date: "2026-09-07", applications: 210 },
    { date: "2026-09-08", applications: 185 },
    { date: "2026-09-09", applications: 225 },
    { date: "2026-09-10", applications: 240 },
    { date: "2026-09-11", applications: 218 },
    { date: "2026-09-12", applications: 260 },
    { date: "2026-09-13", applications: 275 },
    { date: "2026-09-14", applications: 290 },
    { date: "2026-09-15", applications: 310 },
  ],
};

const MOCK_API_DELAY = 800;

export const mockApiMiddleware: Connect.NextHandleFunction = (
  req,
  res,
  next,
) => {
  if (
    req.url === "/api/v1/analytics/admissions" &&
    req.method === "GET"
  ) {
    setTimeout(() => {
      res.statusCode = 200;

      res.setHeader(
        "Content-Type",
        "application/json",
      );

      res.setHeader(
        "Cache-Control",
        "no-store",
      );

      res.end(JSON.stringify(mockAdmissionData));
    }, MOCK_API_DELAY);

    return;
  }

  next();
};