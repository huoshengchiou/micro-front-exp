import { Button } from "@chakra-ui/react";
import useCount from "../store";
import "./index.css";

export const CountBtn = () => {
  const [count, setCount] = useCount();

  return (
    <>
      <div>{count}</div>
      <button className="button-4" onClick={() => setCount((v) => v + 1)}>
        plus 1
      </button>
      {/* <Button colorScheme="teal" size="md" onClick={() => setCount((v) => v + 1)}>
        Button
      </Button> */}
    </>
  );
};
