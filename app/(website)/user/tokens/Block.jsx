import dynamic from "next/dynamic";
const BlockElement = dynamic(() => import("./BlockElement"), {
  ssr: false,
});

const Block = ({ coin, type }) => {
  return <BlockElement coin={coin} type={type} />;
};

export default Block;
