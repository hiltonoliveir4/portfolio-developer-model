import React, { useContext } from "react";
import { useReactToPrint } from "react-to-print";
import { ThemeContext } from "@/app/providers/themeProvider";
import "./style.scss";
import PrintIcon from "../icons/PrintIcon";

interface PrintPageProps {
  resumeContentRef: React.RefObject<HTMLDivElement>;
}

export default function PrintPage({ resumeContentRef }: PrintPageProps) {
  const handlePrint = useReactToPrint({
    content: () => resumeContentRef.current,
  });

  const { globalTheme } = useContext(ThemeContext);

  return (
    <button className={`print-btn ${globalTheme}`} onClick={handlePrint}>
      <PrintIcon/>
    </button>
  );
};
