import type { Metadata } from "next";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Kawa Development · Andres Bejarano",
  description: "コスタリカ出身のセキュリティエンジニア、ソフトウェア開発者。流れに任せて。",
};

export default function HomeJA() {
  return <PageContent lang="ja" />;
}
