import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import("next1/mainLayout"), {
  ssr: false,
  suspense: true,
});

export default MainLayout;
