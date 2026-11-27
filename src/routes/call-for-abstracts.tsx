import { createFileRoute, redirect } from "@tanstack/react-router";

// The Call for Abstracts page was removed by the organiser; old links land on the home page.
export const Route = createFileRoute("/call-for-abstracts")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
