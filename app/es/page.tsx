import type { Metadata } from "next";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Kawa Development · Andres Bejarano",
  description: "Ingeniero de seguridad, desarrollador de software y constructor desde Costa Rica. Déjalo fluir.",
};

export default function HomeES() {
  return <PageContent lang="es" />;
}
