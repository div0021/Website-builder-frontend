import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import HeadingContent from "./components/HeadingContent";
import Navbar from "./components/Navbar/Navbar";
import RelatedItems from "./components/RelatedItems";
import Subscribe from "./components/Subscribe";
import WebsiteBuilderCard from "./components/WebsiteBuilderCard";

const BreadcrumbsElements = [
  { element: "Home" },
  { element: "Hosting for all" },
  { element: "Hosting Hosting6" },
  { element: "Hosting5" },
];

export default function Home() {
  return (
    <main
      className="flex min-w-fit min-h-screen flex-col items-center justify-start bg-background"
      id="top"
    >
      <Navbar />

      <HeadingContent />
      <Breadcrumbs element={BreadcrumbsElements} />

      <WebsiteBuilderCard />
      <RelatedItems />
      <Subscribe />
      <Footer />
    </main>
  );
}
