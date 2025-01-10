import { useParams, useLocation, useSearchParams } from "react-router";
import queryString from "query-string";
import { HStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";

export default function About() {
  const location = useLocation();
  // const param = useParams();
  // const [searchParams] = useSearchParams();

  console.log(queryString.parse(location.search));
  const name = queryString.parse(location.search).name;
  // console.log("param: ", param);
  // console.log("searchParams: ", searchParams.getAll("q"));
  function helloW(val: number) {
    console.log("hello everybody", name, val);
  }

  return (
    <>
      <p>About</p>
      <HStack>
        <Button colorPalette="teal" variant="solid">
          <RiMailLine /> Email
        </Button>
        <Button onClick={()=>helloW(1)} colorPalette="teal" variant="outline">
          Call us <RiArrowRightLine />
        </Button>
      </HStack>
    </>
  );
}
