import { useParams, useLocation, useSearchParams } from "react-router";
import queryString from "query-string";
import { HStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";
import { useState } from "react";

export default function About() {
  const [clicky, setClicky] = useState(0);
  const location = useLocation();
  // const param = useParams();
  // const [searchParams] = useSearchParams();
  // console.log(queryString.parse(location.search));
  const name = queryString.parse(location.search).name;
  // console.log("param: ", param);
  // console.log("searchParams: ", searchParams.getAll("q"));
  function helloW(val: number) {
    console.log("==> ");
    console.log("hello everybody", name, val);
  }

  function hello() {
    console.log("clicky");
    setClicky((clicky) => clicky + 1);
  }
  function hello1(val: number) {
    console.log("hello1");
  }
  return (
    <>
      <p>About</p>
      <HStack onClick={(e) => hello()}>
        <Button
          onClick={(e) => {
            hello1(1);
          }}
          colorPalette="teal"
          variant="solid"
        >
          <RiMailLine /> Email -- {clicky}
        </Button>
        <p
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            helloW(1);
          }}
        >
          Call us <RiArrowRightLine />
        </p>
      </HStack>
    </>
  );
}
