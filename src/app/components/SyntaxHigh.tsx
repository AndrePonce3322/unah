import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function SyntaxHigh({ code, className, lang = "html" }: { code: string, className?: string, lang?: string}) {
  return <div className={`bg-[#efecf4] py-4 flex flex-col gap-2 ${className}`}>
    <div className='flex gap-2 pl-2'>
      <div className="size-3 bg-red-500 rounded-full"></div>
      <div className="size-3 bg-yellow-500 rounded-full"></div>
      <div className="size-3 bg-green-500 rounded-full"></div>
    </div>

    <SyntaxHighlighter language={lang} style={atelierCaveLight}>
      {code}
    </SyntaxHighlighter>
  </div>
}