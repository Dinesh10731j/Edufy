"use client";

import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Image from "@editorjs/image";
import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import inlineCode from "@editorjs/inline-code" ;
import Quote from '@editorjs/quote';
import Raw from "@editorjs/raw"

interface EditorjsProps {
  onInit: (editor: EditorJS) => void;
}

const EditorJs: React.FC<EditorjsProps> = ({ onInit }) => {
  const editorJsRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorJsRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          paragraph: Paragraph,
          image: Image,
          code: Code,
          header: Header,
          checklist:Checklist,
          list:List,
          table:Table,
          warning:Warning,
          embed:Embed,
          inlinecode:inlineCode,
          quote:Quote,
          raw:Raw

        },
      });

      editorJsRef.current = editor;
      onInit(editor);
    }

    return () => {
      if (editorJsRef.current?.destroy) {
        editorJsRef.current.destroy();
        editorJsRef.current = null;
      }
    };
  }, [onInit]);

  return (
    <div id="editorjs" className="w-full min-h-screen shadow-md overflow-hidden"></div>
  );
};

export default EditorJs;
