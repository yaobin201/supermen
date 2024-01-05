import Item from "./item";
import "./index.css";

export default function About() {
  return (
    <div className="h-auto w-full">
      <div className="relative h-[100vh] w-full justify-self-start bg-team bg-cover bg-no-repeat">
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-black/50">
          <div className=" text-5xl  font-bold text-white">About BingGo</div>
          <div className=" text-bg-100">
            十七年软件设计经验，专注于技术钻研与革新，致力提升程序的快捷性、稳定性及安全性。
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full flex-wrap items-center justify-center justify-items-center gap-5 bg-transparent px-10 py-10">
        <Item iconcls="bingo-icon-professions" title="专业" />
        <Item iconcls="bingo-icon-inquiry" title="咨询" />
        <Item iconcls="bingo-icon-efficiently" title="高效" />
        <Item iconcls="bingo-icon-service" title="服务" />
      </div>
      <div className="flex flex-col px-12 py-10 text-xl text-bg-100">
        <div className="pb-5 text-3xl text-bg-100">关于宾果</div>
        <div>
          宾果软件是一家专注于软件开发的公司，我们致力于打造高效、稳定、安全的软件。
        </div>
        <div>我们的软件开发团队拥有十七年的软件开发经验</div>
      </div>
    </div>
  );
}
