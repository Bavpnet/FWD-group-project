import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Menu from "../src/components/menu";

export default function test() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    router.push("/");
  }, []);
  return (
    <div>
      <Menu />
    </div>
  );
}
