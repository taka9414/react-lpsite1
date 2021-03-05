import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AlertButton } from "./components/Button";
import { ComponentsTabs } from "./components/ComponentsTabs";
import { ComponentsAccordion } from "./components/ComponentsAccordion";
import { ComponentsFormInput } from "./components/ComponentsFormInput";
import { ComponentsNavbar } from "./components/ComponentsNavbar";

export const App = () => {
  const onClickAlert = () => alert();
  return (
    <>
      <ComponentsNavbar></ComponentsNavbar>
      <ComponentsTabs className="col-10 offset-1 mt-3"></ComponentsTabs>

      <ComponentsAccordion className="col-10 offset-1 mt-3"></ComponentsAccordion>

      <ComponentsFormInput
        className="col-10 offset-1 mt-3"
        formLabel="test1"
        textMuted="test1の注意書き"
      ></ComponentsFormInput>

      <ComponentsFormInput
        className="col-10 offset-1 mt-3"
        formLabel="test2"
      ></ComponentsFormInput>

      <AlertButton
        className="btn btn-primary offset-2 col-8 mb-3"
        onClick={onClickAlert}
      >
        テストボタン
      </AlertButton>
      <footer class="text-center pt-3 border-top">&copy; 2020 TEST Inc.</footer>
    </>
  );
};
