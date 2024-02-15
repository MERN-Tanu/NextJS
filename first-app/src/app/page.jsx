import LearnCSSModule from "@/components/LearnCSSModule";
import LearnDataFetching from "@/components/LearnDataFetching";
import LearnLink from "@/components/LearnLink";
import LearnRouter from "@/components/LearnRouter/LearnRouter";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseGlobalCSS from "@/components/LearnUseGlobalCSS";
import LearnUseImage from "@/components/LearnUseImage";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink />
       */}
      {/* <LearnRouter />
       */}

       {/* <LearnServerComponent/> */}
       {/* <LearnClientComponent/> */}

       {/* <LearnUseGlobalCSS/>
        */}
        {/* <LearnCSSModule/> */}
        {/* <LearnUseImage/> */}
        <LearnDataFetching/>
    </main>
  );
}
