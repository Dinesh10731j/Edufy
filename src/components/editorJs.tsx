"use client";

import React, { useEffect, useRef } from "react";
import EditorJS,{ToolConstructable} from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";
import CodeTool from "@editorjs/code";
import Header from "@editorjs/header";
import TableTool from "@editorjs/table";
import WarningTool from "@editorjs/warning";
import ChecklistTool from "@editorjs/checklist";
import ListTool from "@editorjs/list";
import EmbedTool from "@editorjs/embed";
import InlineCodeTool from "@editorjs/inline-code";
import QuoteTool from "@editorjs/quote";
import RawTool from "@editorjs/raw";

interface EditorjsProps {
  onInit: (editor: EditorJS) => void;
}

const EditorJs: React.FC<EditorjsProps> = ({ onInit }) => {
  const editorJsRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorJsRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        defaultBlock: "paragraph",
        placeholder: "Start creating courses.....",
        tools: {
          paragraph: {
            class: Paragraph as ToolConstructable,
            config: {
              inlineToolbar: ["bold", "italic", "inlineCode", "link", "marker"],
            },
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "file-upload-endpoint", 
                byUrl: "url-fetch-endpoint", 
              },
            },
          },
          code: {
            class: CodeTool,
          
          },
          header: {
            class: Header as unknown as ToolConstructable,
            config: {
              levels: [1,2, 3, 4,5,6],
              defaultLevel: 2,
            },
          },
          checklist: {
            class: ChecklistTool,
          },
          list: {
            class: ListTool as unknown as ToolConstructable,
          },
          table: {
            class: TableTool as unknown as ToolConstructable,
          },
          warning: {
            class: WarningTool,
          },
          embed: {
            class: EmbedTool,
          },
          inlineCode: {
            class: InlineCodeTool,
          },
          quote: {
            class: QuoteTool,
          },
          raw: {
            class: RawTool,
          },
        },
      });

      editorJsRef.current = editor;
      onInit(editor);
    }

    return () => {
      if (editorJsRef.current && typeof editorJsRef.current.destroy === "function") {
        editorJsRef.current.destroy();
        editorJsRef.current = null;
      }
    };
  }, [onInit]);

  return <div id="editorjs" className="w-full min-h-screen shadow-md overflow-hidden"></div>;
};

export default EditorJs;
